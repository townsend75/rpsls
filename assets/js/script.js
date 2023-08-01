const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const images = ["rock.png", "paper.png", "scissors.png", "lizard.png", "spock.png"]


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

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

   
}
/*function isGameOver() {
    if (playerScore === 10) {
        alert("Congrats, you win!");
    } else if (computerScore === 10) {
        alert("Bad luck, you lose!");
    } else {}
    
}*/

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
         messages.textContent = "It's a tie";
    }
    else if (choice1 == "rock" && choice2 == "paper" || choice2 == "spock") {
        
        computerCounter();
        messages.textContent = "Computer wins!";

    }
    else if (choice1 == "rock" && choice2 == "scissors" || choice2 == "lizard") {
        
        playerCounter();
        messages.textContent  = "You win!";
       
    }
   else if (choice1 == "paper" && choice2 == "scissors" || choice2 == "lizard") {
       
        computerCounter();
        messages.textContent = "Computer wins!";
      
    } else if (choice1 == "paper" && choice2 == "rock" || choice2 == "spock") {
        
        playerCounter();
        messages.textContent  = "You win!";
       
    }
    else if (choice1 == "scissors" && choice2 == "rock" || choice2 == "spock") {
        
        computerCounter();
        messages.textContent = "Computer wins!";
      
    } else if (choice1 == "scissors" && choice2 == "paper" || choice2 == "lizard") {
       
        playerCounter();
        messages.textContent  = "You win!";
       
    }
    else if (choice1 == "lizard" && choice2 == "scissors" || choice2 == "rock") {
      
        computerCounter();
        messages.textContent = "Computer wins!";
       
    } else if (choice1 == "lizard" && choice2 == "paper" || choice2 == "spock") {
       
        playerCounter();
        messages.textContent  = "You win!";
        
    }
    else if (choice1 == "spock" && choice2 == "lizard" || choice2 == "paper") {
       
        computerCounter();
        messages.textContent = "Computer wins!";
      
    } else if (choice1 == "spock" && choice2 == "scissors" || choice2 == "rock") {
       
        playerCounter();
        messages.textContent  = "You win!";
      
    }
}

