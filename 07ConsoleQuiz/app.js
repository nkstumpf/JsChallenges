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

function randomQuestion(arr) {
    x = Math.floor(Math.random() * 10);
    console.log(arr[x]);
}

// use the prompt function to ask the user for the correct answer

