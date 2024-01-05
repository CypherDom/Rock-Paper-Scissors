const getComputerChoice = () => {

    const choice = ['Rock', 'Paper', 'Scissors'];
    
    return choice[Math.floor(Math.random()* choice.length)];
}

const formatPlayerSelection = ( inputString ) => {
    
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
}

const resetRound = () => {

    let player = null;
    let computer = null;
}

const playRound = ( playerSelection, computerSelection ) => {

    let player = formatPlayerSelection( playerSelection );
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

const game = () => {

    let playerScore = 0;
    let computerScore = 0;
    const gameSet = 5;

    for(let round = 1; playerScore < 5 && computerScore < 5; round++){
        let playerSelection = prompt('Enter you move: [Rock, Paper and Scissors]');
        let computerSelection = getComputerChoice();

        const result = playRound( playerSelection, computerSelection );

        if( result === 'Player' ){

            playerScore++;
            console.log( `Round ${round}: You win! ${playerSelection} beats ${computerSelection}` );
            console.log( `Score [ Player: ${playerScore} Computer: ${computerScore} ]` );
        }
        else if ( result === 'Computer'){

            computerScore++;
            console.log( `Round ${round}: You lose! ${computerSelection} beats ${playerSelection}` );
            console.log( `Score [ Player: ${playerScore} Computer: ${computerScore} ]` );
        }
        else {
            console.log( `Round ${round}: Oops! Draw? Fight again!`);
            console.log( `Score [ Player: ${playerScore} Computer: ${computerScore} ]` );
        }
    }
    return (playerScore === gameSet) ? ` GAME OVER! Player wins! ` : ` GAME OVER! Computer wins! `;
}


console.log(game());