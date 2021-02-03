const startButton = document.querySelector('.start')
startButton.addEventListener('click', function(){
    thisGame()
});
function thisGame(){
let check = 0;
let i = 0;
let j = 0;
let roundEnd = "";
let yourSelection = "";
function rockFunction(){
    yourSelection = "rock";
}
function paperFunction(){
    yourSelection = "paper";
}
function scissorsFunction(){
    yourSelection = "scissors";
}
const rock = document.querySelectorAll('.rock')
rock.forEach((rock) => {
rock.addEventListener('click', function(){
    rockFunction();
    playRound();
})});

const paper = document.querySelectorAll('.paper')
paper.forEach((paper) => {
paper.addEventListener('click', function(){
    paperFunction();
    playRound();
})});

const scissors = document.querySelectorAll('.scissors')
scissors.forEach((scissors) => {
scissors.addEventListener('click', function(){
    scissorsFunction();
    playRound();
})});
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const message = document.querySelector('.message')
        function playRound(){
            function computerPlay(){
                let possibleSelection = ["rock", "paper", "scissors"];
                thisSelection = possibleSelection[Math.floor(Math.random() * possibleSelection.length)];
                console.log(thisSelection);
                return thisSelection;
            }
            const computerSelection = computerPlay();
            const playerSelection = yourSelection;
            if(playerSelection=="rock" && computerSelection== "paper"){
               roundEnd = "You Lose! Paper beats Rock";
                i++;
            }
            else if(playerSelection=="paper" && computerSelection=="scissors"){
               roundEnd = "You Lose! Paper beats Rock";
                i++;
            }
            else if(playerSelection=="scissors" && computerSelection=="rock"){
               roundEnd = "You Lose! Rock beats Scissors";
                i++;
            }
            else if(playerSelection=="scissors" && computerSelection=="scissors"){
               roundEnd = "It's a tie!";
            }
            else if(playerSelection=="rock" && computerSelection=="rock"){
               roundEnd = "It's a tie!";
            }
            else if(playerSelection=="paper" && computerSelection=="paper"){
               roundEnd = "It's a tie!";
            }
            else if(playerSelection=="scissors" && computerSelection=="paper"){
               roundEnd = "You win! Scissors beats Paper";
                j++;
            }
            else if(playerSelection=="rock" && computerSelection=="scissors"){
               roundEnd = "You win! Rock beats Scissors";
                j++;
            }
            else if(playerSelection=="paper" && computerSelection=="rock"){
               roundEnd = "You win! Paper beats Rock";
                j++;
            }
            else if(playerSelection=="stop"){
                i=8;
                j=8;
            }
            playerScore.textContent = j;
            computerScore.textContent = i;
            message.textContent = roundEnd;
    }
}

