const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];



for (let button of buttons) {
    button.addEventListener("click", function (event) {
        let playerChoice = parseInt(this.dataset.choice);
        playGame(playerChoice);
    });

}

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);
    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    checkWinner(choices[playerChoice], choices[computerChoice]);


}
function isGameOver() {
    if (playerScore.textContent == 10) {
        alert("Congrats, you win!");
        playerTally();
        playerScore.textContent = 0;
        computerScore.textContent = 0;

    } else if (computerScore.textContent == 10) {
        alert("Bad luck, you lose!")
        computerTally();
        computerScore.textContent = 0;
        playerScore.textContent = 0;

    } else { }

}

function playerCounter() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

function computerCounter() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

function playerTally() {
    let oldScore = parseInt(document.getElementById("player-tally").innerText);
    document.getElementById("player-tally").innerText = ++oldScore;
}

function computerTally() {
    let oldScore = parseInt(document.getElementById("computer-tally").innerText);
    document.getElementById("computer-tally").innerText = ++oldScore;

}
function checkWinner(choice1, choice2) {

    if (choice1 === choice2) {
        messages.textContent = "It's a tie";
        isGameOver();
    }
    else if (choice1 == "rock" && choice2 == "paper" || choice2 == "spock") {

        computerCounter();
        messages.textContent = "Computer wins!";
        isGameOver();

    }
    else if (choice1 == "rock" && choice2 == "scissors" || choice2 == "lizard") {

        playerCounter();
        messages.textContent = "You win!";
        isGameOver();

    }
    else if (choice1 == "paper" && choice2 == "scissors" || choice2 == "lizard") {

        computerCounter();
        messages.textContent = "Computer wins!";
        isGameOver();

    } else if (choice1 == "paper" && choice2 == "rock" || choice2 == "spock") {

        playerCounter();
        messages.textContent = "You win!";
        isGameOver();

    }
    else if (choice1 == "scissors" && choice2 == "rock" || choice2 == "spock") {

        computerCounter();
        messages.textContent = "Computer wins!";
        isGameOver();

    } else if (choice1 == "scissors" && choice2 == "paper" || choice2 == "lizard") {

        playerCounter();
        messages.textContent = "You win!";
        isGameOver();

    }
    else if (choice1 == "lizard" && choice2 == "scissors" || choice2 == "rock") {

        computerCounter();
        messages.textContent = "Computer wins!";
        isGameOver();

    } else if (choice1 == "lizard" && choice2 == "paper" || choice2 == "spock") {

        playerCounter();
        messages.textContent = "You win!";
        isGameOver();
    }
    else if (choice1 == "spock" && choice2 == "lizard" || choice2 == "paper") {

        computerCounter();
        messages.textContent = "Computer wins!";
        isGameOver();

    } else if (choice1 == "spock" && choice2 == "scissors" || choice2 == "rock") {

        playerCounter();
        messages.textContent = "You win!";
        isGameOver();

    }
}

