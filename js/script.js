const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const updateWordInProgress = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    
    wordInProgress.innerText = placeholderLetters.join("");
};

updateWordInProgress(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const captureLetter = letter.value;
    console.log(captureLetter);
    letter.value = "";
});