console.log('Hello');

// const = "Rock"
// const = "Paper"
// const = "Scissors"
// create an array with the strings
// function that randomly logs one of the created variables above by indexing an array

//const computerPick = ['ROCK', 'PAPER', 'SCISSORS']
//console.log(computerPick);

//let computerSelection = computerPick[Math.floor(Math.random() * computerPick.length)];
//console.log(computerSelection);

// create a variable to ask for user input for playerSelection 
// take the value of playerSelection and compare it to computerSelection
// set function/functions that evaluates the results of both and returns which one wins in form of a string

//let playerSelection = prompt('Enter Rock, Paper, or Scissors');
//let result = playerSelection.toUpperCase();
//console.log(result);

//function playRound(computerSelection, result) {

//}

const win1 = 'You Won, Rock beats Scissors!';
const win2 = 'You Won, Paper beats Rock!';
const win3 = 'You Won, Scissors beat Paper';
const lost1 = 'You Lose, Scissors beat Paper!';
const lost2 = 'You Lose, Paper beats Rock!';
const lost3 = 'You Lose, Rock beats Scissors!';
const draw = 'Draw!';
const computerPick = ['ROCK', 'PAPER', 'SCISSORS'];
const gameWin = "You won the game!";
const gameLost = "You lost the game!";
let humanWins = 0;
let computerWins = 0;

function playRound () {    
    let playerSelection = prompt('Enter Rock, Paper, or Scissors');
    let result = playerSelection.toUpperCase();
    let computerSelection = computerPick[Math.floor(Math.random() * computerPick.length)]
    console.log(computerSelection);
    console.log(result);

        if (result == 'ROCK' && computerSelection == 'PAPER') {
            computerWins ++;
            return lost2;
        }
        if (result == 'ROCK' && computerSelection == 'SCISSORS') {
            humanWins ++;
            return win1;
        }
        if (result == 'ROCK' && computerSelection == 'ROCK') {
            return draw;
        }
        if (result == 'PAPER' && computerSelection == 'SCISSORS') {
            computerWins ++;
            return lost1;
        }   
        if (result == 'PAPER' && computerSelection == 'PAPER') {
            return draw;
        }
        if (result == 'PAPER' && computerSelection == 'ROCK') {
            humanWins ++;
            return win2;
        }
        if (result == 'SCISSORS' && computerSelection == 'PAPER') {
            humanWins ++;
            return win3;
        }
        if (result == 'SCISSORS' && computerSelection == 'ROCK') {
            computerWins ++;
            return lost3;
        }
        if (result == 'SCISSORS' && computerSelection == 'SCISSORS') {
            return draw;
        }
    return(playRound);
}

function game () {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (humanWins >= 3) {
        console.log(gameWin);
        return gameWin;
    }
    if (computerWins >= 3) {
        console.log(gameLost);
        return gameLost;
    }
    else {
        console.log(draw);
        return draw;
    }
}
game();


