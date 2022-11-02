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
    if (typeof objName[prop] === "number") {
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

console.log("");
console.log("");

let msg = "hi";
let phrase = msg;
console.log("msg", msg);
console.log("phrase", phrase);
phrase = "hello";
console.log("msg", msg); //not changed as it is a entire seperate copy
console.log("phrase", phrase);

// ? Objects instead store them as a reference

let testingObj = {
  myName: "Akash",
};
let testingObjCopy = testingObj;
console.log("testingObj", testingObj);
console.log("testingObjCopy", testingObjCopy);
// here they appear as same but when we change any one of this it will affect another as we are changing the referenced value

// ! here we are not creating copies only references are used

testingObjCopy.myName = "Virus";
console.log("testingObj", testingObj); // changes the referenced value
console.log("testingObjCopy", testingObjCopy);

// ! COMPARISONS

let a = {};
let b = a;
console.log(a == b);
console.log(a === b);

a = {};
b = {}; // ? independent objects
console.log(a == b);
console.log(a === b);

// ! Const objs can be modified

const userConstObj = {
  myName: "Virus",
};
userConstObj.myName = "Ak";
console.log(userConstObj.myName);

// * Cloning and merging, Object.assign

let userObj3 = {
  myName: "Virus",
  isFine: true,
};

let clone = {};
for (let props in userObj3) {
  clone[props] = userObj3[props];
}

clone.myName = "Akash";
console.log(userObj3);
console.log(clone);

// ! best for copying is Object.assign method
// ? Object.assign(objName ,  sources...)

let clone1 = {};
Object.assign(clone1, userObj3);
console.log("clone1", clone1);

//If the copied property name already exists, it gets overwritten

// short way for clone

let clone2 = Object.assign({}, userObj3);
console.log("clone2", clone2);

// * Nested cloning

let userObj4 = {
  myName: "cat",
  activities: {
    canMeow: true,
    canBark: false,
  },
};
console.log(userObj4.activities.canMeow);

let userObj4Clone = Object.assign({}, userObj4);

console.log("userObj4", userObj4);
console.log("userObj4Clone", userObj4Clone);

userObj4Clone.myName = "Dog";
userObj4Clone.activities.canMeow = false;
userObj4Clone.activities.canBark = true;

console.log("userObj4Clone", userObj4Clone);
console.log("userObj4", userObj4);

// causes nested loops sharing

console.log(userObj4.activities === userObj4Clone.activities);

// ! TO fix

// * Structured clone

let dog = {
  name: "dog",
  acts: {
    canBark: true,
    canMeow: false,
  },
};
let cat = structuredClone(dog);
cat.name = "cat";
cat.acts.canBark = false;
cat.acts.canMeow = true;
console.log("dog", dog);
console.log("cat", cat);
