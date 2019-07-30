/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
ADDITIONAL CHALLENGES:

- Add a game condition where if a player rolls a 6 twice in a row they lose ALL their points
- Add an input field to the game where players can set their own winning score
- Add an additional Dice to the game and a condition where if EITHER dice is a 1 the player rolling loses their current score
*/ 

var scores, roundScore, activePlayer, gamePlaying;

init();

// state variable tells us the state of a system (is the game playing or not playing?)


// create an event handler for the roll button

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // IF you roll a "1" go to the next player
            nextPlayer();
        }
    }
});

// create an event handler for the hold button

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        //  add current value to global score by "holding" it
    scores[activePlayer] += roundScore;

    // update the UI to reflect your choice
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game

    if (scores[activePlayer] >= 20) {
        // player wins the game
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer).classList.add('winner');
        document.querySelector('.player-' + activePlayer).classList.remove('active');
        gamePlaying = false;
    } else {
        // go to the next player
        nextPlayer();
    }
    }

});

// reusable funtion to activate the next players turn

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

// callback function 'init'
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // get the dice element and set it to display none by default

    document.querySelector('.dice').style.display = 'none';

    // set all the scores to 0 by default 

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-o-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-o-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-o-panel').classList.add('active');

};










// example creating a function for use in a callback
// function btn() {
    // action
// }

// adding even listener to click event on btn 'callback function'
// callback function is a function that is passed into another function as an argument that is then called for us
// document.querySelector('.btn-roll').addEventListener('click', btn())

// Another way to do this is with an anonymous function


// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// update the players current score based on dice roll

// document.querySelector('#current-' + activePlayer).textContent = dice;

// example of using innerHTML method 'getter'
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// example of using read only with query selector 'getter'
// var x = document.querySelector('#score-0').textContent;