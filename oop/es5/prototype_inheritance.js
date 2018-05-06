// One object type inherits from other Object

// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

let person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phoneNumber, membershipType){
  Person.call(this,firstName, lastName); //call func allows us to call another function from somewhere elese from current context
  this.phoneNumber = phoneNumber;
  this.membershipType = membershipType;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

let customer1 = new Customer('Tom', 'Smith', '123456', 'Silver');

console.log(customer1);
console.log(customer1.greeting());
