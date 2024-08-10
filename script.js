import { generatePromptedInt } from "./promptedInt.js";
import { generatePromptedFloat } from "./promptedFloat.js";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimal_places) {
    return ((Math.random() * (max - min + 1)) + min).toFixed(decimal_places);
}

document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate-btn");
  const answerBtn = document.getElementById("answer-btn");
  const correctBtn = document.getElementById("correct-btn");
  const incorrectBtn = document.getElementById("incorrect-btn");
  const resetBtn = document.getElementById("reset-btn");
  const resultDiv = document.getElementById("result");
  const answerDiv = document.getElementById("answer");
  const modeSelect = document.getElementById("mode-select");
  const totalQuestionsEl = document.getElementById("total-questions");
  const correctAnswersEl = document.getElementById("correct-answers");
  const incorrectAnswersEl = document.getElementById("incorrect-answers");

  let randomValue = null;
  let valueType = null;
  let totalQuestions = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  function generateRandomString(length) {
    let result = "";
    const randomChoice = getRandomInt(1, 100);

    if (randomChoice < 50) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    } else {
      const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
      result = words[Math.floor(Math.random() * words.length)];
    }

    return result;
  }

  function resetGame() {
    totalQuestions = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    totalQuestionsEl.textContent = "Total: " + totalQuestions;
    correctAnswersEl.textContent = "Correct: " + correctAnswers;
    incorrectAnswersEl.textContent = "Incorrect: " + incorrectAnswers;
    resultDiv.textContent = "???";
    answerDiv.textContent = "???";
  }

  generateBtn.addEventListener("click", () => {
    const mode = modeSelect.value;
    let randomType;

    if (mode === "basic") {
      randomType = ["integer", "float", "char"][Math.floor(Math.random() * 3)];
    } else if (mode === "intermediate") {
      randomType = ["integer", "float", "char"][Math.floor(Math.random() * 3)];
    } else if (mode === "advanced") {
      randomType = ["integer", "float", "char", "string", "bool"][
        Math.floor(Math.random() * 5)
      ];
    }

    switch (randomType) {
      case "integer":
        if (mode === "intermediate") {
          randomValue = generatePromptedInt();
        } else {
          randomValue = getRandomInt(-32768, 32767);
        }
        valueType = "int";
        break;
      case "float":
        if (mode === "intermediate") {
          randomValue = generatePromptedFloat();
        } else {
          randomValue = getRandomFloat(-32768, 32767, 6);
        }
        valueType = "float";
        break;
      case "char":
        randomValue = String.fromCharCode(getRandomInt(65, 90));
        valueType = "char";
        break;
      case "string":
        randomValue = generateRandomString(10);
        valueType = "string";
        break;
      case "bool":
        randomValue = Math.random() < 0.5;
        valueType = "bool";
        break;
    }

    totalQuestions++;
    totalQuestionsEl.textContent = "Total: " + totalQuestions;
    resultDiv.textContent = `${randomValue}`;
    answerDiv.textContent = "???";
  });

  answerBtn.addEventListener("click", () => {
    if (randomValue !== null && valueType !== null) {
      let answerText;
      switch (valueType) {
        case "int":
          answerText = "Type: int, Format: %d";
          break;
        case "float":
          answerText = "Type: float, Format: %f";
          break;
        case "char":
          answerText = "Type: char, Format: %c";
          break;
        case "string":
          answerText = "Type: string, Format: %s";
          break;
        case "bool":
          answerText = `Type: bool/int, Format: %d (${
            randomValue ? "true" : "false"
          }, ${randomValue ? 1 : 0})`;
          break;
      }
      answerDiv.textContent = answerText;
    } else {
      answerDiv.textContent = "Please generate a value first.";
    }
  });

  correctBtn.addEventListener("click", () => {
    const totalAnswered = correctAnswers + incorrectAnswers;
    if (totalAnswered < totalQuestions) {
      if (randomValue !== null) {
        correctAnswers++;
        correctAnswersEl.textContent = "Correct: " + correctAnswers;
        updateProgressBar();
      }
    }
  });

  incorrectBtn.addEventListener("click", () => {
    const totalAnswered = correctAnswers + incorrectAnswers;
    if (totalAnswered < totalQuestions) {
      if (randomValue !== null) {
        incorrectAnswers++;
        incorrectAnswersEl.textContent = "Incorrect: " + incorrectAnswers;
        updateProgressBar();
      }
    }
  });

  resetBtn.addEventListener("click", () => {
    resetGame();
    updateProgressBar();
  });

  function updateProgressBar() {
    const totalAnswered = correctAnswers + incorrectAnswers;
    const correctPercentage =
      totalAnswered > 0 ? (correctAnswers / totalAnswered) * 100 : 0;
    const progressBar = document.getElementById("progress-bar");

    progressBar.style.width = `${correctPercentage}%`;
    progressBar.setAttribute("aria-valuenow", correctPercentage);
    progressBar.textContent = `${correctPercentage.toFixed(2)}%`;
  }
});
