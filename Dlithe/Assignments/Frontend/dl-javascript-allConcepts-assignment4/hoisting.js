//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration

//In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

//variable hositing

itemId=10;
console.log("Variable hositing is used",itemId);
var itemId;//variable hoisting


//function hoisting:A function can be called before declaring it.

greet();
function greet(){
    console.log("Function hoisting is running");
}