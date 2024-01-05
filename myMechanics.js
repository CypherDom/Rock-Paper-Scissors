const getComputerChoice = () => {
    const choice = ['Rock','Paper','Scissors'];
    
    return choice[Math.floor(Math.random()* choice.length)];
}


const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection;
    let computer = computerSelection;

    if(player === computer){
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

let playerSelection = 'Rock';
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));