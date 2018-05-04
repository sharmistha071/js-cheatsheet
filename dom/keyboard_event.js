let form = document.querySelector("#task-form");
let taskInput = document.querySelector('#task');
let heading = document.querySelector('h5');
let select = document.querySelector('select');


form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(e.type);

  //get input value
  console.log(taskInput.value);
  e.preventDefault();
}
taskInput.value = '';
//taskInput.addEventListener('keydown', runKeyDown);
//taskInput.addEventListener('keyup', runKeyDown);
taskInput.addEventListener('keypress', runKeyDown);
function runKeyDown(e){

  console.log(e.target.value);
  heading.innerText = e.target.value;
}

select.addEventListener('change', changeEvent);

function changeEvent(e){
  console.log(e.target);
  console.log(e.target.value);
}
