// console.log('file linked');

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
    resetGame(); // new function here

});

resetBtn.addEventListener('click', function () {

    // start new game
    console.log('reset btn clicked');
    resetGame(); // new function here

});

function findAnimal(animal, position) {
    animal = document.getElementsByClassName("word")[position].innerHTML;
    tile = document.getElementsByClassName("key")[position];
            tile.innerHTML = animal;
            tile.parentNode.style.backgroundColor = 'lightgrey';
            console.log('switch statement: Animal = ' + animal + ' Position = ' + position);
};

function changeColor(color, position, position2) {
    tile = document.getElementsByClassName("key")[position];
    tile2 = document.getElementsByClassName("key")[position2];
    if (color === 'green') {
    tile.parentNode.style.backgroundColor = 'green';
    tile2.parentNode.style.backgroundColor = 'green';
    } else if (color === 'red') {
        tile.parentNode.style.backgroundColor = 'red';
        tile2.parentNode.style.backgroundColor = 'red';
    };
};

function resetGame() {
    // get all dom elements with class "key"
    // set the value of the elemnt with index[0] to "A" etc etc
    document.getElementsByClassName("key")[0].innerHTML = 'A';
    document.getElementsByClassName("key")[1].innerHTML = 'S';
    document.getElementsByClassName("key")[2].innerHTML = 'D';
    document.getElementsByClassName("key")[3].innerHTML = 'F';
    document.getElementsByClassName("key")[4].innerHTML = 'J';
    document.getElementsByClassName("key")[5].innerHTML = 'K';
    document.getElementsByClassName("key")[6].innerHTML = 'L';
    document.getElementsByClassName("key")[7].innerHTML = ';';

    var tiles = document.getElementsByClassName('card');
    for (var i = 0; i < tiles.length; i++) {
    tiles[i].style.backgroundColor = "white";
    };

    console.log('DOM has been reset');

    newGame = true;

    elephant = false;
    elephant2 = false;
    monkey = false;
    monkey2 = false;
    giraffe = false;
    giraffe2 = false;
    panda = false;
    panda2 = false;

    console.log('Logic has been reset');

};

function matchUserInput() {
    switch(userInput) {
        case 'A':
            index = 0;
            break;
        case 'S':
            index = 1;
            break;
        case 'D':
            index = 2;
            break;
        case 'F':
            index = 3;
            break;
        case 'J':
            index = 4;
            break;
        case 'K':
            index = 5;
            break;
        case 'L':
            index = 6;
            break;
        case ';':
            index = 7;
            break;    
    };
    
    return index;
};

// game logic

function checkCardNG() {

    switch(userInput) {
        case 'A':
            matchUserInput();
            findAnimal(elephant, 0);
            elephant = true;
            newGame = false;
            break;
        case 'S':
            matchUserInput();
            findAnimal(giraffe, 1);
            giraffe = true;
            newGame = false;
            break;
        case 'D':
            matchUserInput();
            findAnimal(monkey, 2);
            monkey = true;
            newGame = false;
            break;
        case 'F':
            matchUserInput();
            findAnimal(elephant, 3);
            elephant2 = true;
            newGame = false;
            break;
        case 'J':
            matchUserInput();
            findAnimal(monkey, 4);
            monkey2 = true;
            newGame = false;
            break;
        case 'K':
            matchUserInput();
            findAnimal(panda, 5);
            panda = true;
            newGame = false;
            break;
        case 'L':
            matchUserInput();
            findAnimal(giraffe, 6);
            giraffe2 = true;
            newGame = false;
            break;
        case ';':
            matchUserInput();
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
            changeColor('red', 0, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'S':
            findAnimal(giraffe, 1);
            changeColor('red', 1, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'D':
            findAnimal(monkey, 2);
            changeColor('red', 2, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'F':
            findAnimal(elephant, 3);
            changeColor('red', 3, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'J':
            findAnimal(monkey, 4);
            changeColor('red', 4, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'K':
            findAnimal(panda, 5);
            changeColor('red', 5, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case 'L':
            findAnimal(giraffe, 6);
            changeColor('red', 6, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;
        case ';':
            findAnimal(panda, 7);
            changeColor('red', 7, index);
            setTimeout(function(){ alert("Not a match"); }, 500);
            break;    
    };

    ///////////////////////TEST NEW FUNCTION////////////////////////////

    setTimeout(function(){ resetGame(); }, 2000); // new function here
};

newGame();

document.onkeypress = function (event) {
    userInput = event.key.toUpperCase();
    
    // console.log('key pressed = ' + event.key.toUpperCase());

    if (newGame === true) {

        checkCardNG();

    } else {

    if (elephant === true && userInput === 'F' || elephant2 === true && userInput === 'A') {
        
        findAnimal(elephant, 0);
        findAnimal(elephant, 3);
        changeColor('green', 0, 3);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ resetGame(); }, 2000); // new function here

    } else if (giraffe === true && userInput === 'L' || giraffe2 === true && userInput === 'S') {
        
        findAnimal(giraffe, 1);
        findAnimal(giraffe, 6);
        changeColor('green', 1, 6);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ resetGame(); }, 2000); // new function here

    } else if (monkey === true && userInput === 'J' || monkey2 === true && userInput === 'D') {
        
        findAnimal(monkey, 2);
        findAnimal(monkey, 4);
        changeColor('green', 2, 4);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ resetGame(); }, 2000); // new function here

    } else if (panda === true && userInput === ';' || panda2 === true && userInput === 'K') {
        
        findAnimal(panda, 5);
        findAnimal(panda, 7);
        changeColor('green', 5, 7);
        setTimeout(function(){ alert("MATCH!"); }, 500);
        setTimeout(function(){ resetGame(); }, 2000); // new function here

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
        // test: if there is an unexpected logic outcome log an error to the console
        console.log('logic error');      
    }

};