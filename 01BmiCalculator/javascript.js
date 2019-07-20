// // mathmatical funcitons

// // seconds per day variables
// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// // print calculation
// document.write("<p>There are " + secondsPerDay + " seconds in a day.</p></br>");

// // seconds in my lifetime
// var yearsAlive = 29;
// var secondsLifetime = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;
// // print calculation
// document.write("<P> I have been alive for " + secondsLifetime + " seconds</p>");

// // converting numbers in strings to actual numbers using "parseInt"
// var HTMLbadges = prompt("How many HTML badges have you earned so far?");
// var CSSbadges = prompt("How many CSS badges have you earned so far?")
// var totalBadges = parseInt(HTMLbadges) + parseInt(CSSbadges);
// document.write("Wow! You have " + totalBadges + " badges!");

// you can also convert to decimal numbers using "parseFloat"

// round numbers up to nearest whole using Math.round
// var temperature = Math.round(37.5);
// document.write(temperature);
// var temperature2 = Math.floor(37.5);
// document.write(temperature2);

// // Random dice roll
// var diceRoll = Math.floor( Math.random () * 6) + 1;
// document.write("You rolled a " + diceRoll);

// var person = {
//     name: "Nick",
//     country: "US",
//     age: 29,
//     over18: true,
//     skills: [html, css, javascript]

// };

// // example of using dot notation to update/add to objects:

// person.name = "Nicholas";
// person.state = "NC";

// function print(message) {
//     var div = document.getElementById("output");
//     div.innerHTML = message;
// };

// var message = "<p>" + "Hello World. Welcome to " + person.name + "'s profile." + "</p>";
// print(message);

// // Dot notation: Using the property name + "." like this: person.name = person["name"]

// for in loop:

// for (var key in object) {
//     // do something
// };

// var athlete = {
//     name: "",
//     age: 00,
//     maxSquat: 00,
//     maxDeadlift: 00,
//     maxBench: 00 

// };

// for (prop in person) {
//     console.log(prop, ": ", person[prop]);

// making an array of objects:

// var questions = [
//     { question1: "How many states are there in the united states?", answer: 50 },
//     { question2: "How many continents are there in the world?", answer: 7 },
//     { question13: "How many legs does an insect have", answer: 6 }
// ];

// Build an object challenge:

// Step 1. Build a data structure to hold information about a group of athletes 

var athletes = [
    {name: "Athlete 1", age: 21, maxSquat: 265, maxDeadlift: 345, maxBench: 235},
    {name: "Athlete 2", age: 23, maxSquat: 315, maxDeadlift: 425, maxBench: 205},
    {name: "Athlete 3", age: 19, maxSquat: 345, maxDeadlift: 405, maxBench: 225},
    {name: "Athlete 4", age: 24, maxSquat: 285, maxDeadlift: 395, maxBench: 260},
    {name: "Athlete 5", age: 22, maxSquat: 300, maxDeadlift: 455, maxBench: 275}
];

// Step 2. Print the data to the page using a for loop

var message = "";
var athlete;

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

function getAthlete(athlete) {
    message += "<p>Athlete: " + athletes.name + "</p>";
    message += "<p>Age: " + athletes.age + "</p>";
    message += "<p>Squat Max: " + athletes.maxSquat + "</p>";
    message += "<p>Deadlift Max: " + athletes.maxDeadlift + "</p>";
    message += "<p>Bench Max: " + athletes.maxBench + "</p>";
}

for (var i = 0; i < athletes.length; i += 1) {
    athlete = athletes[i];
    if (athlete.name === search) {
        message += "<p>Athlete: " + athletes.name + "</p>";
    message += "<p>Age: " + athletes.age + "</p>";
    message += "<p>Squat Max: " + athletes.maxSquat + "</p>";
    message += "<p>Deadlift Max: " + athletes.maxDeadlift + "</p>";
    message += "<p>Bench Max: " + athletes.maxBench + "</p>";

    }
}

// Step 3. make the data structure searchable

while (true) {
    search = prompt("search for an athlete: Type athlete first name or type 'quit' to end)");
    if (search === null || search.toLowerCase() === 'quit') {
       break; 
    }

}





