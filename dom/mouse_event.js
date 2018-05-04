let clearBtn = document.querySelector('.clear-tasks');
let card = document.querySelector('.card');
let heading = document.querySelector('h5');



//clearBtn.addEventListener('click', runEvent);  //click event
//clearBtn.addEventListener('dblclick', runEvent);  //double click

//clearBtn.addEventListener('mousedown', runEvent);
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);


// Event Handlers
function runEvent(e){
  console.log(`event Type: ${e.type}`);
  // console.log(e.preventDefault());
}
