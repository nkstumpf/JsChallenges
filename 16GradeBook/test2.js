

// variable that keeps track of who the currently active user is
let currentUser;
let activeStudent;
let noStudentSelected = true;

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

// create function to get gpa 

function getGPA() {
        
    let scoresArr = [];
    let asnmtsArr = currentUser.assignments;
    let table = document.getElementById('average');

    for (let i = 0; i < asnmtsArr.length; i++) {
        scoresArr.push(parseInt(asnmtsArr[i].score));

        console.log('scores array: ' + scoresArr);
    };

    function getSum(total, num) {
        return total + num;
    };

    if (scoresArr.length === 0) {

        table.innerHTML = `${currentUser.userName}'s GPA is: 0`;

    } else {

    console.log(scoresArr);
    let length = asnmtsArr.length;
    console.log('the length is: ' + length);
    let sum = scoresArr.reduce(getSum);
    console.log('the sum is: ' + sum);

    let average = Math.round(sum / length);
    console.log('your grade average is: ' + average);

    function displayGPA() {
        table.style = "display: block;";
        table.innerHTML = `${currentUser.userName}'s GPA is: ${average}`;
    };

    displayGPA();

    };

};

// create new student to hold student data (when add new student form is submitted)

let bJones = new Student('Bob', 'Jones', 'bJones');
let jSmith = new Student('John', 'Smith', 'jSmith');
let sThompson = new Student('Sarah', 'Thompson', 'sThompson');

// new function for creating student on "add student" button

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

    // alert user they have added a new student

    alert(`${first} ${last} has been added to your roster.`);

};

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


dataBase.students.push(bJones);
dataBase.students.push(jSmith);
dataBase.students.push(sThompson);


// 3. update the UI


// create a function that populates all data to table when student is selected

function printData() {

    for (let i = 0; i < currentUser.assignments.length; i++) {
    // pass in the active students assignments subject, assignment, score
    let table = document.getElementById('container');
    let row = document.createElement('TR');

    let cellOne = document.createElement('TD');
    let cellTwo = document.createElement('TD');
    let cellThree = document.createElement('TD');

    cellOne.textContent = currentUser.assignments[i].subject;
    cellTwo.textContent = currentUser.assignments[i].assignment;
    cellThree.textContent = currentUser.assignments[i].score;

    table.appendChild(row);

    row.appendChild(cellOne);
    row.appendChild(cellTwo);
    row.appendChild(cellThree);

    };
};



function appendData(sub, asmt, scor) {

    let table = document.getElementById('container');
    let row = document.createElement('TR');

    let cellOne = document.createElement('TD');
    let cellTwo = document.createElement('TD');
    let cellThree = document.createElement('TD');

    cellOne.textContent = sub;
    cellTwo.textContent = asmt;
    cellThree.textContent = scor;

    table.appendChild(row);

    row.appendChild(cellOne);
    row.appendChild(cellTwo);
    row.appendChild(cellThree);

};

// adds data to UI and data structure
function addRow() {

    event.preventDefault();

    // determine if a selection needs to be made

    if (noStudentSelected === true || activeStudent === 'select') {

        alert('Please select a student to edit grades');

    } else if (subject.value === "" || assignment.value === "" || score.value === "") {

        alert('Incomplete entry. Please fill out all required data before submitting');
        
    } else {

        // 1. get data fron inputs
        let subject = document.getElementById('subject').value;
        let assignment = document.getElementById('assignment').value;
        let score = document.getElementById('score').value;

        appendData(subject, assignment, score);
        
        console.log('db record created');

        // 2. store data in data structure
        let newAssignment = new Map();

        newAssignment.set('subject', subject);
        newAssignment.set('assignment', assignment);
        newAssignment.set('score', score);

        let assignmentOne = {
            subject: newAssignment.get('subject'), 
            assignment: newAssignment.get('assignment'), 
            score: newAssignment.get('score')
        };

        // 3. check who the current user is
        compareUser(activeStudent);

        // 4. push new assignment into the array
        currentUser.assignments.push(assignmentOne);
        // console.log(currentUser.assignments[0]);


        
        // 5. update UI

        getGPA();

        // clear input fields
        document.getElementById('subject').value = '';
        document.getElementById('assignment').value = '';
        document.getElementById('score').value = '';

    }
    
 };

 // deletes data from UI and data structure
 function deleteRow() {

    let nodeList = document.getElementsByTagName('TR');

    // fixes bug where continuing to press the delete button removes the table header
    if (nodeList.length > 1) {
    let lastEntry = nodeList[nodeList.length -1];

    lastEntry.remove();

    // add function that will alse remove corresponding data from datastructure

    compareUser(activeStudent);

    // push new assignment into the array
    currentUser.assignments.pop();

    console.log('db record deleted');

    };

    getGPA();
 }

 function clearUI() {

    // get the element we want plus all the child elements
    let nodeList = document.getElementById('container').children;
    console.log(nodeList.length);

    for (let i = nodeList.length -1; i >= 0; i--) {
        nodeList[i].remove();
        console.log(i);
    };

 };


// create an IIFE function that dynamically adds new UI elements to the page on load

(function loadHtml(){

    let documentBody = document.getElementsByTagName("BODY")[0];
    documentBody.innerHTML = `
    
        <h1 style="background-color:black; color:white">.: Grade Book App :.</h1>
        <h2 style="margin: 5%;">To update grades, please add or select a student:</h2>
        <div id='profile'></div>
        <div style="margin: 5% 5%;">
            <p style="margin-bottom: 2%;">Add student</p>
            <input id= "first-name" placeholder="first name" type="text">
            <input id="last-name" placeholder="last name" type="text">
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
        <p style="margin: 5% 0 2% 5%">Delete Last Entry</p>
        <input style="margin: 0 0 2% 5%" type="submit" value="Delete" id="delete-row" onclick="return deleteRow()">
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
        <script src="test2.js"></script>
`;


}());

// on change select dropdown menu...

function selectStudent() {

    student = document.getElementById('select-student').value;

    if (student === 'select') {

        alert('Please select a student to edit grades');
        noStudentSelected = true;

        // update UI

        let heading = document.getElementsByTagName('H2')[0];
        heading.innerHTML = 'To update grades, please add or select a student:';
        let newDiv = document.getElementById('profile');
        newDiv.innerHTML = '';
        document.getElementById('average').style="display:none";

    } else {

        alert(`You selected ${student}!`);
        // alert(`You are currently editing: ${student}'s grades:`);
        activeStudent = student;
        noStudentSelected = false;
        compareUser(activeStudent);
        clearUI();
        printData();
        getGPA();

        let heading = document.getElementsByTagName('H2')[0];
        heading.innerHTML = `Student profile:`;

        let newDiv = document.getElementById('profile');
        
        newDiv.innerHTML = `
        <table style="width:50%; margin-left: 5%">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <td>${currentUser.first}</td>
                <td>${currentUser.last}</td>
                <td>${currentUser.userName}</td>
            </tbody>
        </table>
        `;

    };

};

function compareUser(active) {

    let split = activeStudent.split(' ');

    let first = split[0];
    let last = split[1];

let thisUser = generateUserName(first, last);
// console.log(thisUser);

    dataBase.students.forEach(function(currentValue, index){

        if (currentValue.userName === thisUser) {
            currentUser = dataBase.students[index];
            // console.log(currentUser);

        };  
    });

};
