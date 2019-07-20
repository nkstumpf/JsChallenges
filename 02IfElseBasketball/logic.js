//  variables to store scores 

const johnScores = [89, 120, 103];
const mikeScores = [116, 20, 100];
const maryScores = [97, 30, 105];

// get array length

getArrayValues = function(array) {

    let arrayLength = array.length;
    let total = 0;
    
    // store each value in the array to separate variable

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        
    }
    //  calculate average
    console.log(total / arrayLength);
    return total / arrayLength;
}


// compare the result of all the averages and decide a winner

whoWins = function() {

        // if john beats mike and mary 

    if (getArrayValues(johnScores) > getArrayValues(mikeScores) && getArrayValues(johnScores) > getArrayValues(maryScores)) {
        document.write('John wins');

        // if mike beats mary and john

    } else if (getArrayValues(mikeScores) > getArrayValues(maryScores) &&  getArrayValues(mikeScores) > getArrayValues(johnScores)) {
        document.write('Mike wins');

        // if mary beats mike and john
    
    } else if (getArrayValues(maryScores) > getArrayValues(mikeScores) && getArrayValues(maryScores) > getArrayValues(johnScores)) {
        document.write('Mary wins');


        // if none of the above options are true it must be a draw
        
    } else {
        document.write('It\'s a draw');
    }
}

whoWins();


// We could also print who wins using switch statement:

// result = function(winner) {

//     switch(winner) {
//         case 'john':
//             console.log('John\'s team wins!');
//             break;

//         case 'mike':
//             console.log('Mike\'s team wins!');
//             break;
        
//         case 'mary':
//             console.log('Mary\'s team wins!');
//             break;
//             default:
//                 console.log('It\'s a draw.');
//     }

// }
