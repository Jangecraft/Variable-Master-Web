import { generatePromptedInt } from './promptedInt.js';
import { generatePromptedFloat } from './promptedFloat.js';

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
        let result = '';
        const randomChoice = Math.floor(Math.random() * 100);

        if (randomChoice < 50) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
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
            randomType = ["integer", "float", "char", "string", "bool"][Math.floor(Math.random() * 5)];
        }

        switch(randomType) {
            case "integer":
                if (mode === "intermediate") {
                    randomValue = generatePromptedInt();
                } else {
                    randomValue = Math.floor(Math.random() * 65536) - 32768;
                }
                valueType = "int";
                break;
            case "float":
                if (mode === "intermediate") {
                    randomValue = generatePromptedFloat();
                } else {
                    randomValue = (Math.random() * 65536 - 32768).toFixed(6);
                }
                valueType = "float";
                break;
            case "char":
                randomValue = String.fromCharCode(65 + Math.floor(Math.random() * 26));
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
            switch(valueType) {
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
                    answerText = `Type: bool/int, Format: %d (${randomValue ? "true" : "false"}, ${randomValue ? 1 : 0})`;
                    break;
            }
            answerDiv.textContent = answerText;
        } else {
            answerDiv.textContent = "Please generate a value first.";
        }
    });

    correctBtn.addEventListener("click", () => {
        if (randomValue !== null) {
            correctAnswers++;
            correctAnswersEl.textContent = "Correct: " + correctAnswers;
        }
    });

    incorrectBtn.addEventListener("click", () => {
        if (randomValue !== null) {
            incorrectAnswers++;
            incorrectAnswersEl.textContent = "Incorrect: " + incorrectAnswers;
        }
    });

    resetBtn.addEventListener("click", () => {
        resetGame();
    });
});
