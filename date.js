const today = new Date();
let birthday = new Date('9-10-1993 11:25:00');
birthday = new Date('9/10/1993');
console.log(typeof today); //object
let val = today;
val = today.getMonth(); // 0 based april-3
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getTime();
birthday.setMonth(2);
console.log(val);
console.log(birthday);

let day;
switch (today.getDay()) {
  case 0:
    day = 'Sun'
    break;
  case 1:
    day = 'Mon'
    break;
  case 2:
    day = 'Tues'
    break;
  case 3:
    day = 'Wed'
    break;
  case 4:
    day = 'Thurs'
    break;
  default:

}
console.log('today is '+day);
