let person = {
  first_name: 'xyz',
  last_name: 'abc',
  age: 25,
  hobies: ['music', 'travelling'],
  address: {
    city: 'NY',
    street: 500
  },
  getBirthDay: function(){
    return 2018 - this.age;
  }
}

let val = person;
val = person.name;
val = person['first_name']; //not recommended
val = person.age;
val = person.hobies[1];
val = person.address.city;
val = person.getBirthDay();

console.log(val);

let people = [
  {name: 'abc', age: 20},
  {name: 'john', age: 50}
]
for(let i = 0; i < people.length; i++){
  console.log(people[i]);
}
