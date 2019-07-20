// 03 Challenge: Arrays and Functions

// Instructions:

// based on the total ammount of 3 separate bills
// make a function that can calculate tips based on conditions set by the user 
// return an array of all the tips
// return an array of all the total ammounts (original bill + tip)


// variables hold the bill values

firstBill = 124;
secondBill = 48;
thirdBill = 268;

// calculates the tip

function tipCalc(x) {
    if (x < 50) {
        let tip = x * 0.2;
        return tip.toFixed(2);
    } else if (x > 50 && x < 200) {
        let tip = x * 0.15;
        return tip.toFixed(2);
    } else if (x > 200) {
        let tip = x * 0.1;
        return tip.toFixed(2);
    } else {
        console.log('I don\'t know how much to tip');
    }
}

// adds all tips to tips array

tips = [parseInt(tipCalc(firstBill)), parseInt(tipCalc(secondBill)), parseInt(tipCalc(thirdBill))];

// adds tips to totals

firstTotal = firstBill + tips[0];
secondTotal = secondBill + tips[1];
thirdTotal = thirdBill + tips[2];

//  adds all totals to the array

totals = [firstTotal, secondTotal, thirdTotal];

console.log(tips);
console.log(totals);