const cars = ['ford', 'Chevy', 'Honda', 'Toyota'];

// for
for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

//forEach
cars.forEach(function(car, index){ // Higly recommended incase of iterating over array
  console.log(index + ':' + car); //es5
  console.log(`${index}: ${car}`); //es6
});

//map
const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Jack'},
  {id:3, name: 'Joye'},
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// for in loop
const list = {
  name: 'x',
  age: 25,
  class: 10
}
for(let i in list){
  console.log(`${i}: ${list[i]}`);
}
