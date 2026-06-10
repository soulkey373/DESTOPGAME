# Peak Guess Party

這是一個 3-6 人派對桌遊的網頁版。

## 直接遊玩

打開 `index.html` 就能用本機模式遊玩。

## 啟用線上房間

把 Firebase Web App 的設定貼到 `firebase-config.js`：

```js
window.PEAK_FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

刷新頁面後，右上角顯示「線上模式」就代表已連上。

## 發布

這是純靜態網站，可以發布到 Netlify、Vercel、Firebase Hosting、GitHub Pages 或任何靜態網站服務。

需要發布的檔案：

- `index.html`
- `styles.css`
- `app.js`
- `firebase-config.js`
