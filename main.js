// console.log("Connected");
// console.error("This is an error");

// console.log(10+20);

// // Variables are containers which can store some value.
// // These values can be anything like cost of an item, name or age, username, password.

// // hoisting is moving the varibale declaration to the top of the program right before its execution, and it is done by the interpretter.


// console.log(isLoggedIn);

// isLoggedIn = "true";

// console.log(isLoggedIn);

// var x=10;
// var y=90;

// var userName;
// userName = "Krish"; 
// // There are multiple ways in which we can declare a variable in js.

// var firstName;
// firstName = "Navin"
// console.log(firstName);

// var z = x+firstName;

// console.log(z)

// // Types of Variable

// // 1. Var   2. let    3. const

// // Scope:  function scope, block scope and global scope

// // What is a scope?

// // scope is the accessibility of a variable, function and object at various parts of code.

// // Var is scoped yo nearest function block. If it is declared in the global scope it will have global if declared in function it will locally scoped.
// // variables declared using var keyword are hoisted by the browser.
// // You can reassign a value to a variable declared using var keyword.

// var image = "profile.png";
// image = "demo.png";
// var image = "ramesh.png";
// console.log("image: "+image);
// var id = undefined;
// // id = 20;
// console.log("ID: ",id);

// id = 24;
// console.log(x+50)
// console.log("ID: ",id);

// function demo() {
//     var tempId = 40; // locally scoped
//     console.log("Temp ID: "+tempId);
// }

// demo();

// console.log(tempId);


// difference between undefined and not defined
// var email;
// var pass; // undefined as it is declared but not assigned any value
// console.log(pass);
// console.log(email); // error: variable is never declared. not defined means the variable you are trying to access doesn't exist in the current scope.

// How you should name your variable

// Accepted variable names
// var isLoggedIn; //camelCase
// var $age; //starting with $ sign is also accepted
// var _wind; //it is also accepted
// var ageGreaterThan62;


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

// let anyVariableName = "Yoga";
// anyVariableName = "Cricket";

// {
//     let dummy;
//     dummy = "Vignesh";
//     console.log(dummy);
//     console.log(anyVariableName);
// }

// console.log("Second:"+dummy);
// console.log(anyVariableName);



// amount = 20000;
// console.log(amount)

// let amount; //declared the variable
// amount = 10000;


// const

// const myUserName = "Ankit";
// const PI = 3.14;

// console.log(myUserName, PI);

// const PI = 87.21; //Re-declaration is not allowed with const variables.
// PI = 87.283; //Re-assignment is not allowed with const variables.

// Primitive Data Types

// Number
// String
// Boolean
// Undefined
// null


// int x; 

// let contact = 75.7;
// console.log(typeof contact); //number


// let uName = 'i';
// console.log(typeof uName) //string

// console.log(typeof isLoggedIn)
// isLoggedIn = false;
// console.log(typeof isLoggedIn)


// let o;
// console.log(typeof o); //undefined


// Reference Values

// They are objects which store references. They are mutable.





// address= "HSR, Bangalore"
// let yourAddress = address;

// Objects

// let obj = {
//     key: value,
//     key2: value2
// }

// Arrays
// let courses = ['aws', 'fullstack', 'cyber'];

// Functions

// function functionName() {
//     console.log("Welcome to JS");
// }

// functionName();

// let today = new Date();
// console.log(today);


// Dates

// Expressions and Operators

// Arithmetic Expression

// let sum = 5+10;
// console.log(sum);

// let product = 5*10;
// console.log(product)

// Relational Expression

// let a = 10;
// let b = 20;

// let isGreater = b > a; //true;
// console.log(isGreater);


// Logical Operators

// let mathMarks = 75;
// let scienceMarks = 85;
// let passingMarks = 80;

// let isScienceMarksGreater =  scienceMarks > passingMarks; //true;
// let isMathMarksGreater = mathMarks > passingMarks; //false

// let result = isMathMarksGreater && isScienceMarksGreater;

// console.log(result);

// logical AND


// It returns true if both the operands are true. 

let a = false;
let b = true;
// console.log(a&&b);

// console.log(!a&&b);

// logical OR

// It returns true if at least one of the operand is true.

// console.log(a || b);

// Logical NOT (!)

// console.log(!a);

// It reverse the boolean value of the operand.

let x = 10;
// let y = 20;

// let z = x + y;

// x,y are operands and + is operator.


x = 20;

x = x + 5;
// console.log(x);

x += 5; // x = x + 5
x -=3;
x /=3
// console.log(x);


// let num1 = new Number(43); //It will create a Number Object


// console.log(typeof num1);
// console.log(typeof x);

let number1 = 2.957738;

// toString Method

// console.log(number1.toString()); // Normal String
// console.log(number1.toString(2)); // To binary
// console.log(number1.toString(16)); // To hexdecimal

// toFixed()
// console.log(number1.toFixed(2));


// ṭoPrecision()
// console.log(number1.toPrecision(3));


// isNaN()
// console.log(isNaN(number1)); //false


// Math Objects

// Math.random(); It generates number between 0 and 1;

// console.log(Math.random()); 

// Math.floor()

// console.log(Math.floor(45.8));


// Math.ceil()

// console.log(Math.ceil(48.15))

// Math.round()
// console.log(Math.round(45.45));

// Math.max() and Math.min()

// console.log(Math.max(891,7382,37,8738)); // will give the maximum value
// console.log(Math.min(891,7382,37,8738)); // will give the minimum value

// Math.sqrt()

let nu = 16;
// console.log(Math.sqrt(nu));


// Math.pow()

// console.log(Math.pow(2,2));

// Math.abs()

// console.log(Math.abs(-89));
// console.log(Math.round(1.4));

let today = new Date();

// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());

// What are string literals in JS
// "" or '' or ``

let myName = "Adhirath Mohite";
// let message = `Hi! This is ${myName}`;
// console.log(message);

// String Object

let yourStrObj = new String("Hi Welcome to the session");
// console.log(typeof yourStrObj)
// console.log(typeof myName);

// charAt(index); It returns a character at the specified index.

let data = "Hello world";

// console.log(data.charAt(4)); //o

// concat()

// let data2 = "world";
// let data3 = "2"

// hello world

// console.log(data.concat(data2,data3,"type"));

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// substring(start_Index, end_Index) // End_index is not included

// console.log(data.substring(6,11).toUpperCase());

// console.log(data.indexOf("world"));

    //    Krishnan        
    
// let myFirstName = "       Rahul Kumar    ";
// console.log(myFirstName.trim());

// let intro = "Hi my name is raunak.";
// let ques = "How are you?";

// let myNameArr = intro.split(" ")
// console.log(myNameArr);

// console.log(intro+ " " + ques + " " + "Hi Guys");

// let anum = "krish";
// console.log(1+1);

// Arrays in JS

// let usersName = "Raghav, Anil, Tarun, Mahesh, Hemant";
let userName = ['Anil','Raghav','Tarun','Mahesh','Hemant'];
console.log(userName);
// console.log(userName[5]);

// userName[0] = "Abhijit";
// console.log(userName);

// userName.push('Abhijit');
// console.log(userName);
// console.log(userName[5]);


let lastUserName = userName.pop();
console.log(lastUserName);


// console.log(userName.shift());

userName.unshift('Aman');
console.log(userName);
































 
























































