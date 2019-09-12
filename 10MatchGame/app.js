/* 

Instructions:
You will create a matching game that uses DOM elements and event listeners. You will need to write a script that listens for certain keystrokes and reveals an animal when the coordinating key is pressed. If two of the same animal cards are revealed you should alert the winner and reset the game. The HTML and CSS have been provided for you. You will only need to write the javascript portion. 
   
*/

/*

steps to complete this challenge

    step 1. event handler for each button / key

        - "new game" button
        - "reset" button
        -  Keys: A S D F J K L ;

    step 2. declare variables for each animal

        - Elephant
        - Giraffe
        - Monkey
        - Panda

    step 3. function to initialize the game

        - reset logic (reset button turns cards back over?)
        - reset state variables (if there are any)

    step 4. write game logic

        RULES:

        - when key is pressed "activate" that tile and reveal corresponding tiles animal     
        - "active" tiles remain open until next button is pressed 
        - when next button is pressed enter if statement to check if you win or reset tiles
        - if two of the same animal are revealed in succession -> user wins
        - else reset both tile DOMS to hide animal names 


        - if a key has already been pressed, keep it revealed until the next key is pressed and then compare it with the last key that was pressed and reveal the tile

        - else if key is pressed -> reveal the corresponding tile and store the animal name temporarily so that you can compare it to the next key that is pressed.

    step 5. test, refactor and work on "nice to haves"

        - Randomize the animal names to new buttons each new game 
        - change animal names to actual animal icons
        - Use an object to hold animal names
        - function for the key press event handler so you don't have to write it multiple times
*/


function newGame() {

    // reset tiles DOM
    console.log('game started');
    newGame = true;

};

// global variables

var newGameBtn, resetBtn, userInput, elephant, monkey, giraffe, panda, elephant2, monkey2, giraffe2, panda2, newGame;

// DOM elements

newBtn = document.getElementById('newBtn');
resetBtn = document.getElementById('resetBtn');

// event handlers

newBtn.addEventListener('click', function () {

    // start new game
    console.log('new game btn clicked');
    location.reload();

});

resetBtn.addEventListener('click', function () {

    // start new game
    console.log('reset btn clicked');
    location.reload();

});

// game logic

function checkCardNG() {

    switch(userInput) {
        case 'A':
            findAnimal(elephant, 0);
            elephant = true;
            newGame = false;
            break;
        case 'S':
            findAnimal(giraffe, 1);
            giraffe = true;
            newGame = false;
            break;
        case 'D':
            findAnimal(monkey, 2);
            monkey = true;
            newGame = false;
            break;
        case 'F':
            findAnimal(elephant, 3);
            elephant2 = true;
            newGame = false;
            break;
        case 'J':
            findAnimal(monkey, 4);
            monkey2 = true;
            newGame = false;
            break;
        case 'K':
            findAnimal(panda, 5);
            panda = true;
            newGame = false;
            break;
        case 'L':
            findAnimal(giraffe, 6);
            giraffe2 = true;
            newGame = false;
            break;
        case ';':
            findAnimal(panda, 7);
            panda2 = true;
            newGame = false;
            break;    
    };
}

function checkCard() {

    switch(userInput) {
        case 'A':
            findAnimal(elephant, 0);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'S':
            findAnimal(giraffe, 1);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'D':
            findAnimal(monkey, 2);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'F':
            findAnimal(elephant, 3);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'J':
            findAnimal(monkey, 4);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'K':
            findAnimal(panda, 5);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'L':
            findAnimal(giraffe, 6);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case ';':
            findAnimal(panda, 7);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;    
    };

    setTimeout(function(){ location.reload();; }, 2000);
};

newGame();

document.onkeypress = function (event) {
    userInput = event.key.toUpperCase();
    // console.log('key pressed = ' + event.key.toUpperCase());

    if (newGame === true) {

        checkCardNG();

    } else {

    if (elephant === true && userInput === 'F' || elephant2 === true && userInput === 'A') {
        // match
        console.log('YOU GOT A MATCH!');
        findAnimal(elephant, 0);
        findAnimal(elephant, 3);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ location.reload();; }, 2000);

    } else if (giraffe === true && userInput === 'L' || giraffe2 === true && userInput === 'S') {
        // match
        console.log('YOU GOT A MATCH!');
        findAnimal(giraffe, 1);
        findAnimal(giraffe, 6);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ location.reload();; }, 2000);

    } else if (monkey === true && userInput === 'J' || monkey2 === true && userInput === 'D') {
        // match
        console.log('YOU GOT A MATCH!');
        findAnimal(monkey, 2);
        findAnimal(monkey, 4);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ location.reload();; }, 2000);

    } else if (panda === true && userInput === ';' || panda2 === true && userInput === 'K') {
        // match
        console.log('YOU GOT A MATCH!');
        findAnimal(panda, 5);
        findAnimal(panda, 7);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ location.reload();; }, 2000);

    } else if (elephant === true && userInput !== 'F' || elephant2 === true && userInput !== 'A' ) {

        console.log('elephant logic loop entered');
        checkCard();
    
    } else if (giraffe === true && userInput !== 'L' || giraffe2 === true && userInput !== 'S') {

        console.log('giraffe logic loop entered');
        checkCard();
    
    } else if (monkey === true && userInput !== 'J' || monkey2 === true && userInput !== 'D') {

        console.log('monkey logic loop entered');
        checkCard();
   
    } else if (panda === true && userInput !== ';' || panda2 === true && userInput !== 'K') {

        console.log('panda logic loop entered');
        checkCard();
        
    } else
        // test: if there is an unexpected outcome log an error to the console
        console.log('logic error');      
    }

};

// turn the above code into a function

function findAnimal(animal, position) {
    animal = document.getElementsByClassName("word")[position].innerHTML;
            document.getElementsByClassName("key")[position].innerHTML = animal;
            console.log('switch statement A. Animal = ' + animal + ' Position = ' + position);
};

// switch statement example

/*

switch(event) {

    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
}

*/


/*

// notes about the html data attribute

The data-* attributes is used to store custom data private to the page or application.

The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

The data-* attributes consist of two parts:

The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"
The attribute value can be any string
Note: Custom attributes prefixed with "data-" will be completely ignored by the user agent.

*/

// tileA = document.getElementsByClassName("word")[0].innerHTML; // Elephant
// tileS = document.getElementsByClassName("word")[1].innerHTML; // Giraffe
// tileD = document.getElementsByClassName("word")[2].innerHTML; // Monkey
// tileF = document.getElementsByClassName("word")[3].innerHTML; // Elephant2
// tileJ = document.getElementsByClassName("word")[4].innerHTML; // Monkey2
// tileK = document.getElementsByClassName("word")[5].innerHTML; // Panda
// tileL = document.getElementsByClassName("word")[6].innerHTML; // Giraffe2
// tileX = document.getElementsByClassName("word")[7].innerHTML; // Panda2

// var animals = [tileA, tileS, tileD, tileF, tileJ, tileK, tileL, tileX,];

// console.log(animals);