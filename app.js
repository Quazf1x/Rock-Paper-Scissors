const buttons = document.querySelectorAll('.option-div img'); // 0 - rock, 1 - scissors, 2 - paper
const buttonContainers = document.querySelectorAll('.option-div');
const totalScore = document.querySelector('#total-score');
const resultMessage = document.querySelector('.results-div');

let playerScore = 0;
let computerScore = 0;
const outcomes = [[1,2,0],  // 0 - loss    R S P
                  [0,1,2],  // 1 - tie     S
                  [2,0,1]];  // 2 - win    P

function getComputerChoice() { 
  const maxOptions = 3;
  return Math.floor(Math.random() * maxOptions);
}

function returnScore() {
  totalScore.innerHTML = `${playerScore} - ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {

  buttonContainers.forEach(btn => {  //removing prev. borders
    btn.classList.remove('computer-border');
    btn.classList.remove('player-border');
  })

  let roundOutcome = outcomes[playerSelection][computerSelection];

  if (roundOutcome === 1) {
    buttonContainers[playerSelection].classList.add('player-border');
    return "It's a Tie!"
  }

  else if (roundOutcome === 2) {
    playerScore++;
    buttonContainers[computerSelection].classList.add('computer-border');
    buttonContainers[playerSelection].classList.add('player-border');
    if (playerScore === 5)
      return "You have won the game! Congrats!";
    else return "You Won!"
      ;
  }

  else if (roundOutcome === 0) {
    computerScore++;
    buttonContainers[computerSelection].classList.add('computer-border');
    buttonContainers[playerSelection].classList.add('player-border');
    if (computerScore === 5)
      return "You have lost the game to the computer!";
    else return "You Lost!"
      ;
  }
};

buttons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    if (playerScore < 5 && computerScore < 5) {
      resultMessage.innerHTML = playRound(index, getComputerChoice());
      returnScore();
    }
  });
});
