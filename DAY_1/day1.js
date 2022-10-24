"use strict";

//* PRIMITIVES

//Enables the code to work in modern way
// Must be enabled if it is only at top

// alert("I'm JavaScript");

// Linebreaks are implcit semicolons by Js

// Leaving semicolon after a statement is a good practice

// alert("New alert");

// This is a single line comment

/* 
  This
  is
  a
  multiline
  comment
*/

//* VARIABLES

let newMsg = "Hello , I'm a msg";
newMsg = "I'm a modified msg";
let myName = "Akash";
let age = "19";

console.log(newMsg, myName, age);

var oldMsg = "I'm also a msg";
console.log(oldMsg);

let fullName = "Aakash";
let myFullName = fullName;
console.log("FullName :", fullName);
console.log("MyFullName :", myFullName);

// let $1stMsg = 1;
// let $1stMsg = 2;
// Declaring twice var cause error

// s = 12; //without "use strict" variable can be used without declarations
// It is a bad practice
// console.log(s);

const myBirthYear = 2003;
// myBirthYear = 2002;
// create assignment to a const variable error
console.log(myBirthYear);

// Uppercases are mostly used for const

const MYBIRTHDATE = 13;
const MYBIRTHMONTH = "July";
console.log(
  "I'm born in " + MYBIRTHDATE + " " + MYBIRTHMONTH + " " + myBirthYear
);

// TASKS

let admin, $name;
$name = "John";
admin = $name;
// alert(admin);

let planetName, currentUser;
planetName = "Earth";
currentUser = admin;

const BIRTHDATE = "13.07.2003";
// const myAge = SomeCode(BIRTHDATE);

// both are const but birthdate is fixed one cant changed
// but age changes with runtime of somecode func
// so uppercase const applied only for birthdate not age

//* DATATYPES
/*
 *JS is Dynamically Typed
 */

let stringDT_Eg = "Akash";
let numberDT_Eg = 12;
numberDT_Eg = 12.54; //Either float or int

// ? Other also include infinity , - infinity , NaN

// alert(1 / 0);
// alert(stringDT_Eg / 2);

// Operations invlove NaN results in NaN

// alert(`Hello ${admin}`);

let userNameProvided = true;
let passwordProvided = false;

let isGreater = 1 > 4;
console.log("isGreater", isGreater);

let voidGuy = null;
console.log("voidGuy", voidGuy);

let noDefGuy;
console.log("noDefGuy", noDefGuy);

noDefGuy = 12;
console.log("noDefGuy", noDefGuy);

console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof null);
// null is not a object it is a spl value type
// ? typeof is wrong here
console.log(typeof "Akash");
console.log(typeof 12);
console.log(typeof 23647862476387264n);
console.log(typeof true);
console.log(typeof Math);
console.log(typeof alert);

