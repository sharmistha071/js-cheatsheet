var firstName = 'John';
var lastName = 'Doe'

var fullName = firstName + ' ' + lastName;

console.log(fullName);

// escape character
var str = "It's me";
var str = 'It\'s me';

//append
var str = 'hello';
str += ' world';
console.log(str)

//length property

var len = str.length;
console.log(len);

//concat
str = str.concat(' ', 'js');
console.log(str);

// Case change

str = str.toUpperCase();
console.log(str);
str = str.toLowerCase();
console.log(str);

// find index of a char
var index = str.indexOf('world');
console.log(index);

// find char of an index
var char = str.charAt('2');
console.log(char);

// get dynamically last char of a str
var lchar = str.charAt(str.length - 1);
console.log(lchar);

//substr

str = str.substring(1,7);
console.log(str);

str = str.slice(1,7);
console.log(str);

// split

str = 'egg, milk, soda, chips';
str = str.split(',');
console.log(str);

//replace

str = str.replace('js', 'javascript');
console.log(str);
