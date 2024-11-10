let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body"); 
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMsg = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit", function (event){
    event.preventDefault();
    attempts++;
    if (attempts == 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts-attempts }`;
    }
    guessingNumber.value = "";
});

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You have won`;
        totalWons++;
    }else{
        resultText.innerHTML = `You have lost, Random number was: ${randomNumber}`;
        totalLosts++;
    }
    lostWonMsg.innerHTML = `Won: ${totalWons} , Lost: ${totalLosts}`;
    lostWonMsg.classList.add("large-text");
    cardBody.appendChild(lostWonMsg);
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit) + 1;
}