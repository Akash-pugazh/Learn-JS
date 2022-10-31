"use strict ";

// ? CODE QUALITY

// * DEBUGGING - process of finding and fixing errors within a script

function hello(uName) {
  desname(uName);
  let desName = desname(uName);
  console.log("Hello", desName);
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

userObj = {
  userName: "Akash",
  userAge: 18,
};
// properties
// * Property name and property value pairs

console.log(userObj.userName);
console.log(userObj.userAge);

// * add property
// any datatyoe

userObj.isStudent = true;
console.log(userObj);

// * delete property

delete userObj.isStudent;
console.log(userObj);

// * multiword property names but in quotes

$userObj = {
  $userName: "Virus",
  $userAge: 18,
  "is he commited": true, //last property may end with comma
  // * hanging comma
};

console.log($userObj);

// ! multiword props . way of add or delete doesnt work

// ? userObj.is he comitted = true; //error

// * alternately use of square bracketes

userObj["is he commited"] = true;
console.log(userObj);

delete userObj["is he commited"];
console.log(userObj);

let propToAdd = "userQualification";
userObj[propToAdd] = "Btech";
console.log(userObj);

let fruit1 = "apple";

let bagObj = {
  [fruit1]: 10,
};
console.log(`bagObj contains ${bagObj.apple} ${fruit1}`);

// Shorthands

function makeUserObj(userName, userAge) {
  return {
    // userName : userName,
    // userAge : userAge, // else
    userName,
    userAge,
  };
}
let user1 = makeUserObj("Virus", 20);
console.log("user1", user1);

// ? There are no limitations for property namings

// ! user1.__proto__ = 5;
// ! console.log(user1.__proto__);

console.log(user1.userStatus === undefined);

// shorthanded checking of property

console.log("userStatus" in user1);

//  * for..in loop

for (let prop in user1) {
  console.log(prop);
}
for (let prop in user1) {
  console.log(user1[prop]);
}

// ordered loop vals when output
// ? numbers sorted others in creation order

let orderTest = {
  authorName: "Virus",
  2: "two",
  0: "zero",
  1: "one",
  testName: "OrderTest",
  // * all num keys are brought top and sorted and created name props are in default at bottom
};
for (let prop in orderTest) {
  console.log(`${prop} : ${orderTest[prop]}`);
}

// non int props are in creation order

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code);
}

// TASKS

let userTask = {};
userTask.name = "John";
console.log("userTask", userTask);
userTask.surname = "Smith";
console.log("userTask", userTask);
userTask.name = "pete";
console.log("userTask", userTask);
delete userTask.name;
console.log("userTask", userTask);

let scheduleObj = {};
function isEmpty(objName) {
  for (let prop in objName) {
    return false;
  }
  return true;
}
console.log(isEmpty(scheduleObj));
scheduleObj["10.00"] = "Coding";
console.log(isEmpty(scheduleObj));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let prop in salaries) {
  sum += salaries[prop];
}
console.log(sum);

function multiplyNumeric(objName) {
  for (let prop in objName) {
    if (typeof objName[prop] === 'number')  {
      objName[prop] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
console.log(menu);

// Objects Deep Dive
