
const links = {
  easy: [
    { text: "https://www.google.com", safe: true },
    { text: "https://secure-bank.com", safe: false },
    { text: "https://openai.com", safe: true },
    { text: "http://amaz0n-security.com", safe: false },
    { text: "https://microsoft.com", safe: true },
    { text: "http://yourbank-login.net", safe: false },
  ],
  medium: [
    { text: "https://paypal.com", safe: true },
    { text: "http://paypall.com-verification.net", safe: false },
    { text: "https://github.com", safe: true },
    { text: "http://githu8-login.com", safe: false },
    { text: "https://turkiye.gov.tr", safe: true },
    { text: "http://e-devlet-login.org", safe: false },
  ],
  hard: [
    { text: "https://netflix.com", safe: true },
    { text: "http://netfliix-account-check.com", safe: false },
    { text: "https://apple.com", safe: true },
    { text: "http://appleid.support-reset.com", safe: false },
    { text: "https://trendyol.com", safe: true },
    { text: "http://trendyol-giris.app-login.com", safe: false },
  ]
};

let score = 0;
let timeLeft = 30;
let timerInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = "";
  document.getElementById("explanation").textContent = "";
  const difficulty = document.getElementById("difficulty").value;
  const shuffled = [...links[difficulty]].sort(() => 0.5 - Math.random());

  const container = document.getElementById("link-container");
  container.innerHTML = "";

  shuffled.forEach((link, index) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = link.text;
    a.dataset.safe = link.safe;
    a.onclick = () => handleClick(link, a);
    container.appendChild(a);
  });

  document.getElementById("timer").textContent = `⏱️ ${timeLeft}`;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function handleClick(link, element) {
  const explanation = document.getElementById("explanation");
  if (link.safe) {
    score++;
    explanation.textContent = "✅ Güvenli bağlantıyı doğru seçtin!";
    element.style.backgroundColor = "#bbf7d0";
  } else {
    explanation.textContent = "❌ Bu sahte bir bağlantıydı! Dikkatli ol.";
    element.style.backgroundColor = "#fecaca";
  }
  document.getElementById("score").textContent = `Skorun: ${score}`;
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").textContent = `⏱️ ${timeLeft}`;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("explanation").textContent += " ⌛ Süre doldu!";
  }
}
