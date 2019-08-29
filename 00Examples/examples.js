/////////////////////////
// OBJECTS
/////////////////////////
var newCar = {
    make: 'hyundai',
    model: 'veloster turbo r-spec',
    year: 2019,
    color: 'black'
}

/////////////////////////
// CONTRUCTORS
/////////////////////////
// A constructor is a template of an object used to create other similar objects

var Car = function(make, model, year, color) { // Capitolization signifies a contructor function
    this.make = make; // Declaration of variables represent the functions undetermined future arguments
    this.model = model;
    this.year = year;
    this.color = color;
    this.calculateAge = function () { // A method
        console.log(2019 - this.year);
    }
}

// Creating a new object from a constructor template
// "Instanciation" the new object is an "instance" of the constructor template

// the importance of the "new" keyword is mostly that it points the "this" variable to the new empy object instead of the global variable

var oldCar = new Car('mazda', 'mazda3', '2016', 'space gray');
var yourCar = new Car('toyota', 'rav4', 2018, 'white'); // the "new" keyword signifies the creation of an instance 
console.log(yourCar); // see example in console

/////////////////////////
// PROTOTYPES
/////////////////////////

/* * each and every object in javascript has a prototype property

if you call a method on an object the JS interpreter will first look in the prototype property of that particular object- if no method is found it will then look to that objects parent and so on and so forth all the way to the global "object" prototype at which point if no method is found it will return "NULL" because it did not find anything all the way up the chain. This is how any function in JS is able to use any global method

can be used to add inheritable methods and properties to ALL instances of the original constructor
*/

/////////////////////////
// INHERITANCE
/////////////////////////
// inheritance is when one object is based on another object gets access to another objects propterties and methods

// inheritable method example
Car.prototype.calculateAge = function () {
    console.log(2019 - this.year);
}

// inheritable property example
Car.prototype.engineType = '4 cylynder';

// Object.create
// This is another way to create objects

var carProto = {
    calculateAge: function() {
        console.log(2019 - this.year);
    }
};

// builds an object that inherits directly from the first argument we pass in
// create a variable using the object.create method and pass it the carProto object as an argument
var yourNewCar = Object.create(carProto);
yourNewCar.make = 'land rover';
yourNewCar.model = 'range rover';
yourNewCar.year = 2020;

// you can also pass the object.create funtion another parameter like this in order to fill the object with data of your choosing 
var anotherNewCar = Object.create(carProto, {
    make: {value: 'toyota'},
    model: {value: '4 runner'},
    year: {value: '2019'}
})

/////////////////////////
// FIRST CLASS FUNCTIONS
/////////////////////////

/*

- A function is an instance of the object type 
- A function behaves like any other object
- We can store functions in a variable
- We can pass a function as an argumnet to another function
- We can return a function from a function

In computer science, a programming language is said to support "first-class functions" (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.

*/

/////////////////////////
// PASSING FUNCTIONS AS ARGUMENTS
/////////////////////////

var years = [1990, 1965, 2019, 2016, 2007]; // a given array that you might want to run some calculations on later

// VERY USEFUL EXAMPLE

function arrayCalc(arr, fn) { // create a function that takes the array as well as the function that will execute the calculation on that array as arguments
    var arrResult = []; // this will hold the result
    for (var i = 0; i < arr.length; i++) { // iterate throught the array
        arrResult.push(fn(arr[i])); // push the current iteration of the loop into the arguments of the passed funtions
    }
    return arrResult; 
}

// this function will be passed in as a callback argument to the above function
function calcAge(passedElement) {
    return 2019 - passedElement;
}


// and here we call the first function...

// pass in the desired array AND the desired function ON that array
var carAges = arrayCalc(years, calcAge);
// console log the results
console.log("your cars are this many years old: " + carAges);

// we can perform whatever function we want on any array using this procedure 
// such as checking which cars are brand new...

function isNew(passedElement) {
    return passedElement >= 2019;
}

var newCars = arrayCalc(years, isNew);
console.log(newCars);

/////////////////////////
// FUNCTIONS RETURNING OTHER FUNCTIONS
/////////////////////////

function interviewQuestion(job) { // the first function takes a parameter
    if (job === 'designer') { // and... returns another function that takes a second parameter
        return function(name) {
            // code goes here
            console.log(name + ', Can you please explain what UX design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {
        console.log(name + ' What subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

designerQuestion('Mark');
teacherQuestion('John');


// Still dont quite undersand how this works...

function carType(type) {
    if (type === 'coupe') {
        // function
        return function(carMake) {
        console.log('Your ' + carMake + ' has 2 doors!');
        }
    } else if (type === 'sedan') {
        return function(carMake) {
            console.log('Your ' + carMake + ' has 4 doors!');
        }
    } else {
        return function(carMake) {
            console.log('We arent sure how many doors this car type has');
        }
    }
}

// basically you can use this technique to return a number of different results fron the same function based on the parameters you pass in later?

var theCarType = carType('coupe');

theCarType('Honda');

/////////////////////////
// Function Expressions (immediately invoked function expressions IIFE)
/////////////////////////




/////////////////////////
// CLOSURES
/////////////////////////

// Closure is when a function (child), inside another function (parent), has access to its parent variables. The inverse does not apply, a parent function cannot see variables of its children functions.

// in regard to closures... An inner function always has access to the variables and parameters of its outer funciton, even after the outer function has returned

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log('CLOSURES EXAMPLE: ' + (retirementAge - age) + a );
    }
}

retirementUS = retirement(66);
retirementUS(1990);

// Rewrite a previous example function utilizing closures

function interviewQuestion(job) { // because of closures, the nested function will have access to the "job" argument even after the first function has executed
    return function(name) {
        if (job === 'designer') {
                console.log('CLOSURES EXAMPLE: ' + name + ', Can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('CLOSURES EXAMPLE: ' + name + ' What subject do you teach?');
        } else {
                console.log('CLOSURES EXAMPLE: ' + 'Hello ' + name + ', what do you do?');
            }
        }
    }


/////////////////////////
// BIND 
/////////////////////////

// Bind allows you to manually point the "this" keyword

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('BIND EXAMPLE: ' + 'Good ' + timeOfDay + 'My name is ' + this.name + '.');
        } else if (style === 'casual') {
            console.log('BIND EXAMPLE: ' + 'Hey ' + 'I\'m ' + this.name + 'how are ya this ' + timeOfDay + '?');
        }
    }
}

john.presentation('formal', 'afternoon');

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
};




/////////////////////////
// CALL
/////////////////////////

// Call allows you to call a specific function 





/////////////////////////
// APPLY
/////////////////////////

// Apply works the same way as "call" except it allows you to pass an array as an argument



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

    */

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


// ES5 example:

// Super Class

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

// Sub Class
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {

    Person5.call(this, name, yearOfBirth, job);

    /* 
    
    Here we are "calling" the Person class and asigning the "this" keyword to point to Athlete5. Otherwise it will point to an empty object?

    */

    this.olympicGames = olympicGames;
    this.medals = medals;

    // Then we set the other properties as usual

}

Athlete5.prototype = Object.create(Person5.prototype);

// This line "connects" the athlete subclass to the person class so that they can share the same prototype





