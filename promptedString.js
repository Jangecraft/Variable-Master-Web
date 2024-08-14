import { getRandomInt, getRandomFloat} from "./random.js";

export function generatePromptedString() {
    const prompts = [
        "หมายเลขบัตรประชาชน",
        `บ้านเลขที่ ${getRandomInt(1, 99)} / ${getRandomInt(1, 99)}`
    ];
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return `${selectedPrompt}`;
}
