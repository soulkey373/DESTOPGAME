const decks = {
  people: {
    name: "人物",
    icon: "★",
    hint: "名人、角色、偶像、身邊的人",
    prompts: [
      "猜題者要是跟最喜歡的名人吃飯，會是誰？",
      "如果猜題者能請一位明星當生日嘉賓，會請誰？",
      "猜題者最像哪一位電影角色？",
      "猜題者遇到困難時，最想找哪個名人給建議？",
      "猜題者如果要組樂團，最想找誰當主唱？",
      "猜題者會想跟哪位歷史人物聊天一整晚？",
      "猜題者如果變成綜藝節目主持人，搭檔會是誰？",
      "猜題者心中最有安全感的人物會是誰？",
      "猜題者最可能偷偷模仿哪位名人的說話方式？",
      "猜題者如果要拍自傳電影，會找誰演自己？",
      "猜題者最想跟哪個虛構角色一起旅行？",
      "猜題者會把誰設成手機桌布？",
      "猜題者如果能拜一個人為師，會選誰？",
      "猜題者最可能在卡拉 OK 點哪位歌手的歌？",
      "猜題者會想跟哪個 YouTuber 合作？",
      "猜題者如果參加變裝派對，最可能扮成誰？",
      "猜題者覺得誰最懂自己的幽默？",
      "猜題者如果可以交換人生一天，會選誰？",
      "猜題者最想邀請誰來家裡吃火鍋？",
      "猜題者最像朋友圈裡的哪種領袖角色？"
    ]
  },
  numbers: {
    name: "數字",
    icon: "#",
    hint: "年齡、金額、時間、排名、比例",
    prompts: [
      "猜題者理想中的退休年齡是幾歲？",
      "猜題者覺得一頓完美晚餐要花多少錢？",
      "猜題者最多能連續幾天不出門？",
      "猜題者覺得自己幸運數字是幾？",
      "猜題者一天能喝幾杯飲料？",
      "猜題者旅行最能接受搭幾小時車？",
      "猜題者如果中獎，第一筆想花多少錢？",
      "猜題者覺得自己社交電量滿分幾分？",
      "猜題者願意排隊幾分鐘吃美食？",
      "猜題者手機電量低於幾趴會焦慮？",
      "猜題者覺得理想睡眠是幾小時？",
      "猜題者最常遲到幾分鐘？",
      "猜題者覺得自己唱歌實力幾分？",
      "猜題者出門前會照幾次鏡子？",
      "猜題者如果開店，商品會定價多少？",
      "猜題者一天最多能回幾則訊息？",
      "猜題者覺得友情保鮮期需要幾天見一次？",
      "猜題者會給自己的方向感幾分？",
      "猜題者理想中的房間溫度是幾度？",
      "猜題者如果要挑幸運日期，會選幾號？"
    ]
  },
  foods: {
    name: "食物",
    icon: "◐",
    hint: "料理、甜點、飲料、宵夜",
    prompts: [
      "猜題者心情不好時最想吃什麼？",
      "猜題者最適合帶去野餐的食物是什麼？",
      "猜題者如果開餐廳，招牌菜會是什麼？",
      "猜題者半夜肚子餓最可能點什麼？",
      "猜題者最像哪一道料理？",
      "猜題者第一次約會最可能選什麼食物？",
      "猜題者最不能抗拒的甜點是什麼？",
      "猜題者夏天最想喝什麼？",
      "猜題者看電影時一定要配什麼？",
      "猜題者最可能囤在冰箱裡的是什麼？",
      "猜題者覺得最有儀式感的早餐是什麼？",
      "猜題者如果只能吃一種麵，會選什麼？",
      "猜題者聚會時最想帶哪道菜？",
      "猜題者最像哪種飲料？",
      "猜題者壓力大時會想吃鹹的還是甜的？具體是什麼？",
      "猜題者旅行時最想嘗試哪種小吃？",
      "猜題者最有可能學會做哪道料理？",
      "猜題者如果被一道菜收買，會是哪一道？",
      "猜題者最能代表童年回憶的食物是什麼？",
      "猜題者慶功宴最想吃什麼？"
    ]
  },
  objects: {
    name: "物品",
    icon: "◆",
    hint: "日用品、工具、收藏、奇怪小物",
    prompts: [
      "猜題者出門最不能忘記帶什麼？",
      "猜題者房間裡最能代表他的物品是什麼？",
      "猜題者如果只能留下一件東西，會留什麼？",
      "猜題者最可能衝動購買什麼？",
      "猜題者像哪一種生活用品？",
      "猜題者旅行箱裡一定會多放什麼？",
      "猜題者壓力大時會想買什麼小物？",
      "猜題者會把什麼東西借人後很擔心？",
      "猜題者最適合收到什麼生日禮物？",
      "猜題者如果有幸運物，會是什麼？",
      "猜題者桌上最可能長期放著什麼？",
      "猜題者會為了什麼物品研究很久？",
      "猜題者最像哪種交通工具？",
      "猜題者如果要露營，第一個拿的裝備是什麼？",
      "猜題者最可能收藏什麼？",
      "猜題者如果搬家，只想先整理哪件物品？",
      "猜題者最能接受收到什麼實用禮物？",
      "猜題者會用什麼物品展現品味？",
      "猜題者手機殼會是什麼風格？",
      "猜題者如果是道具店老闆，鎮店之寶會是什麼？"
    ]
  }
};

const state = {
  roomCode: "----",
  players: ["阿峰", "小葵", "Mika"],
  selectedDeck: "people",
  phase: "setup",
  step: "secret",
  round: 1,
  guesserIndex: 0,
  scores: {},
  secretPrompt: "",
  promptOptions: [],
  answers: [],
  answeringIndex: 0,
  selectedPromptId: null,
  ranking: {}
};

const sync = {
  enabled: false,
  ready: false,
  applyingRemote: false,
  db: null,
  roomRef: null,
  offRoom: null,
  api: null
};

const firebaseConfig = window.PEAK_FIREBASE_CONFIG;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const els = {
  syncStatus: $("#syncStatus"),
  onlineNote: $("#onlineNote"),
  roomCodeLabel: $("#roomCodeLabel"),
  roomCodeInput: $("#roomCodeInput"),
  playerInputs: $("#playerInputs"),
  playerCountText: $("#playerCountText"),
  deckGrid: $("#deckGrid"),
  setupPanel: $("#setupPanel"),
  gamePanel: $("#gamePanel"),
  roundLabel: $("#roundLabel"),
  guesserLabel: $("#guesserLabel"),
  scoreboard: $("#scoreboard"),
  answerProgress: $("#answerProgress"),
  answerList: $("#answerList"),
  secretPrompt: $("#secretPrompt"),
  answeringPlayerLabel: $("#answeringPlayerLabel"),
  answerInput: $("#answerInput"),
  promptPool: $("#promptPool"),
  rankSlots: $("#rankSlots"),
  resultTitle: $("#resultTitle"),
  resultPrompt: $("#resultPrompt")
};

function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function toast(message) {
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2400);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function roomPayload() {
  return {
    roomCode: state.roomCode,
    players: state.players,
    selectedDeck: state.selectedDeck,
    phase: state.phase,
    step: state.step,
    round: state.round,
    guesserIndex: state.guesserIndex,
    scores: state.scores,
    secretPrompt: state.secretPrompt,
    promptOptions: state.promptOptions,
    answers: state.answers,
    answeringIndex: state.answeringIndex,
    ranking: state.ranking,
    updatedAt: Date.now()
  };
}

function saveRoom() {
  localStorage.setItem("peakGuessRoom", JSON.stringify({
    roomCode: state.roomCode,
    players: state.players,
    selectedDeck: state.selectedDeck
  }));
  publishRoom();
}

function loadRoom() {
  try {
    const saved = JSON.parse(localStorage.getItem("peakGuessRoom") || "null");
    if (!saved) return;
    state.roomCode = saved.roomCode || state.roomCode;
    state.players = Array.isArray(saved.players) ? saved.players.slice(0, 6) : state.players;
    state.selectedDeck = saved.selectedDeck || state.selectedDeck;
  } catch {
    localStorage.removeItem("peakGuessRoom");
  }
}

async function initFirebase() {
  if (!firebaseConfig) {
    setSyncStatus("本機模式", "目前是本機模式。填入 firebase-config.js 後，房間會自動變成線上同步。");
    return;
  }

  try {
    const appModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    const dbModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js");
    const app = appModule.initializeApp(firebaseConfig);
    sync.db = dbModule.getDatabase(app);
    sync.api = dbModule;
    sync.ready = true;
    setSyncStatus("線上模式", "Firebase 已啟用。建立或加入房間後，玩家、題目、答案和分數會即時同步。");
  } catch (error) {
    console.error(error);
    setSyncStatus("本機模式", "Firebase 還沒連上；目前先用本機模式。");
  }
}

function setSyncStatus(label, note) {
  els.syncStatus.textContent = label;
  els.syncStatus.classList.toggle("online", label === "線上模式");
  els.onlineNote.textContent = note;
}

async function connectRoom(code, createIfMissing) {
  if (!sync.ready) {
    state.roomCode = code;
    saveRoom();
    renderRoomCode();
    toast(createIfMissing ? "房間已建立。" : "已切換到這個房間。");
    return;
  }

  if (sync.offRoom) sync.offRoom();
  state.roomCode = code;
  sync.roomRef = sync.api.ref(sync.db, `peakGuessParty/rooms/${code}`);

  const snap = await sync.api.get(sync.roomRef);
  if (!snap.exists() && !createIfMissing) {
    toast("找不到這個房間，先請房主建立。");
    return;
  }
  if (!snap.exists()) {
    await sync.api.set(sync.roomRef, roomPayload());
  }

  sync.enabled = true;
  sync.offRoom = sync.api.onValue(sync.roomRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;
    sync.applyingRemote = true;
    Object.assign(state, {
      roomCode: data.roomCode || code,
      players: Array.isArray(data.players) ? data.players : state.players,
      selectedDeck: data.selectedDeck || state.selectedDeck,
      phase: data.phase || "setup",
      step: data.step || "secret",
      round: data.round || 1,
      guesserIndex: data.guesserIndex || 0,
      scores: data.scores || {},
      secretPrompt: data.secretPrompt || "",
      promptOptions: Array.isArray(data.promptOptions) ? data.promptOptions : [],
      answers: Array.isArray(data.answers) ? data.answers : [],
      answeringIndex: data.answeringIndex || 0,
      ranking: data.ranking || {}
    });
    sync.applyingRemote = false;
    renderAll();
  });

  renderRoomCode();
  toast(createIfMissing ? "線上房間已建立。" : "已加入線上房間。");
}

function publishRoom() {
  if (!sync.ready || !sync.enabled || !sync.roomRef || sync.applyingRemote) return;
  sync.api.update(sync.roomRef, roomPayload()).catch((error) => {
    console.error(error);
    toast("同步失敗，稍後再試。");
  });
}

function renderAll() {
  renderRoomCode();
  renderPlayers();
  renderDecks();
  if (state.phase === "game") {
    els.setupPanel.classList.add("hidden");
    els.gamePanel.classList.remove("hidden");
    renderGame();
    setStep(state.step);
  } else {
    els.gamePanel.classList.add("hidden");
    els.setupPanel.classList.remove("hidden");
  }
}

function renderPlayers() {
  els.playerInputs.innerHTML = "";
  state.players.forEach((player, index) => {
    const row = document.createElement("div");
    row.className = "player-row";

    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.textContent = index + 1;

    const input = document.createElement("input");
    input.value = player;
    input.setAttribute("aria-label", `玩家 ${index + 1}`);
    input.addEventListener("input", () => {
      state.players[index] = input.value.trimStart();
      saveRoom();
    });

    const removeButton = document.createElement("button");
    removeButton.className = "remove-player";
    removeButton.type = "button";
    removeButton.title = "移除玩家";
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => {
      if (state.players.length <= 3) {
        toast("至少需要 3 位玩家。");
        return;
      }
      state.players.splice(index, 1);
      renderPlayers();
      saveRoom();
    });

    row.append(avatar, input, removeButton);
    els.playerInputs.appendChild(row);
  });
  els.playerCountText.textContent = `${state.players.length} / 6`;
}

function renderDecks() {
  els.deckGrid.innerHTML = "";
  Object.entries(decks).forEach(([key, deck]) => {
    const button = document.createElement("button");
    button.className = `deck-card ${state.selectedDeck === key ? "active" : ""}`;
    button.type = "button";

    const title = document.createElement("strong");
    title.textContent = `${deck.icon} ${deck.name}`;
    const hint = document.createElement("span");
    hint.textContent = deck.hint;
    button.append(title, hint);

    button.addEventListener("click", () => {
      state.selectedDeck = key;
      renderDecks();
      saveRoom();
    });
    els.deckGrid.appendChild(button);
  });
}

function renderRoomCode() {
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
initFirebase();
