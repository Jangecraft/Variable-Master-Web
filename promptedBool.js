import { getRandomInt, getRandomFloat} from "./random.js";

export function generatePromptedBool() {
    const prompts = [
        { prompt: 1, value: "พระอาทิตย์ร้อน" },
        { prompt: 0, value: "ฤดูหนาวเป็นฤดูที่ร้อนที่สุด" },
        { prompt: 0, value: `${getRandomFloat(1, 10, 2)} เป็นเลขจำนวนเต็ม` },
        { prompt: 0, value: `${getRandomInt(1, 10)} เป็นเลขทศนิยม` }
    ];
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return [selectedPrompt.value, selectedPrompt.prompt];
}
