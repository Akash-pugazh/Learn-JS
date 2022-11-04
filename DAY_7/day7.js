"use strict";

// * Garbage collection

let user = {
  name: "John",
};
console.log(user);
let userCopy = user;
userCopy.isUserCopy = true;
user = null;

console.log(user);
console.log(userCopy);

// ! This method in objects