let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageElement = document.querySelector(".message");
const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const resetButton = document.getElementById("reset");

function displayMessage(message) {
  messageElement.textContent = message;
}

checkButton.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.body.style.background =
      "linear-gradient(135deg, #4caf50, #2e7d32)";
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreElement.textContent = 0;
    }
  }
});

resetButton.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreElement.textContent = score;
  guessInput.value = "";
  document.body.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)";
});
