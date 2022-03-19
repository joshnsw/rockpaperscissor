


const computerChoiceDisplay =document.getElementById('computer')
const userChoiceDisplay =document.getElementById('player')
const resultDisplay =document.getElementById('result')
const computerScoreDisplay=document.getElementById('computerscore')
const playerScoreDisplay=document.getElementById('playerscore')
const possibleChoices = document.querySelectorAll('button')


let playerScore = 0;
let computerScore = 0;


let userChoice;
let computerChoice;

choices = ["rock","paper","scissors"];





possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=> {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    playRound(userChoice,computerChoice)
    scoreKeep()
    console.log(playerScore)
    console.log(computerScore)

}))

function generateComputerChoice (){
    computerChoice = choices[Math.floor(Math.random()* choices.length)]
    computerChoiceDisplay.innerHTML = computerChoice
    console.log(computerChoice)
}


function scoreKeep()   {
    if(playerScore == 5){
        let playAgain = confirm("You win!Play Again?")
        playAgain? location.reload() :alert("Ok,next time then!")
    } 
    else if(computerScore == 5){
        let playAgain = confirm("You lose!Play Again?")
        playAgain? location.reload() :alert("Ok,next time then!")
    }
    else{
        return false;
    }
}






function playRound (playerChoice,computerChoice) {

    switch(playerChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
        resultDisplay.innerHTML = 'You chose:' + userChoice + ',Computer Chose :' + computerChoice + " . You win!"
        playerScore ++
        playerScoreDisplay.innerHTML = playerScore
        computerScoreDisplay.innerHTML = computerScore
        
        break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
        resultDisplay.innerHTML = 'You chose:' + userChoice + ',Computer Chose :' + computerChoice + " . Lose!"
        computerScore ++
        playerScoreDisplay.innerHTML = playerScore
        computerScoreDisplay.innerHTML = computerScore
        break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        resultDisplay.innerHTML = 'You chose:' + userChoice + ',Computer Chose :' + computerChoice + " . Draw!"
        playerScoreDisplay.innerHTML = playerScore
        computerScoreDisplay.innerHTML = computerScore
        break
    }

}








