/*const rockBtn = document.querySelector('#rock-button');
const scissorsBtn = document.querySelector('#scissors-button');
const paperBtn = document.querySelector('#paper-button');

let playerScore = 0;
let computerScore = 0;
const outcomes = [[1,2,0],  // 0 - loss    R S P
                  [0,1,2],  // 1 - tie     S
                  [2,0,1]];  // 2 - win    P

function getComputerChoice(){

  const maxOptions = 3;

  return Math.floor(Math.random()*maxOptions);
}

function playRound(playerValue, computerSelection){
  
  let roundOutcome = outcomes[playerValue][computerSelection];
  console.log('wow');
  if(roundOutcome===1)
  return "It's a Tie!";

  else if(roundOutcome===2){
    playerScore++;
  return "You Won!";}

  else if (roundOutcome===0){
    computerScore++;
  return "You Lost!";}
};

rockBtn.addEventListener('click',);

while(true){

  let playerValue = prompt();

  console.log(playRound(playerValue,getComputerChoice()));
  console.log(`Player score is: ${playerScore}`);
  console.log(`Computer score is: ${computerScore}`);

  if(playerScore===5){
  console.log("You won 5 times!Game over!");
  break;
  }

  if(computerScore===5){
  console.log("The computer won 5 times!Game over!");
  break;
  }
};

*/