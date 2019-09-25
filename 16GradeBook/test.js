console.log('file linked');

function selectStudent() {

    document.write('TEST COMPLETE');
};

function addRow() {

    event.preventDefault();

    let subject = document.getElementById('subject').value;
    let assignment = document.getElementById('assignment').value;
    let score = document.getElementById('score').value;
    let table = document.getElementById('container');
    table.innerHTML = `
                         <td>${subject}</td>
                         <td>${assignment}</td>
                         <td>${score}</td>
                     `;
                     console.log('add row ran');
 };