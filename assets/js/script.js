const buttons= document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = [ "rock", "paper", "scissors", "lizard", "spock" ];
const outcomes = choices[[0,2,1,1,2],[1,0,2,2,1],[2,1,0,1,2],[2,1,2,0,1],[1,2,1,2,0]];
const images = ["rock.png", "paper.png", "scissors.png", "lizard.png","spock.png"]


for (let button of buttons) {
    button.addEventListener ("click", function(event) {
        let playerChoice = parseInt(this.dataset.choice);
        playGame(playerChoice);
    });

}

function playGame (playerChoice) {
playerImage.src = `assets/images/${choices[playerChoice]}.png`;
playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random () * 5);
computerImage.src = `assets/images/${choices[computerChoice]}.png`;
computerImage.alt = choices[computerChoice];

let result = checkWinner(choices[playerChoice], choices[computerChoice]);

/*updateScores(result);*/
}

function playerCounter() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

function computerCounter() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

function checkWinner(choice1, choice2) {
    
       if (choice1 === choice2) {
        alert ("It's a tie!")    
       }
                       if (choice1 === "rock" && choice2 == "paper" || choice2 == "spock") {
                        alert("You lose");
                        computerCounter();
                        
                          }
                         else if (choice1 === "rock" && choice2 == "scissors" || choice2 == "lizard") {
                            alert ("You win");
                       playerCounter();
                 }
                }