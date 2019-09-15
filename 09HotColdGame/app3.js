console.log('file linked');

// call function to initialize game:

initializeGame();

// declare global variables here to keep code organized

var newGame, randomNum, userGuess, btn, inputField, remainder, high, low;

// variable to store the button element

btn = document.querySelector('.guessInput');

// variable to store user input field

inputField = document.querySelector('.guess');

// function that resets the state variables and initializes the game

function initializeGame() {
    newGame = true;
    high = false;
    low = false;
    console.log('game reset');
};

// function that checks the current guess against the current random number

function checkGuess(guess, number) {

    if (guess > number) { // too high

        // set remainder variable to equal the difference between the two values so that we can use this later to determine if the next guess will be "warmer" or "colder"
        remainder = guess - number;

        // set newGame variable to false so that the next time the button is clicked the program enters a new set of logic
        newGame = false;

        // set the high/low variable to true so that in the next logic set we can determine if the user has overshot the target number (this took me a whiiiiiiile to figure out)
        high = true;


        console.log('remainder = ' + remainder);
        console.log('first guess was high');

        // alert the user they need to try again
        alert('That wasn\'t quite it.. Guess again');

    } else if (guess < number) { // too low

        remainder = number - guess;
        newGame = false;
        low = true;
        console.log('remainder = ' + remainder);
        console.log('first guess was low');
        alert('That wasn\'t quite it.. Guess again');

    } else { // correct
        
        // alert the user they won
        alert('You Lucky Son of a Gun...');
        console.log('correct');
        initializeGame();
    };

};

// function that checks the next guess against the random number based on the remainder number

function checkGuess2(guess, number, rem) {

    if (high === true && guess < number || low === true && guess > number) { // checks if user overshot the target number

        // alerts the user game over if they overshot the target number
        alert('Game Over! You overshot the target number!');
        console.log('oops you overshot the target number!');
        initializeGame();

    } else { // if user did NOT overshoot- evaluate the new guess...

        if (guess > number && (guess - number) > rem) { // too high and remainder is higher than before
    
            // colder
            console.log('colder');
            alert('Colder...');

            // set new remainder
            remainder = guess - number;
            console.log('remainder is now: ' + remainder);
    
        } else if (guess > number && (guess - number) < rem) { // too high and remainder is lower than before
    
            // warmer
            console.log('warmer');
            alert('Warmer...');

            // set new remainder
            remainder = guess - number;
            console.log('remainder is now: ' + remainder);
    
        } else if (guess < number && (number - guess) > rem) { // too low and remainder is lower than before
    
            // colder
            console.log('colder');

            // set new remainder
            remainder = number - guess;
            console.log('remainder is now: ' + remainder);
            alert('Colder...');
    
        } else if (guess < number && (number - guess) < rem) { // too low and  remainder is lower than before
    
            // warmer
            console.log('warmer');
            alert('Warmer...');

            // set new remainder
            remainder = number - guess;
            console.log('remainder is now: ' + remainder);
        
        } else {

            // correct
            alert('THAT\'S IT! YOU WIN!!!');
            console.log('correct');
            initializeGame();
        };

    };

};

// when "submit guess" button is clicked....

function check() {

    // prevent submit button from reloading the page every time it's clicked which was breaking the game logic

    event.preventDefault();

    if (newGame === true) { // if its a new game...

        // generate random number between 1-20

        randomNum = Math.floor(Math.random() * 20) + 1;
        console.log('Current randomNum = ' + randomNum);

        // grab the user's input from the input feild

        userGuess = document.querySelector('.guess').value;
        console.log('Current userGuess = ' + userGuess);

        // in the event that this is a new game. This logical statement will be entered into:

        // there are only 3 routes: low, high and correct which are evaluated by the following function

        checkGuess(userGuess, randomNum);


    } else { // if newGame = false... use the same random number and check against this logic...

        // execute the else statement

        // grab the user's input from the input feild again
        userGuess = document.querySelector('.guess').value;
        console.log('the user guessed... ' + userGuess);

        checkGuess2(userGuess, randomNum, remainder);

    }

    // clear input after button is clicked
    inputField.value = '';

};