let arr = [1,2,4,5];
let arr2 = new Array(2,3,4,5,6);
let arr3 = ['x',null, 4,5, true];
console.log(arr3);

//array length

var len = arr3.length;
console.log(len);

//check if is array
let a = Array.isArray(arr);

// retrieve single value using index
let value = arr[2];
console.log(value);

arr[2] = 100;
console.log(arr);

/*........................Mutating Array................*/
// Add on to end
arr.push(200);
console.log(arr);
// Add on to front
arr.unshift(300);
console.log(arr);
// Take off from end
arr.pop();
console.log(arr);
// Take off from front
arr.shift();
console.log(arr);

//reverse the array
let revArr2 = arr2.reverse();
console.log(revArr2);

//concate Array
let carr = arr.concat(revArr2);
console.log('concatenate: ' +carr);

//sort
let srr1 = [100,2,3,50,6];
let srr = srr1.sort();
console.log('srr: '+srr);  //100,2,3,50,6 -> sort using first number

//using compare function
srr = srr1.sort(function(x,y){
  return x-y;
});
console.log('srr: '+srr);
////using compare function
srr = srr1.sort(function(x,y){
  return y-x;
});
console.log('rev srr: '+srr);


//find
let dummy_arr = [3,4,89,49];
function  under50(num){
  return num < 50;
}

let find_num = dummy_arr.find(under50); //return first number which is under 50
console.log('find_num: ' +find_num);
