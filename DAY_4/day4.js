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


