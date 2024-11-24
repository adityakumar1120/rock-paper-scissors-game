const userInput = document.querySelectorAll('.options')
const showCard = document.querySelector('#msg')
const showScoreUser = document.querySelector('#userscore')
const showScoreComp = document.querySelector('#compscore')
let userScore = 0
let compScore = 0
function compchoice(){
    const optionArr = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random()*3)
    console.log(optionArr[randomIndex] + 'comp');
    return optionArr[randomIndex]
    // return paper
}

function playGame(useroption,comoption){
    if(useroption === comoption){
        showCard.innerText = 'This is a draw'
        showCard.style.background = 'rgb(24,37,71)'
        console.log('draw');
    }
    else if(useroption === 'rock'){
        if(comoption === 'paper'){
            console.log('computer wins!');
            compScore++
            showScoreComp.innerText = `${compScore}`
            showCard.innerText = `you lost! ${comoption} beats ${useroption}` 
            // showCard.style.backGroundColor = 'red'
            showCard.style.background = 'red'
            console.log(compScore);
        }
        
        else{
            console.log('you win');
            userScore++
            showScoreUser.innerText = `${userScore}`
            showCard.innerText = `you won! ${useroption} beats ${comoption}` 
            showCard.style.background = 'green'
            console.log(userScore);
        }
    }
    else if(useroption === 'paper'){
        if(comoption === 'scissors'){
            console.log('computer wins!');
            compScore++
            showScoreComp.innerText = `${compScore}`
            showCard.innerText = `you lost! ${comoption} beats ${useroption}`
            showCard.style.background = 'red'
            console.log(compScore);
        }
        else{
            console.log('you win');
            userScore++
            showScoreUser.innerText = `${userScore}`
            showCard.innerText = `you won! ${useroption} beats ${comoption}`
            showCard.style.background = 'green'
            console.log(userScore);
        }
    }
    else{
        if(comoption === 'rock'){
            console.log('computer wins!');
            compScore++
            showScoreComp.innerText = `${compScore}`
            showCard.innerText = `you lost! ${comoption} beats ${useroption}`
            showCard.style.background = 'red'
            console.log(compScore);
        }
        else{
            console.log('you win');
            userScore++
            showScoreUser.innerText = `${userScore}`
            showCard.innerText = `you won! ${useroption} beats ${comoption}`
            showCard.style.background = 'green'
            console.log(userScore);
        }
    }

}
function userchoice(){
    userInput.forEach(function(elem){
        elem.addEventListener('click', function(){
            useroption =  elem.getAttribute('id')
            console.log(useroption);
            const comoption = compchoice()
            playGame(useroption, comoption)
        })
    })
}
userchoice()

