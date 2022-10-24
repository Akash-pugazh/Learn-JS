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

