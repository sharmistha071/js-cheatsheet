// dom selector

// vanilla js 2 types of selector : single, multiple

// single element selector: grab one single element

// multiple element selector: grabs all the element associated with selecor

// document.getElementById();
// document.getElementById('task-title');

// Get things from element

document.getElementById('task-title').id; //return id
document.getElementById('task-title').class; //return class associated with id

const taskTitle= document.getElementById('task-title');

//Change Style

taskTitle.style.background = '#333';

taskTitle.style.padding = '5px';
//document.getElementById('task-list').style.display = 'none'; // togolling display


// Change Content
taskTitle.textContent = 'task list';
taskTitle.innerText = 'Change title';
taskTitle.innerHTML = '<span style="color:red;">Task List</span>';  //inner html to inject html


// .............document.querySelector..............//

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
console.log(document.querySelector('li'));  // fetch single element, the first one

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';  //select last class, psedui class
document.querySelector('li:nth-child(3)').textContent = 'task 3';  //select nth child
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // select first odd

// ..................document.getElementsByClassName.................//

const items = document.getElementsByClassName('collection-item');

console.log(items);
items[0].style.color = 'black';
items[1].textContent = 'yellow';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// ...............documents.getElementsByTagName  -> return htmlCollection.......................//

let lis = document.getElementsByTagName('li');
console.log(lis);

// convert html colllection into array

// lis = Array.from(lis);
// lis.reverse();
//
// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// .........querySelectorAll -> return nodeList .......//
// nodeList allows array methods like forEach without converting into array

const qItems = document.querySelectorAll('ul.collection li.collection-item');
console.log('querySelectorAll');
console.log(qItems);
qItems.forEach(function(qitem){
  console.log(qItems);
});
const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(item){
  item.style.background = '#eee';
});


/*...........................create element................................*/

const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-id';
li.innerHTML = 'new li';
console.log(li);
document.querySelector('ul.collection').appendChild(li);


/*..............replace element......................*/
let newH2 = document.createElement('h2');
console.log(newH2);
newH2.appendChild(document.createTextNode('Task lists'));

let oldHeading = document.querySelector('#task-title');
console.log(oldHeading);
//parent
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newH2, oldHeading);


/*...............Remove element......................*/
let list = document.querySelector('ul');
lis[0].remove();

console.log(list);

// remove chhild elemet

list.removeChild(lis[3]);


// Attribute
//getAttribute('href');
//setAttribute('href', 'www.facebook.com');
