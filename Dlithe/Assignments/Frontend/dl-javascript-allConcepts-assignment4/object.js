//JavaScript object is a non-primitive data-type that allows to store multiple collections of data.

// object
const employee = {
    firstName: 'Priya',
    lastname:'Kadolkar'
};

//accessing object properties
//1. Using dot notation :objectName.key

console.log(employee.firstName)

//using bracket notation
console.log(employee['lastname'])

// nested object
const employee1 = {
    firstName: 'Priya',
    lastname:'Kadolkar',
    langs_known: {
        python: 'no',
        java: 'yes'
    }
}

console.log(employee1.langs_known)//accessing property of employee1 object
console.log(employee1.langs_known.java)// accessing property of langs_known object

const employee2 = {
    firstName: 'Priya',
    lastname:'Kadolkar',
    greet: function hello()//using function as a value
    {
        console.log("hi greet function")
    }
}
employee2.greet();
