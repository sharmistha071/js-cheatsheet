/*.................function declaration................*/

function greet(firstName, lastName){
  return 'hello' + firstName + ' ' + lastName;
}
console.log(greet('John', 'Doe'));

// ES5 version
function greetES5(firstName, lastName){
  if(typeof firstName == 'undefined'){firstName = 'John'}
  if(typeof lastName == 'undefined'){lastName = 'Doe'}
  return 'hello' + ' '+firstName + ' ' + lastName;
}
console.log(greetES5());

// ES6 version
function greetES6(firstName = 'John', lastName = 'Doe'){ //defaults defines here
  return 'hello' + ' '+firstName + ' ' + lastName;
}
console.log(greetES6());
console.log(greetES6('Steve', 'Smith'));

/*.................function declaration END................*/

/*.................function Expression................*/

const square = function(x = 3){
  return x*x;
};
console.log(square(8)); //64
console.log(square());  //9

/*.................function Expression End................*/

/*.................IIFE................*/
(function(name){
  console.log('IIFE run ..'+ name);
})('Howdy');
/*.................IIFE End................*/

/*................Property Method ...............*/
const todo = {
  add: function(){
    console.log('add todo..');
  },
  edit: function(id){
    console.log('add todo..'+ id);
  },
}
todo.add();
todo.edit(22);
/*................Property Method ...............*/
