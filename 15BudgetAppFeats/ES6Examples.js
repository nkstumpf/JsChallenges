
//////////////// VARIABLES IN ES6 ////////////////
//////////////////////////////////////////////////

/*

// this work becuase const is delcared AND assigned in the block scope in which it is used
function testScope3(passedTest) {

    let firstName;

    if (passedTest) {

        let firstName = 'Bob';
        const date = 'september 22nd 2019';
        console.log(firstName + ' passed test ' + date);
    };
};

testScope3(true);

*/

/*

// this example works because const is delcared and assigned in function scope
function testScope(passedTest) {

    let firstName;
    const date = 'september 22nd 2019';

    if (passedTest) {

        let firstName = 'Bob';
        console.log(firstName + ' passed test ' + date);
    };
};

testScope(true);

*/

/*

// this example does not work becuase const is only delcared in function scope and then assigned in another scope

function testScope2(passedTest) {

    let firstName;
    const date;

    if (passedTest) {

        let firstName = 'Bob';
        date = 'september 22nd 2019';
        console.log(firstName + ' passed test ' + date);
    };
};

testScope2(true);

*/

/*

// this example does not work becuase the variables are called before they are defined. This throws an error in ES6

function testScope4(passedTest) {

    if (passedTest) {

        console.log(firstName + ' passed test ' + date);
        let firstName = 'Bob';
        const date = 'september 22nd 2019';
    };
};

testScope4(true);

*/

/*

In this example "i" is returned as two SEPARATE variables. because in ES6 variables are block scope and if you define a variable outside scope and then again inside scope it will create two separate variables.

*/

/*

let i = 25;

for (let i = 0; i < 5; i++) {
    console.log(i);
};

// returns 0 1 2 3 4 25

*/

/*

If we use the same example with var instead of let the variable will be reassigned instead of created as an independant variable

*/

/*

var i = 25;

for (var i = 0; i < 5; i++) {
    console.log(i);
};

// returns 0 1 2 3 4 5

This is because Let is BLOCK scoped and var is FUNCTION scoped. So even though Let can be mutated after it has been defined just like Var... it can only be mutated WITHIN its block scope. If a Let variable of the same name is created or "mutated" OUTSIDE the current scope it will be created as a SEPARATE variable with its own value.

*/

//////////////// ARROW FUNCTIONS ////////////////
/////////////////////////////////////////////////

// One line of code. One argument.

/*

const years = [1990, 1965, 1982, 1937];
let ages = years.map(element => 2019 - element);

console.log(ages);

*/

/*

The above function is the equivelent of writing this is ES5:

var years = [1990, 1965, 1982, 1937];

var ages = years.map(function(element) {
    return 2019 - element;
});

console.log(ages);

*/

// One line of code. MORE than one argument. 
// Requires adding parentheses around the arguments

/*

const years = [1990, 1965, 1982, 1937];
let ages = years.map((element, index) => `This is the position: ${index}. This is the age: ${2019 - element}.`);

console.log(ages);

*/

// Multiple lines of code. Multiple arguments. 
// This requires adding parentheses around the arguments AND curly braces AND the return keyword

/*

const years = [1990, 1965, 1982, 1937];
let ages = years.map((element, index) => {

    const now = new Date().getFullYear();
    const age = now - element;

    return `Age of element ${index + 1}: ${age}.`;

});

console.log(ages);

*/

/*

ARROW FUNCITONS DO NOT HAVE A 'THIS' KEYWORD.

Instead they use the 'this' keyword of the FUNCTION or SCOPE they are WRITTEN IN. 

This is also referred to as having a 'lexical' 'this' variable. This takes care of the problem of callback functions inside methods in ES5 where you had to hack the problem by defining a variable inside the method as 'this' ie: var self = this;

ARROW FUNCITONS ARE ILL SUITED AS METHODS.

Because arrow functions lack their own bindings to the 'this', 'arguments', 'super', and 'new.target' keywords. Arrow function expressions are ill suited as methods, and they CANNOT be used as constructors. If you were to use an arrow funciton as a method the 'this' keyword would point to its surroundings which would most likely be the window object.

*/

/* 

// Example from above in ES5:

var box = {

    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        box = document.querySelector('.greenBox');

        box.addEventListener('click', function() {

            var string = 'this is a ' + self.color + ' box, number ' + self.position;
            alert(string);
        });
    }
}

*/

/* 

// Example from above in ES6:

let box = {

    color: 'green',
    position: 1,
    clickMe: function() {

        box = document.querySelector('.greenBox');

        box.addEventListener('click', () => {

            var string = 'this is a ' + this.color + ' box, number ' + this.position;
            alert(string);
        });
    }
}

*/

// ES5 example of using bind to assign 'this' keyword in a constructor function
// without using the bind function you would have to use the 'var self = this;' hack

/*

function Person(name) {
    this.name = name;
};

var friends = ['Jimmy', 'Britney', 'Tim', 'Will'];

Person.prototype.myFriends = function(friends) {

    var newArr = friends.map(function(friend) {

        return this.name + ' is friends with ' + friend;

    }.bind(this)); // this coppies the above function and assigns the this keyword to it?

    console.log(newArr);

};

new Person('Nick').myFriends(friends);

*/


// ES6 example of above function

/*

function Person(name) {
    this.name = name;
};

let friends = ['Jimmy', 'Britney', 'Tim', 'Will'];

Person.prototype.myFriends = function(friends) {

    let newArr = friends.map(friend => `${this.name} is friends with ${friend}`);

    console.log(newArr);

};

new Person('Nick').myFriends(friends);

*/

//////////////// DESTRUCTURING ////////////////
///////////////////////////////////////////////

/*

Destructing is used when you need to extract data from an array or object and store it inside a new variable

*/

// ES5 example in ES5 we would have to do this like this:

// var john = ['john', 26]; // define the array

// then extract the data you need one variable at a time

// var name = john[0];
// var age = john[1];

// In ES6 this is made easier with the new destructuring syntax:

/*

const [name, age] = ['john', 26];

console.log(name);
console.log(age);

// we can also do teh same with data from an object like this:

const obj = {
    firstName: 'john',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

*/


/* 

The new variables created in the destructuring process will automatically be named unless you specify a name in the syntax. An example of this is shown below:

*/

// this will return the same reuslt as the above example except now you have custom variable names!

/*

const {firstName: varA, lastName: varB} = obj;

console.log(varA);
console.log(varB);

*/

/* 

Destructuring can also be used on functions. You can destructure a function to return the values of the function as new variables. example below:

*/

/*

function calcRetirementAge(year) {
    const age = new Date().getFullYear() - year;
    
    return [age, 65 -age]; // return an array that we can destructure
}

const [age2, yrsUntilRetire] = calcRetirementAge(1989); // call the function with the desired destructuring 

console.log(age2);
console.log(yrsUntilRetire);

*/

/*

/////////////////////////
// ARRAYS IN ES6
/////////////////////////



// ES6 



/////////////////////////
// THE SPREAD OPERATOR
/////////////////////////

// the spread operator (...arr) is used to display/call all the elements within an array


/////////////////////////
// REST PARAMETERS
/////////////////////////

// same syntax as the spread operator (...variable) except it is used on a variable to convert the arguments of a function to an accessible array

//ES5 example

// This is an example of how you would have to this in ES5

function isFullAges5() {

    // console.log('these are the arguments' + arguments)
    var argsArr = Array.prototype.slice.call(arguments);

    /* what the above line is doing ^

    1. create a variable named: argsArr
    2. go into the Array.prototype constructor
    3. slice... aka: separate "these" elements...
    4. "these" being the arguments that are being "called"
    5. store them inside the argsArr variable

   console.log('Rest Params - ES5 EXAMPLE:');

    argsArr.forEach(function(current) {
        console.log((2016 - current) >= 18);
    });
};

isFullAges5(1990, 1999, 1965);

//ES6 example

// and this is an example of how you would do the same thing in ES6...

function isFullAges6(...years) {  // "years" does not exist as an array yet - it is simply a placeholder argument for values that will be passed into the function as array like arguments.
    // console.log(years);

    console.log('Rets Params - ES6 EXAMPLE:');

    years.forEach(current => console.log((2016 - current >= 18)));
};

isFullAges6(1990, 1999, 1965);

/////////////////////////
// REST PARAMETERS PART II
/////////////////////////

// same syntax as the spread operator (...variable) except it is used on a variable to convert the arguments of a function to an accessible array

//ES5 example

// This is an example of how you would have to this in ES5

function isFullAge5(limit) { // limit = age limit

    /* 
    
    So if we were to change this function to accept an argument instead of being anonymous, ie: "limit" we would then also have to add a "limit" in as an argument when we call the function. Doing so would mess up our function because the way we have it written below we are telling the browser to make an array of ALL the arguments returned from prototype - not JUST the ones we are wanting to check the full age of. 
    
    */

    /*


    // console.log('these are the arguments' + arguments)
    var argsArr = Array.prototype.slice.call(arguments, 1); // add 1 here to indicate to the slice method to start slicing at position 1 which will exclude the first argument because its at position 0

   console.log('Rest Params - ES5 EXAMPLE II:');

    argsArr.forEach(function(current) {
        console.log((2016 - current) >= limit); // change the hard coded limit number to the argument limit
    });
};

isFullAge5(21, 1990, 1999, 1965); // 16 is the "limit" argument

//ES6 example

/* 

With ES6 however this is not an issue becuase we can simply "add" an additional argument alongside the rest parameters and it will differentiate them by identifying the "..." as saying "group all of these arguments together as one".

*/

/*

function isFullAge6(limit, ...years) {

    console.log('Rets Params - ES6 EXAMPLE II:');

    years.forEach(current => console.log((2016 - current >= 18)));
};

isFullAge6(21, 1990, 1999, 1965);

/////////////////////////
// DEFAULT PARAMETERS
/////////////////////////

/* 

Default parameters are the parameters of a contructor function that are defaulted to when the parameters are not explicitly defined.

*/

/*

// ES5 example

function Familymember(firstName, yearOfBirth, lastName, nationality) {

    // in ES5 we have to define the default parameters with an if else statement or a ternary operator like this:

    firstName === undefined ? firstName = 'John' : firstName = firstName;

    lastName === undefined ? lastName = 'Doe' : lastName = lastName;

    nationality === undefined ? nationality = 'American' : nationality = nationality;


    this.firsName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

var nick = new Familymember('Nick', 1989, 'Stumpf', 'German');
var randomPerson = new Familymember('Jane', 2000);

// ES6

// ES6 makes setting default parameters much easier by allowing us to define the default parameters right inside the contructor like this:

function AnotherFamilyMember(firstName = 'Jane', lastName = 'Doe', yearOfBirth = 1999, nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

var anotherRandomPerson = new AnotherFamilyMember();


/////////////////////////
// MAPS
/////////////////////////

// Hash mapping: new key/ value data structure in ES6

/*

Map is a contructor function that take creates a data structure out of key / value pairs that you "set" to it and then maps those pairs to an array

*/

/*

const question = new Map();


// set method
// used to set the data
question.set('question', 'What is the official name of the latest major javascript version?'); // key - value pair

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set(5, 'I will be deleted');
question.set('correct', 3);
question.set(true, 'Correct!');
question.set(false, 'Nope :(');

// get method
// used to retrieve the data
console.log(question.get('question'));
console.log(question.get(1));

// other useful methods

// size method
// used to retrieve the "size" of the map structure (number of entries)
console.log(question.size);

// delete method 
// deletes data from the structure
question.delete(5);

// has method
// checks if the data structure "has" an certain element
if (question.has(4)) {
    console.log('I have this!');
} else console.log('I don\'t have this');

// clear method
// clears all data from the structure
// question.clear();

// Iterating through map using forEach

// question.forEach((value, key) =>
//     console.log(`this is ${key}, and it\'s value is set to ${value}`));

// For of loop

// ****** GO BACK AND REVIEW THIS *******

// we can accomplish the same result using a for of loop.

/* 

In this block of code we are looping through the data structure. Destructuring (the bracket notation) is used to target the data we want - the key and value pairs of all question entries. Then we are saying "if the type of value stored inside key is a number execute this code"

*/

/*

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// prompting for our quiz answer

/* 

what this block of code is doing is saying set a constant to the variable name "answer" and store within it a prompt (user input) that asks you to input the correct answer and then stores that input to the variable. 

Below that is a line that says "go get..." a string within the data structure called "correct" and that equals (===) the correct answer

*/

/*

const answer = parseInt(prompt('Please enter the correct answer'));
    question.get(answer === question.get('correct'));


/////////////////////////
// CLASSES
/////////////////////////


// ES5 example:

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

// Classes are just the ES6 way of creating constructor funtions
 
/* Main diferences between classes in ES6 and constructors is ES5 are:

1. No hoisting in classes
2. Can only use methods with classes not properties

*/

/////////////////////////
// SUB CLASSES
/////////////////////////

/*


// ES5 example:

// Constructor function ie: class

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfBirth;
    this.job = job;
}

// add a method to the new objects prototype:

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

// create a new person using the class
var john5 = new Person5('John', 1990, 'teacher');

// Sub Class
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

    Person5.call(this, name, yearOfBirth, job);

    /* 
    
    Here we are "calling" the Person class and asigning the "this" keyword to point to Athlete5. Otherwise it will point to an empty object?

    */

    /*

    this.olympicGames = olympicGames;
    this.medals = medals;

    // Then we set the other properties as usual

}

Athlete5.prototype = Object.create(Person5.prototype);

// This line "connects" the athlete subclass to the person class so that they can share the same prototype


// ES6 example:

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    } // no punctuation needed here

    calculateAge()
}

*/










