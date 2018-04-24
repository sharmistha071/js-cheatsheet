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

var revArr2 = arr2.reverse();
