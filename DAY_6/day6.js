"use strict ";

// ? CODE QUALITY

// * DEBUGGING - process of finding and fixing errors within a script

function hello(uName) {
  desname(uName);
  let desName = desname(uName);
  console.log("Hello",desName);
}

function desname(desname) {
  return `***${desname}***`;
}

// * Completed Code Quality
// overview knowlege has beem gathered

// ! OBJECTS

// ? objects are used to store keyed collections of various data and more complex entities

// created with {} and key : value pairs

// empty object
let userObj = new Object(); //obj constructor syntax
let $userObj = {}; //obj literal syntax

console.log(typeof userObj);
console.log(typeof $userObj);

