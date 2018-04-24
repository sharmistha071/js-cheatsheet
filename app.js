//alert('hello world');
console.log('hello world');
console.table({a:1, b:2});
console.error('error');
console.warn('warning');

/*...........................variable declaration ..............*/
// var
var name = 'john doe';
var firstName = 'Jhon Doe'; // Camel calse method recommended

// let
let lastName = 'fff';
console.log(lastName);
lastName = 'eee';
console.log(lastName);

// const
// const cant be redeclared only can change value in object and array
const email = 'abc@gmail.com';
console.log(email);
// can not reassign
//email = 'xy@gmail.com'; //throws error

const obj = {
  name: 'xyz',
  age: 32
}
obj.name = 'abc';
console.log(obj.name);

const arr = [1,2,3,4];
arr.push(5);
console.log(arr);
/*...........................End variable declaration ........................*/


/*..............................Data types ..............*/
// Primitives type
//number
const number = 4;
//string
const str = 'dknjf';
//boolean
const bool = true;
//undefined
var un;
//null
var random = null;

// Reference type

//array
var arr = [1,2,3,4,5];
//object
var obj1 = {
  name: 'xyz',
  age: 24
}
// date
var today = new Date();

/*.............................end Data types ...................*/

/*.............................Type Conversion...................*/
// number -> string
var str = String(5);
var str1 = (5).toString();
var str = (10.00).toFixed(); // '10'
var str = (10).toFixed(2);  //'10.00'

// string -> number
var num = Number('5');
var num = parseInt('10.00'); //10
var num = parseFloat('10'); //10.00
var num = (10).toFixed();

/*............................Type conversion end .....................*/


/*..........................Math Object ........................*/

let val = Math.PI;
console.log(val);
val = Math.round(2.8); //3
val = Math.round(2.4); //2
val = Math.ceil(2.4); //3
val = Math.floor(2.4); //2
val = Math.sqrt(64);
val = Math.min(2,10,33); //2
val = Math.max(2,10,80); //80

// random number generate

val = Math.random(); // returns random decimal
// to get random whole number
val = Math.random() * 20; // returns whole number 0-19
