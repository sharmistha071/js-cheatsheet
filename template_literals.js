const name = 'john Doe';
const city = 'NY';
let url = 'www.facebook.com';
let html = '';
//  without template literals(ES5)
html = '<ul><li>'+name+'</li></ul>';
html = '<ul>'+
       '<li><a href="'+url+'/john">'+name+'</a></li>'+
       '</ul>';
console.log(html);
var elemDiv = document.createElement('div');
elemDiv.innerHTML = html;
console.log(elemDiv);
var body = document.getElementsByTagName('body');
body =  body[0];
console.log(body);
body.appendChild(elemDiv);

function returnHello(){
  return 'hello';
}
// with template literal/ string(ES6)
html = `
<ul>
  <li>item 1: ${name}</li>
  <li>item 2: ${city}</li>
  <li>item 3 ${2+2}</li>
  <li>${returnHello()}</li>
  <li>${city === 'NY' ? 'hello NY': 'not found'}</li>
</ul>
`;
console.log(html);
