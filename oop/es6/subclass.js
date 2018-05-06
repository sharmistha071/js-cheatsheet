class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }
    greeting(){
      return `hello there ${this.firstName} ${this.lastName}`;
    }

}

class Customer extends Person{
  constructor(firstName, lastName, membershipType){
    super(); //call Person(parent) class constructor
    this.membershipType = membershipType;
  }

  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('john', 'doe', 'silver');

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
