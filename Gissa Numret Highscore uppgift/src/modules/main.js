import { getAllHighscores, addHighScore } from "./highscorerequest.js";
import { displayHighscoreList } from "./gui.js";

getAllHighscores().then(displayHighscoreList);


//Funktion för att slumpa fram ett nummer
let correctNumber = Math.ceil(Math.random() * 3);

let guesserPoints = 0;

//console.log(correctNumber);

//Hämtar knapparna och lägger in dom i en variabel
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const buttons = [btn1, btn2, btn3];


//Lyssnar efter submit för alla tre knappar för att trigga funktionen 
buttons.forEach(button => {
    button.addEventListener('click', getUserGuess);
})



function getUserGuess(event) {

    let userAnswer = parseInt(event.target.getAttribute('data-number'));

    const resultEl = document.querySelector('#resultP');

    if (correctNumber == userAnswer) {
        guesserPoints++;
        resultEl.innerText = `Rätt svar! Du har nu ${guesserPoints} poäng. Gissa igen!`
        newRound();
    }
    else {
        resultEl.innerHTML = `Fel svar! Dina totala poäng blev ${guesserPoints}. Snyggt jobbat!`
        applyName();
    }
}


function applyName() {
    const nameDiv = document.querySelector('#nameDiv')
    nameDiv.innerHTML = '';

    if (!nameDiv.querySelector('form')) {

        const addNameMessage = document.createElement('p')
        addNameMessage.innerText = 'Lägg till ditt namn för att se om du hamnar på Highscore listan!'
        const addNameForm = document.createElement('form');

        const addNameInput = document.createElement('input');
        addNameInput.type = 'text';
        addNameInput.placeholder = 'Skriv namn';

        const addNameSubmit = document.createElement('input');
        addNameSubmit.type = 'submit';//Gör en knapp
        addNameSubmit.value = 'Skicka';//Vad som ska stå på knappen

        addNameForm.appendChild(addNameInput);
        addNameForm.appendChild(addNameSubmit);

        nameDiv.appendChild(addNameMessage);
        nameDiv.appendChild(addNameForm);

        addNameForm.addEventListener('submit', (event)=>{
            event.preventDefault();
        
            const playerName = addNameInput.value;
            addHighScore(playerName, guesserPoints);
            if(playerName){
            addHighScore(playerName, guesserPoints);
            nameDiv.innerText = 'Dina poäng är räknade, se nedan om du lyckades hamna på Highscorelistan!';
            resetGame();
            }
        });
    }
}



//Funktion för vunnen runda
function newRound() {
    correctNumber = Math.ceil(Math.random() * 3);
}

//Funktion för förlorat spel
function resetGame() {
    correctNumber = Math.ceil(Math.random() * 3);
    guesserPoints = 0;
}
