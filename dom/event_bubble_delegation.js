// when an event happens to a particuar element in the dom it bubbles up to its parent
//child->parent

// event delegation : parent -> child

/**********8Event Bubbling****************/

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });
//
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });
//
// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });


/**********8Event Delegetaion****************/
// let delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);


document.body.addEventListener('click', deleteItem);
function deleteItem(e){

  // if(e.target.parentElement.className === 'delete-item secondary-content'){  //wont work if class name doesnt  exactly matched
  //   console.log('delete item');
  //   console.log(e.target);
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    console.log(e.target);
  }
};
