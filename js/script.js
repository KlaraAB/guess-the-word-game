const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const guessedLettersArray = [];

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
    // Empty message paragraph
    message.innerText = "";
    // Grab what was entered in the input
    const captureLetter = letterInput.value;
    // Let's make sure that it is a single letter
    const result = validateInput(captureLetter);

    if (result) {
        //have a letter, guess
        makeGuess(captureLetter);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter your guessed letter.";
    } else if (input.length > 1 ) {
        message.innerText = "Enter only 1 letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Only letters from A to Z are accepted.";
    } else {
        return input;
    }
};

const makeGuess = function (captureLetter) {
    captureLetter = captureLetter.toUpperCase();
    if (guessedLettersArray.includes(captureLetter)) {
        message.innerText = "You already guessed this letter. Try again!";
    } else {
        guessedLettersArray.push(captureLetter);
        console.log(guessedLettersArray);
    }
};