let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerPlays = ['rock', 'paper', 'scissors'];
    return computerPlays[Math.floor(Math.random() * computerPlays.length)];
}

function playRound(humanChoice) {
    const results = document.querySelector('#results');
    let playerScore = document.querySelector('#playerScore');
    let cpuScore = document.querySelector('#computerScore');
    let computerChoice = getComputerChoice();

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
        let humanChoice;
        let winner = document.querySelector('#winner');
        let buttons = document.querySelectorAll('input');

        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                humanChoice = e.target.id;
                playRound(humanChoice);
                if (humanScore === 5 || computerScore === 5) {
                    buttons.forEach((button) => {
                        button.disabled = true;
                    });
                    if (humanScore === 5) {
                        winner.textContent = 'Player wins!';

                    } else {
                        winner.textContent = 'You lose. Better luck next time.';
                    }
                }
            });
        });


}

playGame();
