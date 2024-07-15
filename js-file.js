let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerPlays = ['rock', 'paper', 'scissors'];
    return computerPlays[Math.floor(Math.random() * computerPlays.length)];
}

function getHumanChoice() {
    const button = document.querySelector('button');
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        return e.target.id;
    });
}

function playRound(humanChoice, computerChoice) {
    let results = document.querySelector('#results');
    let playerScore = document.querySelector('#playerScore');
    let cpuScore = document.querySelector('#computerScore');

    if (humanChoice === computerChoice) {
        results.textContent = 'You tied!';
    }
    else if (humanChoice === 'rock' && computerChoice == 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice == 'rock' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'rock' && computerChoice === 'paper') {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    playerScore.textContent = `Player Score: ${humanScore}`;
    cpuScore.textContent = `Computer Score: ${computerScore}`;
}

function playGame() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
        let winner = document.querySelector('#winner');

        if ((humanScore || computerScore) === 5) {
            if (humanScore === 5) {
                winner.textContent = 'You win!';
            } else {
                winner.textContent = 'You lose. Better luck next time.'
            }
        }
}

playGame();
