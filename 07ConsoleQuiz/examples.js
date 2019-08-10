// OBJECTS

var newCar = {
    make: 'hyundai',
    model: 'veloster turbo r-spec',
    year: 2019,
    color: 'black'
}

// CONSTRUCTORS
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

// PROTOTYPES

/* * each and every object in javascript has a prototype property

if you call a method on an object the JS interpreter will first look in the prototype property of that particular object- if no method is found it will then look to that objects parent and so on and so forth all the way to the global "object" prototype at which point if no method is found it will return "NULL" because it did not find anything all the way up the chain. This is how any function in JS is able to use any global method

can be used to add inheritable methods and properties to ALL instances of the original constructor
*/

// INHERITANCE

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

// First Class Functions

/*

- A function is an instance of the object type 
- A function behaves like any other object
- We can store functions in a variable
- We can pass a function as an argumnet to another function
- We can return a function from a function

In computer science, a programming language is said to support "first-class functions" (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.

*/

// Passing functions as arguments

var years = [1990, 1965, 2019, 2016, 2007]; // a given array that you might want to run some calculations on later


// VERY USEFUL!
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


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

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Functions returning functions

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

//////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Function Expressions (immediately invoked function expressions IIFE)

// Dont understand this concept at all...

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Closures

// Closure is when a function (child), inside another function (parent), has access to its parent variables. The inverse does not apply, a parent function cannot see variables of its children functions.

// in regard to closures... An inner function always has access to the variables and parameters of its outer funciton, even after the outer function has returned

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a );
    }
}

retirementUS = retirement(66);
retirementUS(1990);

// Rewrite a previous example function utilizing closures

function interviewQuestion(job) { // because of closures, the nested function will have access to the "job" argument even after the first function has executed
    return function(name) {
        if (job === 'designer') {
                console.log(name + ', Can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ' What subject do you teach?');
        } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

