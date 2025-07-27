const tg = window.Telegram.WebApp;
tg.expand();

(async () => {
  const user = tg.initDataUnsafe.user;
  const username = user?.username || user?.first_name || "Гость";
  const wallet = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12";
  const balance = 123.45;

  document.getElementById("username").innerText = username;
  document.getElementById("wallet").innerText = `${wallet.slice(0, 6)}...${wallet.slice(-4)}`;
  document.getElementById("balance").innerText = `${balance} TON`;
})();
