let clearBtn = document.querySelector('.clear-tasks');

// addEventListener takes two parameters, one event that are looking for which is click, another an anoynymous function like callback function

clearBtn.addEventListener('click', function(e){  // e is event object
  console.log('btn clicked');
  e.preventDefault(); //prevent default behavior like redirect to somewhere else
});

clearBtn.addEventListener('click', onClicked);

function onClicked(e){
  console.log('clicked');
  e.preventDefault();
  let val = e;
  val = e.target;
  console.log(val);
}
