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

/*************************************** 
 Everything works now EXCEPT the computer doesnt understand what to do if you overshoot the target number. 
*/

// call function to initialize game:

initializeGame();

// declare global variables here to keep code organized

var newGame, randomNum, userGuess, btn, inputField, remainder;

// function that resets the "newGame" variable and initialized the game

function initializeGame() {
    newGame = true;
};

// variable to store the button element

btn = document.querySelector('.guessInput');

// variable to store user input field

inputField = document.querySelector('.guess');

// when "submit guess" button is clicked....

btn.addEventListener('click', function check() {

    // prevent submit button from reloading the page every time it's clicked which breaks the game logic
    event.preventDefault();

    if (newGame === true) { // if new game...

        // generate random number between 1-20
        randomNum = Math.floor(Math.random() * 20) + 1;
        console.log('the random number for this game is: ' + randomNum);

        // grab the user's input from the input feild
        userGuess = document.querySelector('.guess').value;
        console.log('the user guessed... ' + userGuess);

        if (userGuess < randomNum) {

            // make this a function
            alert('Nope');
            remainder = randomNum - userGuess;
            console.log('too cold'); 
            console.log('the difference between your guess and the random number is ' + remainder); 
            newGame = false;
        
        } else if (userGuess > randomNum) {

            // make this a function
            alert('Nope');
            remainder = userGuess - randomNum;
            console.log('too hot');
            console.log('the difference between your guess and the random number is ' + remainder);  
            newGame = false;
            
        } else {
            alert('You lucky son of a gun');
        }


    } else { // if newGame = false... use the same random number and check against this logic...

        // grab the user's input from the input feild again
        userGuess = document.querySelector('.guess').value;
        console.log('the user guessed... ' + userGuess);


        // this logic determines if the guess is higher or lower than the previous guess

        if (userGuess < randomNum && (randomNum - userGuess) < remainder) { // guess is low && lower than previous guess
            remainder = randomNum - userGuess;
            console.log('wamer');
            console.log('the difference between your guess and the random number is ' + remainder); 
            // insert function from above
              
        } else if (userGuess < randomNum && (randomNum - userGuess) < remainder) { // guess is low && higher than prev
            remainder = randomNum - userGuess;
            console.log('colder');
            console.log('the difference between your guess and the random number is ' + remainder); 
            // insert function from above
            
        } else if (userGuess > randomNum && (userGuess - randomNum) > remainder) { // guess is high && higher than prev
            remainder = userGuess - randomNum;
            console.log('colder2');
            console.log('the difference between your guess and the random number is ' + remainder); 
            // insert function from above 

        } else if (userGuess > randomNum && (userGuess - randomNum) < remainder) { // guess is high && lower than prev
            remainder = userGuess - randomNum;
            console.log('warmer2');
            console.log('the difference between your guess and the random number is ' + remainder); 
            // insert function from above 
            
        } else {
            alert('You Win!');
            console.log('you win')
            // you win
        }

    }

    // clear input after button is clicked
    inputField.value = '';

});

// need to figure out a scalable way to tell the computer WHERE on a scale from cold to hot the users guess is so that I can deliver the message "warmer" or "colder".

// all possibilities



// 1. user guess is correct
// 2. user guess is too high
// 3. user guess is too low

//     4. user guess is lower than before but still too high
//     5. user guess is higher than before but still too low
//     6  user guess is higher than before but now TOO high (they overshot)
//     7. user guess is lower than before but now TOO low (they overshot)
//     6. user guess is correct

