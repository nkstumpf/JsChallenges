/* 

Write an Object constructor for people that includes properties for firstName, lastName, gender, and age. Using the inheritance chain, write out two prototype methods: one that prints out “My name is [firstName] [lastName] and I am a(n) [age]-year old [gender].” and one that prints out whether or not they're eligible for a senior citizen discount (over the age of 65).

*/

// person constructor here

var Person = function(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
};

// introduction function here

Person.prototype.introduceYourself = function() {
  document.write('My name is ' + this.firstName + ' ' + this.lastName + ' and I am a ' + this.age + '-year old ' + this.gender + '.');
};

// discount eligible function here

Person.prototype.isOver65 = function() {
  if (this.age >= 65) {
    document.write('Congrats you are eligible for the senior discount!');
  } else {
    document.write('Sorry kiddo- You must be 65 or older to recieve the senior discount.');
  }
};

// test subjects

var sunny = new Person('Sunny', 'Young', 'Female', 19);
var mildred = new Person('Mildred', 'Dirt', 'Female', 89);
var chelsea = new Person('Chelsea', 'Witiakstumpf', 'female', 31);