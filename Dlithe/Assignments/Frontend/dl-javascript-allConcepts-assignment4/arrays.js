// An array is an object that can store multiple values at once.

const itemTypes = ['Mobiles', 'TV', 'Computers','Kitchen appliances'];
console.log(itemTypes)

//create an array using two ways:

//Using array literal
const array1=["mobiles","tv"];
console.log(array1)

//using new keyword
const array2=new Array("Computers","Cameras");
console.log(array2)

//Access Elements of an Array
console.log("arrays2 is displayed with its first element",[array2[0]])

//Add an element to an array
// add an element at the end
array2.push('Accessories'); //push() or unshift() method used to add an element into the array at the end of the array
console.log(array2)

array2[2]="Mobiles";//this will add the new element 'Mobiles' at the 2nd index
console.log(array2)

let itemName=array2.pop();//removes an element from the end of an array
console.log(itemName)//Mobiles removed
console.log(array2)

//array methods
let employeeList = ['Priya', 'Vagmi', 'Amrutha']
let employeeDept = ['IT'];

// sorting elements in the alphabetical order
employeeList.sort();
console.log(employeeList); // [ 'Amrutha', 'Priya', 'Vagmi', 'IT' ]

//finding the index position of string
const position = employeeList.indexOf('Vagmi');
console.log(position); // 2

// slicing the array elements
const newEmployeeList = employeeList.slice(1);
console.log(newEmployeeList); // [ 'Priya', 'Vagmi' ]

// concatenating two arrays
const ConcatList = employeeList.concat(employeeDept);
console.log(ConcatList); // [ 'Amrutha', 'Priya', 'Vagmi', 'IT' ]