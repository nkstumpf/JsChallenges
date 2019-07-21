// Instructions:

//  Create an object for both John and Mark with key/value pairs to hold first name, mass and height values
//  Add a method to each object to calculate bmi
//  Store the result to the object 
//  Return the result from the method 
//  Calculate who has the highest BMI
//  Log the results to the console along with the full object info of both people

// Calculate BMI

function bmiCalc(a,b) {
    var bmi = a / (b * b);
    return bmi;
}

john = {
    firstName: "John",
    height: 1.7,
    mass: 74.8,
    bmi: function addBmi() { 
        this.bmi = bmiCalc(this.mass, this.height)
        console.log(this.bmi());
    }
}