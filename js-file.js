let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerPlays = ['rock', 'paper', 'scissors'];
    return computerPlays[Math.floor(Math.random() * computerPlays.length)];
}

function getHumanChoice() {
    let humanPlays = prompt('Please play: "rock", "paper", or "scissors": ');

    if (humanPlays.toLowerCase() === 'rock') {
        humanPlays = 'rock';
        return humanPlays;
    } else if (humanPlays.toLowerCase() === 'paper') {
        humanPlays = 'paper';
        return humanPlays;
    } else if (humanPlays.toLowerCase() === 'scissors') {
        humanPlays = 'scissors';
        return humanPlays;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('You tied!');
    }
    else if (humanChoice === 'rock' && computerChoice == 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice == 'rock' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        
        if (humanScore > computerScore) {
            alert(`You win with a score of You: ${humanScore} vs Computer: ${computerScore}!`);
        } else {
            alert(`You lose with a score of Computer: ${computerScore} vs You: ${humanScore}!`);
        }
}

playGame();
