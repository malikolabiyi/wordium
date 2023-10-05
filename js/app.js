import { Words } from "/js/words.js";

const wordContainer = document.getElementById("word");
const meaningContainer = document.getElementById("meaning");

setInterval(() => {
    const word = new Words().generateRandomWord();

    wordContainer.textContent = word.word;
    meaningContainer.textContent = word.meaning;
}, 3000);