console.log("js file linked");

//             var markMtrs = 2;
//             var markKgs = 83;

//             var johnMtrs = 1.7;
//             var johnKgs = 74.8;


//             var johnBMI = johnKgs / (johnMtrs * johnMtrs);
//             var markBMI = markKgs / (markMtrs * markMtrs);

//             console.log(johnBMI, markBMI);

//             function inchesToMeters(x) {
//                 return (x / 12) / 3
//             }

            var calculateBtn = document.getElementById('calculateBtn');

            var displayResults = document.getElementById('results');

            // convert feet and inches to meters

            function convertToMeters(feet, inches) {
                var meters = feet * .3  + inches * .025;
                return meters;
            }

            // convert pounds to kgs

            function convertToKgs(x) {
                var kgs = x / 2.2;
                return kgs;
            }

            function bmiCalc(a,b) {
                var bmi = a / (b * b);
                return bmi;
            }

            // get values from text inputs and caclulate bmi

            calculateBtn.addEventListener('click', function() {

                // get height in feet

                var heightFeet = document.getElementById('heightFeet').value;
                console.log("You entered" + " " + heightFeet + " feet");

                // get height in inches

                var heightInches = document.getElementById('heightInches').value;
                console.log("You entered" + " " + heightInches + " inches");

                // combine them and convert to meters 

                var heightMeters = convertToMeters(heightFeet, heightInches);
                console.log("Your height converted to meters is: " + heightMeters);

                // get weight in pounds
                
                var weight = document.getElementById('weight').value;
                console.log("You entered " + weight + " pounds");

                //  convert to kgs

                var weightKgs = convertToKgs(weight);
                console.log("Your weight in Kgs is: " + weightKgs);

                var bmi = bmiCalc(weightKgs, heightMeters);
                displayResults.innerHTML = `
                <h2>Your BMI is: ${bmi}
                `
                console.log("Your BMI is " + bmi);

            })

            //  variables to store height and weight

            // var markH = inchesToMeters(prompt("Enter Mark's Height in Inches:"));
            // var markW = lbsToKg(prompt("Enter Mark's Weight in Pounds:"));

            // var johnH = inchesToMeters(prompt("Enter John's Height in Inches:"));
            // var johnW = lbsToKg(prompt("Enter John's Weight in Pounds:"));

            // function to convert imperial to metric

            // function lbsToKg(x) {
            //     return x / 2.2
            // }

            // function to calulate BMI

            // document.write("Mark's BMI is:" + " " + bmiCalc(markH, markW) + "And John's BMI is:" + " " + bmiCalc(johnH, johnW));