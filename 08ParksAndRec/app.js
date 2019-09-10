
// PARKS & STREETS CHALLENGE

/*

You are in charge of a small towns parks and streets. There are two elements you must mange:

1. Parks (3)
2. Streets (4)

There are 3 parks total and 4 streets and they all have both a name and a build year.

Create a data structure and program that will display the following information about your department:

1. Tree density of each park (number of trees/park area)

2. Average age of each towns park (sum of all the parks / how many parks there are)

3. The name of the park that has more than 1000 trees

4. Total length of the towns streets

5. Average length of the towns streets

* The point of this challenge is to use features from ES6 such as classes, subclasses, template strings, default parameters, maps, arrow functions, destructing etc.

///////////////////////////////////////////////////////////////////////////////////

What we will need:

data structure to hold the parks
data structure to hold the streets

Main Class (TownElement)
- name
- build year
- method for calculating average street length
- method for calculating average age
- method for calculating total length

Sub Class
constructor (Park)
- name (inherited)
- build year (inherited)
- average age method (inherited)
- park area size
- number of trees

Sub Class
constructor (Street)
- name (inherited)
- build year (inherited)
- average length method (inherited)
- length

*/

// main class

function TownElement(type, name, buildYear) {
    this.type = type;
    this.name = name;
    this.buildYear = buildYear;

    this.totalLength = function() {
        // add total street lengths
    }
    
    this.avrLength = function() {
        // total street lengths
        // divide by total number of streets
    }

    this.avrAge = function() {
        // total ages of parks
        // divide by total number parks
    }

    // these are specific to certain object types...


    // parks
    // this.totalSize = totalSize;
    // this.totalTrees = totalTrees;

    //streets
    // this.totalLength = totalLength;



}

// create a few test objects

let parkA = new TownElement('Park', 'Treeful Park', 2017);

TownElement.prototype.size = '50 SQ Miles';

// let parkB = new Park(13, 34);
// let parkC = new Park(56, 63);

// let allParks = [parkA, parkB, parkC];



