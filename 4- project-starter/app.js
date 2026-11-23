const actionBtn = document.getElementById("action-btn");
const clickCountEl = document.getElementById("click-count");
const statusTextEl = document.getElementById("status-text");
const themeToggleBtn = document.getElementById("theme-toggle");

let clickCount = 0;

actionBtn.addEventListener("click", () => {
  clickCount += 1;
  clickCountEl.textContent = String(clickCount);
  statusTextEl.textContent = `Butona ${clickCount}. kez tıklandı.`;
});

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeToggleBtn.textContent = isDark ? "Açık Tema" : "Koyu Tema";
  statusTextEl.textContent = isDark
    ? "Koyu tema aktif edildi."
    : "Açık tema aktif edildi.";
});