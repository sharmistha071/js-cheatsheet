// object literal
let obj = {
  name: 'brad',
  age: 30
}
console.log(obj);

// this referes current instance of the object
// If you want to create multiple instances of certain type of object then constructor function can be handy
// create constructor method (Person constructor)
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
  console.log(this);    // current instance (1.brad, 2.john)
}

// instantiate object
let brad  = new Person('Brad', 'Jackson');
let john  = new Person('John', 'Peterson');
//let john  = new Person('John', 20);
console.log('Full name is:  '+brad.getFullName());
console.log(brad);
// console.log(john);
