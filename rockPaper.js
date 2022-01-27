let cards = document.querySelectorAll('.cardBtn');
let computerGame = document.querySelector('.computerComputer');
let userGame = document.querySelector('.userUser');
let resultGame = document.querySelector('.result');
let userScore = document.querySelector('.userScore')
let chromeScore = document.querySelector('.chromeScore')

let arrayChrome = ['pierre', 'feuille', 'ciseaux'];
let randomItem = '';
let chromePoints = 0;
let userPoints = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        randomItem = arrayChrome[Math.floor(Math.random() * arrayChrome.length)];
        computerGame.innerHTML = randomItem;
        userGame.innerHTML = cards[i].getAttribute('id');
        checkResult(randomItem, cards[i].getAttribute('id'));
    });
}


function checkResult(chromeItem, userItem) {
    if (chromeItem === userItem) {
        resultGame.innerHTML = 'Égalité'
    } else {
        if (userItem === 'feuille' && chromeItem === 'pierre') {
            resultGame.innerHTML = 'Tu gagnes'
            userPoints += 1;
            userScore.textContent = userPoints;
        }
        if (userItem === 'feuille' && chromeItem === 'ciseaux') {
            resultGame.innerHTML = 'Tu perds'
            chromePoints += 1;
            chromeScore.textContent = chromePoints;
        }

        if (userItem === 'pierre' && chromeItem === 'ciseaux') {
            resultGame.innerHTML = 'Tu gagnes'
            userPoints += 1;
            userScore.textContent = userPoints;
        }
        if (userItem === 'pierre' && chromeItem === 'feuille') {
            resultGame.innerHTML = 'Tu perds'
            chromePoints += 1;
            chromeScore.textContent = chromePoints;
        }

        if (userItem === 'ciseaux' && chromeItem === 'feuille') {
            resultGame.innerHTML = 'Tu gagnes'
            userPoints += 1;
            userScore.textContent = userPoints;
        }
        if (userItem === 'ciseaux' && chromeItem === 'pierre') {
            resultGame.innerHTML = 'Tu perds'
            chromePoints += 1;
            chromeScore.textContent = chromePoints;
        }
    }
}