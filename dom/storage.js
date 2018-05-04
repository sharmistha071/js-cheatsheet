// set local storage Item
//localStorage.setItem('name', 'John');

//set sesiion storage Item
// sessionStorage.setItem('name', 'Sjon');

//remove from local localStorage
localStorage.removeItem('name');

// get from localStorage
localStorage.getItem('name');

document.querySelector('form').addEventListener('submit', function(e){
  let task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  e.preventDefault();
});

let tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(typeof(tasks));
tasks.forEach(function(task){
  console.log(task);
});
console.log(tasks);
