"use strict";

// * INTERACTION (ALERT, PROMPT, CONFIRM)

// alert(`Click OK`);

// let userName = prompt(`What is ur name ? `, "Boss");
// alert("Welcome " + userName);

// let isAdmin = confirm("Are you the Admin");
// ? Returns true or false based on user selection
// alert(isAdmin);

// TASKS

// let yourName = prompt(`What is your Name ? `, "Ghost");
// alert(yourName);


//  * TYPE CONVERSIONS

let testingValue = true;
console.log(typeof testingValue); //boolean
// * String Conversion

let testingNewValue = String(testingValue);
console.log(typeof testingNewValue); //string

// type conv in string numbers
// ? +  considers them as string and uses for concatenation 
// ? - * / converts them to numbers and do operation
console.log("2" + "2");
console.log("2" - "2");
console.log("2" * "2");
console.log("2" / "2");

let str = "213"
console.log(typeof str);

// * Numeric conversion

console.log(typeof Number(str));

// * Boolean conversion

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean("0"));
console.log(Boolean(" ")); //Spaces are true

// * BASIC MATHS OPERATIONS

// unary, binary

let num1 = 1;
num1 = -num1; //Operator here is unary involve one operand
console.log(num1); 

let $n1 = 4, $n2 = 2;
console.log($n1 - $n2); //Operator here is binary involve two operand

let $num1 = 10, $num2 = 5;
const $rem = $num1 % $num2;
console.log("$rem", $rem);

const $pow = $num1 ** $num2;
console.log("$pow", $pow);

const $sqrt = $num1 ** (1/2);
console.log("$sqrt", $sqrt);

// String conc

let sConc = "My" + "name";
console.log("sConc", sConc);

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

console.log(Number(a)+ Number(b));

