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


// isNaN() //Not a number
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
// let userName = ['Anil','Raghav','Tarun','Mahesh','Hemant'];
// console.log(userName);
// // console.log(userName[5]);

// // userName[0] = "Abhijit";
// // console.log(userName);

// // userName.push('Abhijit');
// // console.log(userName);
// // console.log(userName[5]);


// let lastUserName = userName.pop();
// console.log(lastUserName);


// // console.log(userName.shift());

// userName.unshift('Aman');
// console.log(userName);


// let age = [42,28,23,21,67];

// // age[2]; //23
// // age[3] = 58;

// age[5] = 61;
// console.log(age[5]);
// console.log(age);

// let remainingAge = age.slice(1,3); //returns a copy of a portiono of an array
// console.log(remainingAge);

// let anotherAge = [60,12,10,23];

// let allAges = remainingAge.concat(anotherAge);
// console.log(allAges);

// console.log(age.sort());
// console.log(age.reverse());

// // Objects in JavaScript

// // 0:1,1:4,2:6,3:2,4:5

// let person = {
//     name: "Deepak",
//     userName: "deepak01",
//     email: "deepak@gmail.com",
//     age: 42,
//     mobile: 982983791,
//     greet: function () {
//         console.log(`Hi everyone!, This is ${this.name}` )
//     }
// }

// person.greet();

// console.log(person.name); //dot notation
// console.log(person['email']); //bracket notation


// person.age = 32;
// console.log(person.age);
// person['name'] = "Sachin";
// console.log(person.name);


// person.gender = "Male";
// console.log(person)

// person.hello = function () {
//     console.log("Hello");
// }

// person.hello();


// delete person.gender;

// console.log(person)



let car = {
    brand: "Toyota",
    model: "Camry",
    Owner: {
        name: "Dharmesh",
        aadhar: 74829293738291,
        age: 88,
        mobile: 929321134
    }
};

// console.log(car.Owner.aadhar);

// console.log(Object.keys(car['Owner']));
// console.log(Object.values(car['Owner']));
// console.log(Object.entries(car));
// console.log(car.hasOwnProperty('Owner'));
// console.log(car['Owner'].hasOwnProperty('email'));

// Control Flow Statements in JS

// let voter = {
//     name: "Pranay",
//     age: 17,
//     unique_voter_id: 667291912,
//     phone: 7829030201
// }

// let personAge = voter.age;

// if (personAge >= 18){
//     console.log(`${voter.name} is eligible to vote`);
// }
// else{
//     console.log(`${voter.name} is not eligible to vote`);
// }


// Switch Statements

// let fruits = "Pineapple";

// switch (fruits) {
//     case "apple":
//         console.log("Hi I am Apple");
//         break;
//     case "Orange":
//         console.log("Hi I am Orange");
//         break;
//     case "Pineapple":
//         console.log("Hi Pineapple");
//         break;
//     default:
//         console.log("Invalid Input");
// }



// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log("10")


// for loop

// let learners = ['Hemant', 'Arya','Soni', 'Mayank', 'Abhishek','Sibasis'];

// for (let i=0; i<learners.length; i++)
// {
//     console.log(learners[i]);
// }

// for(let a = 1; a<=100; a++)
// {
//     console.log(a);
// }

// let i =0;

// while (i < 10)
// {
//     console.log(i);
//     i++;
// }


// let i = 1
// do {
    // console.log(i);
// i++;
// }while (i<6)


let voter = {
    name: "Pranay",
    age: 17,
    unique_voter_id: 667291912,
    phone: 7829030201
}

// for (let key in voter) {
    //     console.log(key + ": "+ voter[key])
    // }

    
    
// let learners = ['Hemant','Arya','Soni', 'Mayank', 'Abhishek','Sibasis'];
// for (let i of learners)
// {
//     console.log(i);
// }

// learners.forEach(function(learner, index){
//     console.log(learner, index);
// });

let numbers = [1,2,3,4,5,6];
numbers.forEach(function(value,index, array){
    array[index] = value * 4;
})

console.log(numbers);


const array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
array2d.forEach(function(row){
    row.forEach(function(value){
        console.log(value);
    })
})

// function sum(a,b){
//     let result = a + b;
//     return result;
// }
function sub(a,b){
    let result = a - b;
    return result;
}

// let funResult = sum(100,4242);
// let funResult = sub(100,4242);
// console.log(funResult);


// const sum = (a,b) => {
//     return a+b
// }

// let funResult = sum(100,4242);
// console.log(funResult)


// const square = (num) => num*num;

// console.log(square(4));

let age  = 17

if(age >=18)
{
    console.log("Good to go");
}
else{
    console.log("Not eligible");
}

let resultHere =  (age >= 18) ? "You are good to go" :  "Not eligible";


console.log(resultHere);



































 
























































