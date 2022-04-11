//converting data of one type to another is type conversion
//There are two types of type conversion in JavaScript.
// 1.Implicit Conversion - automatic type conversion
// 2.Explicit Conversion - manual type conversion

//Implicit Conversion to String
let result;
result='3' + 2;
console.log(result)//32

//Implicit Conversion to Number

result = '4' - '2'; 
console.log(result); // 2

//Boolean Conversion to Number
result = 4 + true;
console.log(result); //5

result = 4 + false;
console.log(result);//4

result = '4' - true;
console.log(result); // 3

//Explicitly conversion

// string to number
result = Number('324');
console.log(result); // 324

//number to string
esult = String(324);
console.log(result);  // "324"
