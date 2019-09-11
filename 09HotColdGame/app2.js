/* Instructions:
You are going to create a Hot or Cold game. The game will take a guess (a number between 1 and 20) from the user and then check to see if that guess matches a randomly generated number between 1 and 20. If the guess matches the random number, alert the user that they have won and reset the game. If it’s close alert them that they’re hot, if not, cold and to try again. The user should guess until they win, after each guess, alert them if it’s closer, warmer, if it’s farther, colder. The HTML has been provided for you. You will only need to write the javascript portion.
*/

// Steps to completing this challenge:

/* 

1. Take users guess from form input
2. determine if its a match. enter if/else statement 
3. if match then alert(you win)
4. if not a match enter hot/cold scale
5. Each following guess will re-enter the hot/cold scale until a match is found

*/

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
    };

};

// function that checks the next guess against the random number based on the remainder number

function checkGuess2(guess, number, rem) {

    if (high === true && guess < number || low === true && guess > number) { // checks if user overshot the target number

        // alerts the user game over if they overshot the target number
        alert('Game Over! You overshot the target number!');
        console.log('oops you overshot the target number!');

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
            console.log('correct');
        alert('THAT\'S IT! YOU WIN!!!');
        };

    };

};

// when "submit guess" button is clicked....

btn.addEventListener('click', function isNewGame() {

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

        /* 
        
        Now we need to determine not only if the new guess is low, high or correct- but ALSO see if the remainder variable we stored in the previous logic block has changed which will tell the computer whether to output "warmer" or "colder" depending on how the data has changed.

        I also learned after my first version of this challenge that you would also need a way to evaluate if the user has gone PAST the target number and if so alert the user and end the game. This took by far the longest for me to figure out but I think ultimately is one of the most crucial pieces of logic. without it the game was basically broken.
        
        Below are a few notes that I wrote out when designing the game logic

        Logic for newGame = false: 

            step 1. what is the new guess

            step 2. is the new guess low high or correct

            step 3. is the new guess lower or higher than the previous guess

            step 4. did the new guess exceed the target number

            if (high === true && guess < number || low === true && guess > number)

            step 5. if the new guess exceeded the target number- by how much **this would be cool to add later

            step 6. what is the difference between the new exceeded number and the target number

            step 7. is the exceeded ammount greater than the previous remainder ammount

            this logic determines if the guess is higher or lower than the previous guess

        */

        // execute the else statement

        // grab the user's input from the input feild again
        userGuess = document.querySelector('.guess').value;
        console.log('the user guessed... ' + userGuess);

        checkGuess2(userGuess, randomNum, remainder);

    }

    // clear input after button is clicked
    inputField.value = '';

});