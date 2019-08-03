// Object creation

var newCar = {
    make: 'hyundai',
    model: 'veloster turbo r-spec',
    year: 2019,
    color: 'black'
}

// Constructor creation

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

// the prototype property
// can be used to add inheritable methods and properties to ALL instances of the original constructor

// inheritable method
Car.prototype.calculateAge = function () {
    console.log(2019 - this.year);
}

// inheritable property
Car.prototype.engineType = '4 cylynder';





var quiz = {
    questions: [
        'Who was the legendary Benedictine monk who invented champagne?',
        'Name the largest freshwater lake in the world?',
        'What is someone who shoes horses called?',
        'What item of clothing was named after its Scottish inventor?',
        'What kind of weapon is a falchion?',
        'Which word goes before vest, beans and quartet?',
        'What is another word for lexicon?',
        'Name the seventh planet from the sun.',
        'Who invented the rabies vaccination?',
    ],
    answers: [
        'Dom Perignon',
        'Lake Superior',
        'The Moon',
        'Farrier',
        'Makintosh',
        'Sword',
        'String',
        'Dictionary',
        'Uranus',
        'Louis Pasteur'
    ]
}