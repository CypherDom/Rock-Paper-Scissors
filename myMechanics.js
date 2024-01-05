const getComputerChoice = () => {
    const choice = ['Rock','Paper','Scissors'];
    
    return choice[Math.floor(Math.random()* choice.length)];
}

const formatPlayerSelection = (inputString) => {
    
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();

}

const resetRound = () => {
    let player = null;
    let computer = null;
}

const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection;
    let computer = computerSelection;

    if(player === computer){
        resetRound();
        return 'Tied';
    }
    else if
    (player === 'Rock' && computer === 'Scissors' || 
     player === 'Paper' && computer === 'Rock' ||
     player === 'Scissors' && computer === 'Paper'){

        return 'Player';
    }
    else if
    (computer === 'Rock' && player === 'Scissors' || 
     computer === 'Paper' && player === 'Rock' ||
     computer === 'Scissors' && player === 'Paper'){

        return 'Computer';
    }
    
}

let playerInput = "rOCk";
let playerSelection = formatPlayerSelection(playerInput);
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));