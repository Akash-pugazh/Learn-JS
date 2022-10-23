"use strict"; //Enables the code to work in modern way
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

// VARIABLES

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
alert(admin);

let planetName, currentUser;
planetName = "Earth";
currentUser = admin;

const BIRTHDATE = "13.07.2003";
const myAge = SomeCode(BIRTHDATE);

// both are const but birthdate is fixed one cant changed 
// but age changes with runtime of somecode func
// so uppercase const applied only for birthdate not age

