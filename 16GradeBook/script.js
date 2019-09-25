/*

Planning the app

on page load:

1. prompt to add or select student

2. add student

3. select student

4. submit data

5. update UI

What needs to happen when we push the submit button?

* Create a data structure to store our data that can be organized for averaging grades and different students

1. Event listener

2. Get the value of each input field and store it

3. push data to data stucture

4. we need methods of that data stucture that will return the data we want and update is accordingly

5. get the dom elements where we want to post the data 

6. post the data to the correct dom elements

7. add a 'remove item' button that gets created with the new data

// extra feature ideas: 

// add the ability to add new students to your class and store all their data separately
// add dropdown menu with all the students in your class that when selected would bring up that students scores
// add ability to sort your table by subject or grade

*/

// create a database to hold all student info

const dataBase = {
    students: [],
};

// create a constructor function for creating new student instances

function Student(firstName, lastName, userName) {
    this.first = firstName;
    this.last = lastName;
    this.userName = userName;
    this.assignments = [];
};

// create new student to hold student data (when add new student form is submitted)

let bJones = new Student('Bob', 'Jones', 'bJones');
let jSmith = new Student('John', 'Smith', 'jSmith');
let sThompson = new Student('Sarah', 'Thompson', 'sThompson');

// new function for creating student on "add student" button

let addStudentBtn = document.getElementById('add-student');

function addStudent() {

    // get first name of student from input field
    // get last name 
    let first = document.getElementById('first-name').value;
    let last = document.getElementById('last-name').value;

    first = capitolize(first);
    last = capitolize(last);

    // generate username
    userName = generateUserName(first, last);

    // create new student instance
    let newStudent = new Student(first, last, userName);

    dataBase.students.push(newStudent);

    // add new student to the dropdown menu

    let newItem = document.createElement("OPTION");
    let newItemTxt = document.createTextNode(first + ' ' + last);

    newItem.appendChild(newItemTxt);

    let menu = document.getElementById('select-student');
    menu.appendChild(newItem);

    // clear inputs

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';

};

// var node = document.createElement("LI");
//   var textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);

    // function for formatting username:

    function generateUserName(firstName, lastName) {

        // get first initial of first name
        firstInitial = firstName.substr(0, 1).toLowerCase();
        // console.log(firstInitial);

        // get first initial of last name
        lastNameA = lastName.substr(0, 1).toUpperCase();
        // console.log(lastNameA);
 
        lastNameB = lastName.substr(1).toLowerCase();
        // console.log(lastNameB);

        // let username = first initial of first name (to lower case) + last name
        username = firstInitial + lastNameA + lastNameB;
        // console.log(username);

        return username;
    }

    function capitolize(string) {

        // get first initial of first name
        a = string.substr(0, 1).toUpperCase();
        // console.log(a);

        b = string.substr(1).toLowerCase();
        // console.log(b);

        return a + b;
    };

    // function for formatting names
    // function formatName(firstName, lastName) {

    //     // get first initial of first name
    //     firstA = firstName.substr(0, 1).toUpperCase();
    //     console.log(firstA);

    //     firstB = firstName.substr(1).toLowerCase();
    //     console.log(firstB);

    //     // get first initial of last name
    //     lastA = lastName.substr(0, 1).toUpperCase();
    //     console.log(lastA);
 
    //     lastB = lastName.substr(1).toLowerCase();
    //     console.log(lastB);

    //     // let username = first initial of first name (to lower case) + last name
    //     properName = firstA + firstB + ' ' + lastA + lastB;
    //     console.log(properName);

    //     return properName;
    // };

////////////// make this a function: //////////////

    // 1. create a function for formatting new usernames

        // 1. get first name of student from input field
        // 2. get last name 
        // 3. get first initial of first name
        // 4. get first initial of last name (to upper case) substr method
        // 4. let username = first initial of first name (to lower case) + last name

    // 2. create new student instance using the username as the variable name

    // 3. add new student to dropdown menu
    
    // 4. add new student to dataBase

////////////// make this a function: //////////////

// when assignment form is submitted...

// 1. create a new data structure to hold assignment data
// let newAssignment = new Map();

// 2. capture data
// newAssignment.set('subject', 'Math');
// newAssignment.set('assignment', 'Take home quiz');
// newAssignment.set('score', 92);

// let anotherNewAssignment = new Map();

// anotherNewAssignment.set('subject', 'Writing');
// anotherNewAssignment.set('assignment', 'Book report');
// anotherNewAssignment.set('score', 88);

// 3. store data as a new array

// let assignmentOne = [newAssignment.get('subject'), newAssignment.get('assignment'), newAssignment.get('score')];
// let assignmentTwo = [anotherNewAssignment.get('subject'), anotherNewAssignment.get('assignment'), anotherNewAssignment.get('score')];

// 4. push array to the student it was created for

// bJones.assignments.push(assignmentOne, assignmentTwo);

// 5. push student data to db

dataBase.students.push(bJones);
dataBase.students.push(jSmith);
dataBase.students.push(sThompson);


// 3. update the UI



///////////////////////////////////////////////////


function addRow() {

    event.preventDefault();

    // 1. get data fron inputs
    let subject = document.getElementById('subject').value;
    let assignment = document.getElementById('assignment').value;
    let score = document.getElementById('score').value;
    let table = document.getElementById('container');
    table.innerHTML = `
        <td>${subject}</td>
        <td>${assignment}</td>
        <td>${score}</td>
    `;
    
    console.log('row added');

    // 2. store data in data structure
    let newAssignment = new Map();

    newAssignment.set('subject', subject);
    newAssignment.set('assignment', assignment);
    newAssignment.set('score', score);

    let assignmentOne = [newAssignment.get('subject'), newAssignment.get('assignment'), newAssignment.get('score')];

    // change username here to be "activeStudent"
    bJones.assignments.push(assignmentOne);
    console.log(bJones.assignments[0]);


    
    // 3. update UI

    // clear input fields
    document.getElementById('subject').value = '';
    document.getElementById('assignment').value = '';
    document.getElementById('score').value = '';
    
 };

// test
// console.log(newAssignment.get('subject'));
// console.log(newAssignment.get('assignment'));
// console.log(newAssignment.get('score'));


// create an IIFE function that adds new UI elements to the page on load

(function loadHtml(){

    let documentBody = document.getElementsByTagName("BODY")[0];
    documentBody.innerHTML = `
    
        <h1>Welcome to Grade Book!</h1>
        <h2 style="margin: 5%;">To update grades, please add or select a student:</h2>
        <div style="margin: 5% 5%;">
            <p style="margin-bottom: 2%;">Add student</p>
            <input id= "first-name" placeholder="first name" type="text">
            <input id="last-name" placeholder="first name" type="text">
            <input type="submit" value="Add Student" id="add-student" onclick="return addStudent()">
            <p style="margin: 2% 0 2% 0;">Select student</p>
            <select id="select-student" onchange="selectStudent()">
                <option value="select">Select Student</option>
                <option value="Bob Jones">Bob Jones</option>
                <option value="John Smith">John Smith</option>
                <option value="Sarah Thompson">Sarah Thompson</option>
            </select>
        </div>
        <form>
            <h2>Grades</h2>
            <label for="subject">Subject:</label>
            <input id="subject" type="text" name="subject">
        
            <label for="assignment">Assignment:</label>
            <input id="assignment" type="text" name="assignment">
        
            <label for="score">Score:</label>
            <input id="score" type="text" name="score">
            
            <input type="submit" value="Submit" id="submit" onclick="return addRow()">
        </form>
        <table>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Assignment</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody id='container'>
            </tbody>
        </table>
        <h3 id="average" style="display: none;">GPA: <span id="gpa">%Average%</span></h3>    
        <script src="script.js"></script>
`;


}());

// on change select dropdown menu...

// active student variable will hold whichever student is currently active
let activeStudent;

function selectStudent() {

    student = document.getElementById('select-student').value;
    alert(`You selected ${student}!`);
    alert(`here are ${student}s grades:`);
    activeStudent = student;

};