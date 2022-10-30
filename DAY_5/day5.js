"use strict";

//Switch

let a = 2;
switch (a) {
  case 1:
    console.log("little");
    break;
  case 2:
    console.log("Exact");
    break;
  case 3:
    console.log("Big");
    break;
  default:
    console.log("Not matched");
}
// Breaks should be added

// Tasks

let browser = "Safari";
if (browser === "Edge") {
  console.log("You've got the Edge");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okey we support these too");
} else {
  console.log("We hope this page looks ok");
}

let num = 1;
switch (num) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2, 3");
}

// * Functions

// keyeord function + name of function
function showMsg() {
  console.log("Hello I'm a function");
  // Function body
}

showMsg(); //Function call

// A variable decalred inside the func is only visible inside the function

function test() {
  let designerName = "Virus";
  console.log("This function is designed by", designerName);
  console.log(designerName);
}

test();
// console.log(designerName); //not accesible

// but a func can acess and modify outer variables

let myName = "Akash";

function myNameFunc() {
  console.log("My name is", myName);
}
myNameFunc();
console.log(myName);

let $name = "virus";
function testName() {
  $name = "akash";
  console.log($name);
}
console.log($name);
testName();
console.log($name);

// Shadowing
console.log("Shadowing");

let $name1 = "virus";
function testName1() {
  let $name1 = "akash";
  console.log($name1);
}
console.log($name1);
testName1();
console.log($name1);

// PARAMETERS & Arguments

// parameters are seen in func brackets
function msgApp(from, msg) {
  console.log(`${from} : ${msg}`);
}
//arguments are seen in func call brackets
msgApp("Virus", "Hii");
msgApp("Akash", "Hii");
msgApp("Virus", "How are you");

function msgApp1(from, msg = "No msg provided") {
  from = `***${from}***`;
  console.log(`${from} : ${msg}`);
}

let from = "Venus";
console.log("from", from);
msgApp1(from, "Hello");

// if argument not provided it is undef

msgApp(from);

// default msg is provioded

msgApp1(from);

// Other ways for declaring defaults

function msgApp2(text) {
  text = text ?? "No text"; //considers 0s and empty vals
  console.log(text);
}
msgApp2(0);

//Returning value

function sum(a, b) {
  return a + b;
}

let res = sum(1, 3);
console.log("res", res);

function ageCheck(age) {
  if (age >= 18) return true;
  else return confirm("Do you got permission from parents ?");
}

// let age = +prompt("Enter age");
let age = 20;
if (ageCheck(age)) {
  console.log("Access Granted");
} else {
  console.log("Access denied");
}

function doNothing() {
  return;
}
console.log(doNothing());
console.log(doNothing() === undefined);

//no newline after return else use open paranthesis

/* 
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
*/

// ! Multiple functions for better codes

// Tasks

function checkAge1(age) {
  return (age > 18) ? true : confirm("Did parents allow you ?");
}

function checkAge2(age) {
  return (age > 18) || confirm("Did parents allow you ?");
}

function min(a, b){
  return a>b ? b : a;
}

let res1 = min(1,2)
console.log("res1", res1);
let res2 = min(2,5);
console.log("res2", res2);
let res3 = min(3, -1);
console.log("res3", res3);
let res4 = min(1,1);
console.log("res4", res4);

function pow(x,y){
  return x ** y;
}
let res5 = pow(3,2);
console.log("res5", res5);
let res6 = pow(3,3); 
console.log("res6", res6);
let res7 = pow(1, 100); 
console.log("res7", res7);
