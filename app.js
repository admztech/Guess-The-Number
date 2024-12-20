let randomNumber = parseInt (Math.random() * 100 + 1 );
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.loworHi');
const startOver = document.querySelector('.resultShow');
console.log(startOver)

const p = document.createElement('p');
let pastGuess = [];
let numGauess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt (userInput.value);
        console.log(guess);
        verifyGuess(guess);
    });
}

function verifyGuess (guess){
    if(isNaN(guess)){
        alert('Please Enter the Valid Number');
    }else if(guess < 1){
        alert('Please enter a number greater than 1');
    }else if(guess > 100){
        alert('Please Enter a number less than 100');
    }else{
        pastGuess.push(guess);
        if(numGauess === 10 ){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    // guess is equal or less than or greather than check;
    if(guess === randomNumber){
        displayGuess(guess);
        displayMessage("You guess it right");
        endGame();
    }else if (guess < randomNumber){
        displayMessage("Number is too low");
    }else if (guess > randomNumber){
        displayMessage("Number is too Hight");
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.style.display = 'inline';
    guessSlot.innerHTML += `${guess}, `;
    numGauess++ ;
    console.log(numGauess)
    remaining.innerHTML = `${11 - numGauess}`;

}
function displayMessage (message){
    //display message on Dom using lowerHigher
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled',"");
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    p.style.cursor = 'pointer';
    playGame = false;
    restartGame();
}
function restartGame () {
    const restartGame = document.querySelector('#newGame');
    restartGame.addEventListener('click', function(e){
        randomNumber = parseInt (Math.random() * 100 + 1 );
        pastGuess = [];
        numGauess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGauess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        guessSlot.style.display = 'none';
        lowOrHigh.innerHTML = ''; // Clear message
        playGame = true;
    });
}
