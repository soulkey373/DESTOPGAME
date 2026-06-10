  els.roomCodeLabel.textContent = state.roomCode;
  els.roomCodeInput.value = state.roomCode === "----" ? "" : state.roomCode;
}

function validPlayers() {
  return state.players.map((p) => p.trim()).filter(Boolean);
}

function startGame() {
  const players = validPlayers();
  if (players.length < 3) {
    toast("請至少輸入 3 位玩家。");
    return;
  }
  state.players = players.slice(0, 6);
  state.scores = Object.fromEntries(state.players.map((p) => [p, state.scores[p] || 0]));
  state.round = 1;
  state.guesserIndex = 0;
  state.phase = "game";
  beginRound();
  publishRoom();
}

function beginRound() {
  const deck = decks[state.selectedDeck];
  const selected = sample(deck.prompts, 5);
  state.secretPrompt = selected[0];
  state.promptOptions = shuffle(selected).map((text, index) => ({
    id: `p${Date.now()}-${index}`,
    text,
    secret: text === state.secretPrompt
  }));
  state.answers = [];
  state.answeringIndex = 0;
  state.selectedPromptId = null;
  state.ranking = {};
  state.step = "secret";
  els.answerInput.value = "";
  renderAll();
}

function activeGuesser() {
  return state.players[state.guesserIndex];
}

function answerers() {
  return state.players.filter((_, index) => index !== state.guesserIndex);
}

function currentAnswerer() {
  return answerers()[state.answeringIndex];
}

function renderGame() {
  els.roundLabel.textContent = `第 ${state.round} 回合 · ${decks[state.selectedDeck].name}牌庫`;
  els.guesserLabel.textContent = `${activeGuesser()} 是猜題者`;
  els.secretPrompt.textContent = state.secretPrompt;
  renderScoreboard();
  renderAnswers();
  renderGuessing();
}

function renderScoreboard() {
  els.scoreboard.innerHTML = "";
  state.players.forEach((player, index) => {
    const tile = document.createElement("div");
    tile.className = `score-tile ${index === state.guesserIndex ? "active" : ""}`;
    const name = document.createElement("div");
    name.className = "score-name";
    name.textContent = player;
    const value = document.createElement("div");
    value.className = "score-value";
    value.textContent = state.scores[player] || 0;
    tile.append(name, value);
    els.scoreboard.appendChild(tile);
  });
}

function renderAnswers() {
  const people = answerers();
  els.answerProgress.textContent = `${state.answers.length} / ${people.length}`;
  els.answerList.innerHTML = "";
  people.forEach((player) => {
    const found = state.answers.find((a) => a.player === player);
    const item = document.createElement("div");
    item.className = "answer-item";
    const name = document.createElement("strong");
    name.textContent = player;
    const answer = document.createElement("span");
    answer.textContent = found ? found.text : "等待作答";
    item.append(name, answer);
    els.answerList.appendChild(item);
  });
  els.answeringPlayerLabel.textContent = `${currentAnswerer() || "所有人"} 的答案`;
}

function setStep(step) {
  state.step = step;
  $$("[data-step]").forEach((node) => {
    node.classList.toggle("active", node.dataset.step === step);
  });
  if (step === "guess") renderGuessing();
}

function advanceStep(step) {
  setStep(step);
  publishRoom();
}

function submitAnswer() {
  const answer = els.answerInput.value.trim();
  if (!answer) {
    toast("請先輸入答案。");
    return;
  }
  state.answers.push({ player: currentAnswerer(), text: answer });
  state.answeringIndex += 1;
  els.answerInput.value = "";
  renderAnswers();
  if (state.answeringIndex >= answerers().length) {
    advanceStep("guess");
  } else {
    publishRoom();
  }
}

function renderGuessing() {
  els.promptPool.innerHTML = "";
  state.promptOptions.forEach((prompt) => {
    const used = Object.values(state.ranking).includes(prompt.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `prompt-option ${state.selectedPromptId === prompt.id ? "selected" : ""} ${used ? "used" : ""}`;
    button.textContent = prompt.text;
    button.addEventListener("click", () => {
      if (used) {
        const slot = Object.keys(state.ranking).find((points) => state.ranking[points] === prompt.id);
        delete state.ranking[slot];
      }
      state.selectedPromptId = prompt.id;
      renderGuessing();
    });
    els.promptPool.appendChild(button);
  });

  els.rankSlots.innerHTML = "";
  [5, 4, 3, 2, 1].forEach((points) => {
    const promptId = state.ranking[points];
    const prompt = state.promptOptions.find((item) => item.id === promptId);
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = `rank-slot ${prompt ? "filled" : ""}`;

    const score = document.createElement("span");
    score.className = "rank-points";
    score.textContent = points;
    const text = document.createElement("span");
    text.textContent = prompt ? prompt.text : "放入題目卡";
    slot.append(score, text);

    slot.addEventListener("click", () => {
      if (!state.selectedPromptId && promptId) {
        delete state.ranking[points];
        renderGuessing();
        publishRoom();
        return;
      }
      if (!state.selectedPromptId) {
        toast("先點選一張題目卡。");
        return;
      }
      Object.keys(state.ranking).forEach((key) => {
        if (state.ranking[key] === state.selectedPromptId) delete state.ranking[key];
      });
      state.ranking[points] = state.selectedPromptId;
      state.selectedPromptId = null;
      renderGuessing();
      publishRoom();
    });
    els.rankSlots.appendChild(slot);
  });
}

function reveal() {
  if (Object.keys(state.ranking).length < 5) {
    toast("請先排完 5 張題目卡。");
    return;
  }
  const secret = state.promptOptions.find((prompt) => prompt.secret);
  const point = Number(Object.keys(state.ranking).find((score) => state.ranking[score] === secret.id));
  const guesser = activeGuesser();
  state.scores[guesser] += point;
  els.resultTitle.textContent = `${guesser} 得到 ${point} 分`;
  els.resultPrompt.textContent = `真正題目：${state.secretPrompt}`;
  renderScoreboard();
  advanceStep("reveal");
}

function nextRound() {
  state.round += 1;
  state.guesserIndex = (state.guesserIndex + 1) % state.players.length;
  beginRound();
  publishRoom();
}

function resetToLobby() {
  state.phase = "setup";
  state.step = "secret";
  renderAll();
  publishRoom();
}

$("#createRoomBtn").addEventListener("click", () => {
  connectRoom(generateRoomCode(), true);
});

$("#joinRoomBtn").addEventListener("click", () => {
  const code = els.roomCodeInput.value.trim().toUpperCase();
  if (code.length < 4) {
    toast("請輸入房間碼。");
    return;
  }
  connectRoom(code, false);
});

$("#addPlayerBtn").addEventListener("click", () => {
  if (state.players.length >= 6) {
    toast("最多 6 位玩家。");
    return;
  }
  state.players.push(`玩家 ${state.players.length + 1}`);
  renderPlayers();
  saveRoom();
});

$("#startGameBtn").addEventListener("click", startGame);
$("#hideSecretBtn").addEventListener("click", () => advanceStep("answer"));
$("#submitAnswerBtn").addEventListener("click", submitAnswer);
$("#answerInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitAnswer();
});
$("#revealBtn").addEventListener("click", reveal);
$("#continueBtn").addEventListener("click", nextRound);
$("#newRoundBtn").addEventListener("click", nextRound);
$("#resetBtn").addEventListener("click", resetToLobby);

loadRoom();
if (state.roomCode === "----") state.roomCode = generateRoomCode();
renderAll();
saveRoom();