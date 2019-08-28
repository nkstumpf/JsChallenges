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
        'Farrier',
        'Makintosh',
        'Sword',
        'String',
        'Dictionary',
        'Uranus',
        'Louis Pasteur'
    ]
}

// create a function constructor called "question"
// question should include the q

/* 

1. question itself
2. the answers from which the player can chose the corrrect one
3. the correct answer (use a number)

*/

var Question = function(question, correctAnswer) {
    this.question = question;
    this.answers = quiz.answers;
    this.correctAnswer = correctAnswer
};

// create a couple of questions using the constructor 

var questionOne = new Question(quiz.questions[0], quiz.answers[0]);
var questionTwo = new Question(quiz.questions[1], quiz.answers[1]);
var questionThree = new Question(quiz.questions[2], quiz.answers[2]);
var questionFour = new Question(quiz.questions[3], quiz.answers[3]);
var questionFive = new Question(quiz.questions[4], quiz.answers[4]);
var questionSix = new Question(quiz.questions[5], quiz.answers[5]);
var questionSeven = new Question(quiz.questions[6], quiz.answers[6]);
var questionEight = new Question(quiz.questions[7], quiz.answers[7]);
var questionNine = new Question(quiz.questions[8], quiz.answers[8]);
var questionTen = new Question(quiz.questions[9], quiz.answers[9]);

// store the questions inside an array

var myQuestions = [
    questionOne, 
    questionTwo, 
    questionThree, 
    questionFour, 
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen
];

// select one random question and log it the console together with the possible answers

// function randomQuestion(arr) {
//     x = Math.floor(Math.random() * 10);
//     selected = arr[x];
//     return console.log('The current question is: ' + selected.question);
// }

// randomQuestion(myQuestions);

// when the user clicks the start button

// global variable that stores the current question value

var theQuestion = '';
console.log('The current Question is: ' + theQuestion);

var currentQuestion = document.getElementById('question');
var emptyDiv = document.getElementById('answer-choices');
var hideMe = document.getElementById('hide-me');
var score;

document.getElementById('btn-start').addEventListener('click', function() {
    var startBtn = document.getElementById('btn-start');
    startBtn.textContent = 'Next Question';
    hideMe.style.display = 'none';
    score = 0;
    loadScore();
    console.log('Start game button has been pressed');
    console.log('Start button text changed to "Next Question".');

    // call the random question
    randomQuestion(myQuestions);

    function randomQuestion(arr) {
        x = Math.floor(Math.random() * 10);
        selected = arr[x];
        currentQuestion.textContent = selected.question;
        console.log('The current question is: ' + selected.question);
        theQuestion = selected.question;
        emptyDiv.innerHTML = `
        <p>Answer Choices:</p>
        <ul style="list-style-type: decimal">
            <li>${quiz.answers[0]}</li>
            <li>${quiz.answers[1]}</li>
            <li>${quiz.answers[2]}</li>
            <li>${quiz.answers[3]}</li>
            <li>${quiz.answers[4]}</li>
            <li>${quiz.answers[5]}</li>
            <li>${quiz.answers[6]}</li>
            <li>${quiz.answers[7]}</li>
            <li>${quiz.answers[8]}</li>
        </ul>`
        return theQuestion;
    }   
})

// function for dynamically generating the score element

var loadScore = function() {
    document.getElementById('score').innerHTML = `
    <h4>Score: ${score}</h4>
    `
}

// submit the users input and check if the answer is correct

document.getElementById('btn-submit').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    console.log('the users answer was: ' + userInput);
    console.log('the correct answer is: ' + selected.correctAnswer);

    if (userInput === selected.correctAnswer) {
        currentQuestion.textContent = 'Thats Correct!';
        score++
        loadScore();
        console.log('Thats correct!');
    } else {
        console.log('sorry you suck too much ass');
    }
})


// reset button

document.getElementById('btn-reset').addEventListener('click', function() {
    location.reload();
    console.log('game has been reset');
})
