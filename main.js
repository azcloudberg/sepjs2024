console.log("Connected");
console.error("This is an error");

console.log(10+20);

// Variables are containers which can store some value.
// These values can be anything like cost of an item, name or age, username, password.

// hoisting is moving the varibale declaration to the top of the program right before its execution, and it is done by the interpretter.


console.log(isLoggedIn);

isLoggedIn = "true";

console.log(isLoggedIn);

var x=10;
var y=90;

var userName;
userName = "Krish"; 
// There are multiple ways in which we can declare a variable in js.

var firstName;
firstName = "Navin"
console.log(firstName);

var z = x+firstName;

console.log(z)

// Types of Variable

// 1. Var   2. let    3. const

// Scope:  function scope, block scope and global scope

// What is a scope?

// scope is the accessibility of a variable, function and object at various parts of code.

// Var is scoped yo nearest function block. If it is declared in the global scope it will have global if declared in function it will locally scoped.
// variables declared using var keyword are hoisted by the browser.
// You can reassign a value to a variable declared using var keyword.

var image = "profile.png";
image = "demo.png";
var image = "ramesh.png";
console.log("image: "+image);
var id = undefined;
// id = 20;
console.log("ID: ",id);

id = 24;
console.log(x+50)
console.log("ID: ",id);

function demo() {
    var tempId = 40; // locally scoped
    console.log("Temp ID: "+tempId);
}

// demo();

// console.log(tempId);


// difference between undefined and not defined
// var email;
var pass; // undefined as it is declared but not assigned any value
// console.log(pass);
// console.log(email); // error: variable is never declared. not defined means the variable you are trying to access doesn't exist in the current scope.

// How you should name your variable

// Accepted variable names
var isLoggedIn; //camelCase
var $age; //starting with $ sign is also accepted
var _wind; //it is also accepted
var ageGreaterThan62;


// var function; //do not use any reserved keywords as variable names as it is not allowed.
// var 62AgePeople;
// var user-name;
// var user_name; never use it, not a good practice.



// let
// let itemCount;
// console.log(itemCount);
// not defined
// undefined
// 20
// 40

// let itemCount;
// itemCount = 10;
// itemCount = 40;
// console.log("This is a variable declared using let keyword:" +itemCount)
// re-declaration is not allowed but re-assignment of variable is allowed.

let anyVariableName = "Yoga";
anyVariableName = "Cricket";

{
    let dummy;
    dummy = "Vignesh";
    console.log(dummy);
    console.log(anyVariableName);
}

// console.log("Second:"+dummy);
// console.log(anyVariableName);



// amount = 20000;
// console.log(amount)

let amount; //declared the variable
amount = 10000;


// const

const myUserName = "Ankit";
const PI = 3.14;

console.log(myUserName, PI);

// const PI = 87.21; //Re-declaration is not allowed with const variables.
// PI = 87.283; //Re-assignment is not allowed with const variables.

// Primitive Data Types

// Number
// String
// Boolean
// Undefined
// null


// int x; 

let contact = 75.7;
console.log(typeof contact); //number


let uName = 'i';
console.log(typeof uName) //string

console.log(typeof isLoggedIn)
isLoggedIn = false;
console.log(typeof isLoggedIn)
let o;
console.log(typeof o)

 
























































