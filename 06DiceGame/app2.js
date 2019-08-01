/*
ADDITIONAL CHALLENGES:

- !DONE! Add a game condition where if a player rolls a 6 twice in a row they lose ALL their points !DONE!
- Add an input field to the game where players can set their own winning score
- Add an additional Dice to the game and a condition where if EITHER dice is a 1 the player rolling loses their current score
*/

var scores, roundScore, activePlayer, gamePlaying, doubleSix, winScore;

init();

// state variable tells us the state of a system (is the game playing or not playing?)


// create an event handler for the roll button

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        dice = Math.floor(Math.random() * 6) + 1;
        // 2nd dice
        dice2 = Math.floor(Math.random() * 6) + 1;


        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM2.style.display = 'block';
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rolled number was NOT 1

        gameLogic(dice, dice2);

        function gameLogic(dice, dice2) {

            if (dice === 6 && dice2 === 6) {
                // lose all your points
                scores[activePlayer] = 0;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                document.getElementById('score-' + activePlayer).textContent = 0;
                console.log('you rolled double sixes you lose all your points!' + activePlayer);
                nextPlayer();
            } else if (dice !== 1 && dice2 !== 1) {
                // add score
                roundScore = dice + dice2;
                console.log('normal dice roll');
            } else {
                // IF you roll a "1" go to the next player
                nextPlayer();
                console.log('next players turn');
            }


            // if (dice !== 1 && dice === 6 && doubleSix > 0 && inDanger === activePlayer) {
            //     // lose all your points
            //     roundScore = 0;
            //     scores[activePlayer] = 0;
            //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
            //     document.getElementById('score-' + activePlayer).textContent = 0;
            //     console.log('you rolled double sixes you lose all your points!' + activePlayer);
            //     nextPlayer();

            // } else if (dice !== 1 && dice === 6) {
            //     doubleSix = 1; // make doubleSix variable = 1
            //     inDanger = activePlayer; // log which player is active when a 6 is rolled
            //     console.log(inDanger);
            //     console.log('You rolled a six... be careful!');
            //     roundScore += dice;
            //     document.querySelector('#current-' + activePlayer).textContent = roundScore;

            // } else if (dice !== 1) {
            //     // add score
            //     roundScore += dice;
            //     doubleSix = 0;
            //     // inDanger
            //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
            //     console.log('normal dice roll');
            // } else {
            //     // IF you roll a "1" go to the next player
            //     nextPlayer();
            //     console.log('next players turn');
            // }
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

        if (scores[activePlayer] >= winScore) { // make the integer here a variable that can be set by the player via an html input field
            // player wins the game
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // go to the next player
            nextPlayer();
        }
    }

});

// button to set winning score manually

document.querySelector('.set-score-btn').addEventListener('click', function () {
    var userInput = document.querySelector('.winning-score');
    winScore = userInput.value;
    console.log(winScore);
})

// reusable funtion to activate the next players turn

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    hideDice();
};

// callback function 'init'
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    // add a prompt to allow players to set their own winning score
    // winScore = parseInt(prompt('Set winning score:'));
    // console.log(winScore);

    winScore = 100; // default winning score

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // get the dice element and set it to display none by default

    hideDice();

    // set all the scores to 0 by default 

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};

function hideDice() {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
};