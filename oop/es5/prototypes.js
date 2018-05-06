// each object has a prototypes
// prototypes itsef is an object
// all object inherits method and properties from its prototypes
// for more https://hackernoon.com/prototypes-in-javascript-5bba2990e04b

//Object.prototype
//Person.prototype


// Person constructor

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  // this.getFullName = function(){
  //   return this.firstName + ' ' + this.lastName;
  // }
}
// get getFullName
Person.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName;
}
// Set lastName
Person.prototype.changeLastName = function(lastName){
  this.lastName = lastName;
}

// instantiate two object brad and john
let brad  = new Person('Brad', 'Jackson');
let john  = new Person('John', 'Peterson');

console.log(brad);
console.log(john);



// each person has its own fiirstName, lastName property but getFullName is same for all Person
// so this could be put in Person prototype
console.log(brad.getFullName());
brad.changeLastName('Jonson');
console.log(brad.getFullName());
