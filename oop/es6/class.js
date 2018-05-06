class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Any method added in class will be in prototype
  greeting(){
    return `hello there ${this.firstName} ${this.lastName}`;
  }
  //Static method is one which can be used without instantiate object
  static addNumbers(a, b){
    return a + b;
  }
}

let personOne = new Person('John', 'Doe');
console.log(personOne);
console.log(personOne.greeting());
console.log(Person.addNumbers(4, 5));
