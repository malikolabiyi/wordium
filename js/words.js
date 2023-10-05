import { words } from "/js/consts/words.js";

export class Words {
    generateRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);

        return words[randomIndex];
    }
}