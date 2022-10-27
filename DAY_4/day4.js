"use strict";

// Nullish coalescing operator ?? //? shows 1st defined value if it is not null and undefined

let uname = "akash";
let userName = uname ?? "anonymous";
console.log("userName :", userName);

// series
let fName, mName, lName;
lName = "Virus";
let nameDetails = fName ?? mName ?? lName;
console.log("Name Details :", nameDetails);

// diff between || and ??
// ? || returns truthy value ?? returns defined value
// ? both have same precedance

let score = 0;
console.log(score || "Error reading initial score 0");
console.log("Score :", score ?? "Error reading initial score 0");

let x = (1 && 2) ?? 3;
console.log(x);

// * Loooppsss

// * WHILE

let value = 3;

/*
while (value <= 3) {
  // console.log("Test");
  // alert(value);
  value++;
}

while (value) {
  // alert(value);
  // value--;
}

*/
let numVal = 0;
// while (numVal) alert(numVal--);

// while (value) alert(value--);

// * Do While

// do {
//   alert(numVal);
//   numVal--;
// } while (numVal >= 0);

// * For loop
let testVar = 0;
/*
for (; testVar < 3; ) {
  alert(testVar++);
}


for (;;) {
  // repeats without limits
}

alert("TestVar value " + testVar); //not possible if it is an inline decl var

*/

//breaking - force exit loop

let sumVal = 0;

// while (1) {
//   let enterVal = +prompt("Enter a number :");
//   sumVal += enterVal;
//   if (!enterVal) break;
// }
// alert("Sum : " + sumVal);

// Continue

// labeliing
outer:for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue outer;

  alert(i);
}

// TASKS


let i = 0;
while (++i < 5) alert( i );

let j = 0;
while (j++ < 5) alert( j );

