const buttons= document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = [ "Rock", "Paper", "Scissors", "Lizard", "Spock" ];
const outcomes = [[0,2,1,1,2],[1,0,2,2,1],[2,1,0,1,2],[2,1,2,0,1],[1,2,1,2,0]];
const images = ["Rock.png", "Paper.png", "Scissors.png", "Lizard.png","Spock.png"]


for (let button of buttons) {
    button.addEventListener (click, function() {
        let playerChoice = this.gameAttribute("data-choice");
        playGame(playerChoice);
    });

}

function playGame (playerChoice) {
playerImage.src = `assets/images/${choices(playerChoice)}.png`;
playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random () * 5);

computerImage.src = `assets/images/${choices(computerChoice)}.png`;
computerImage.alt = choices[computerChoice];

let result = checkWinner ( choices[computerChoice], choices[playerChoice]);

updateScores(result);
}

/*function rpsls(player) {
    var computer=Math.floor(Math.random()*5);

    if (outcomes[player][computer]==0){alert("Tie");}
    if (outcomes[player][computer]==1){alert("Player Wins");}
    if (outcomes[player][computer]==2){alert("Computer Wins");}
    */

}

