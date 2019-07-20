/* The random number guessing game 
generates a number between 1 and 6
and gives the player 2 chances to guess.
*/

// Assume the player didnt gues correctly
var correctGuess = false;

// generate random number from 1 - 6
// var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

// /* Test to see if player guessed correctly:
// 1. correct
// 2. guessed too high
// 3. guessed too low
// */

// if (parseInt(guess) === randomNumber ) {
//   correctGuess = true;
// } else if ( parseInt(guess) < randomNumber ) {
//   var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
//   if (parseInt(guessMore) === randomNumber) {
//       correctGuess = true;
//   }
// } else if ( parseInt(guess) > randomNumber ) {
//    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
//   if (parseInt(guessLess) === randomNumber) {
//       correctGuess = true;
//   }
// }
// // Test if player is correct
// if ( correctGuess ) {
//     document.write('<p>You guessed the number!</p>');
// } else {
//     document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
// }