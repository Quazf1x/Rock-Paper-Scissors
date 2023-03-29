const rockBtn = document.querySelector('#rock-button');
const scissorsBtn = document.querySelector('#scissors-button');
const paperBtn = document.querySelector('#paper-button');
const totalScore = document.querySelector('#total-score');

let playerScore = 0;
let computerScore = 0;
const outcomes = [[1,2,0],  // 0 - loss    R S P
                  [0,1,2],  // 1 - tie     S
                  [2,0,1]];  // 2 - win    P

function getComputerChoice(){

  const maxOptions = 3;

  return Math.floor(Math.random()*maxOptions);
}

function returnScore(){
  totalScore.innerHTML=`${playerScore} - ${computerScore}`;
}

function playRound(playerValue, computerSelection){
  
  let roundOutcome = outcomes[playerValue][computerSelection];
  if(roundOutcome===1)
  return "It's a Tie!";

  else if(roundOutcome===2){
    playerScore++;
  return "You Won!";}

  else if (roundOutcome===0){
    computerScore++;
  return "You Lost!";}
};

rockBtn.addEventListener('click',(e)=>{
  playRound(0, getComputerChoice());
  returnScore();
});

scissorsBtn.addEventListener('click',(e)=>{
  playRound(1, getComputerChoice());
  returnScore();
});

paperBtn.addEventListener('click',(e)=>{
  playRound(2, getComputerChoice());
  returnScore();
});
