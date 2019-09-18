/*

1. Write a function that would allow you to do this:

var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"

*/

var run = exercise('running');
var swim = exercise('swimming');
var jog = exercise('jogging');

function exercise(something) {

    var something = 'Today\'s exercise: ' + something;
    
     return function() {

        return something;
    }
};

console.log('////////////////////// Funtion 1 //////////////////////');

console.log(run());
console.log(swim());
console.log(jog());

/*

2. Write a function that would allow you to do this:

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"

*/

var sharePizza = cutPizzaSlices(8);  // variable sharePizza = the funtion cutPizzaSlices

// cutPizzaSlices takes an argument that determines the amount of slices

function cutPizzaSlices(storeThisNumber) {

    // take the total slices and divide by the number passed into: "sharePizza(here)"
    // print the following string: "Each person gets (computed value) slices of pizza"

    var wholePizza = storeThisNumber;

    return function(dividedBy) {

        console.log('I cut the pizza into ' + wholePizza);
        var result = 'Each person gets ' + wholePizza / dividedBy + ' slices of pizza"';

        return result;
    };
    
};

console.log('////////////////////// Funtion 2 //////////////////////');

console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"

// test

console.log(sharePizza(5));


/*


Bonus - Data Security: Inside of a closure, create an object called pii (Personally Identifiable Information)
that cannot be accessed directly. The object should have at least two properties: name and ssn.
Only the name property should be accessible, and it should be called through a public function.
The ssn property should not be accessible at all.

Creating private objects and private properties helps you control who has access to what data and helps you
prevent people who shouldn't see important info like social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need. For example, people
addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

*/


// Bonus:

function secureData() {
    var pii = {
        firstName: 'John',
        lastName: 'Doe',
        ssn: 123-45-6789
    }
    
    return {
        getFirstName: function() {
            return pii.firstName;
        },

        getLastName: function() {
            return pii.lastName;
        },

        setFirstName: function(firstName) {
            return pii.firstName = firstName;
        },

        setLastName: function(lastName) {
            return pii.lastName = lastName;
        },
        
        setSsn: function(ssn) {
            return pii.ssn = ssn;
        } 
    };
};

console.log('////////////////////// Bonus //////////////////////');
_obj = secureData();

console.log(_obj.getFirstName());
console.log(_obj.getLastName());

_obj.setFirstName('Name Set Manually');
_obj.setLastName('Last Name Set Manually');

// test if info is accessible in the concole
console.log(_obj.ssn);