const buttons= document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image);
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = [ "Rock", "Paper", "Scissors", "Lizard", "Spock" ]

for (let button of buttons) {
    button.addEventListener (click, function() {
        let playerChoice = this.gameAttribute("data-choice");
        playGame(playerChoice);
    });

}

function playGame (playerChoice) {
playerImage.src = `assets/images/${choices(playerChoice)}.png`;
playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random () * 3);

computerImage.src = `assets/images/${choices(computerChoice)}.png`;
computerImage.alt = choice[compuetChoice];

let result = checkWinner( choices[computerChoice, choices[playerChoice]]);

updateScores(result);
}