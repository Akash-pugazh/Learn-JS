// comparisons

console.log(2 > 3);
console.log(7 == 7);
console.log(6 > 3);
//  all comp ops return bool value

let compTest = 6 > 3;
console.log("compTest", compTest);

// String comparisons

//compares letter by letter
console.log("ak" > "aa"); //true
console.log("ak" > "al"); //false
// compares equal count of strings if any one greater it wins

// With different types
console.log("2" > 1); //string 2 becomes number 2

// Funny

let a = 0;
console.log(Boolean(a)); // 0 false
let b = "0";
console.log(Boolean(b)); // any string content true
console.log(a == b); //number conversion makes "0" to 0 so true

// * Strict Equality

// requires both comparators to be of same type

console.log("equality", 0 == false);
console.log("Strict equality ", 0 === false); //types are diff

// null comps
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

// undef comps
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

/*

5 > 4 //t
"apple" > "pineapple" //f
"2" > "12" //t
undefined == null //t
undefined === null  //f
null == "\n0\n" //f
null === +"\n0\n" //f

*/

// * CONDITIONAL BRANCHING

/*

let isAdmin = prompt("Are you admin ? (y/n)");

if (isAdmin == "y") alert("WELCOME BOSS"); // ?  simple exec

if (isAdmin == "y") {
  alert("WELCOME BOSS");
  alert("MORNING🌞");
} // ? complex exec

*/

// let userAge = prompt("Enter your age");
let userAge = 18;
if (userAge > 18) {
  console.log("You are bit old for party");
} else if (userAge < 18) {
  console.log("You are bit younger for party");
} else {
  console.log("You are perfect for partys👌");
}

// ? Qn mark operator or TERNARY
// * let variableName = cond ? Truthyval : Falsedval

userAge = 23;
userAge = 3;
let access = userAge >= 18 ? true : false;
console.log(access);

let inputAge = 5;
let ageGreeter =
  inputAge < 5
    ? "Hi baby"
    : inputAge < 18
    ? "Hello boy / girl"
    : inputAge < 80
    ? "Hello Uncle / aunt"
    : "Unusual Age Entered😟";
console.log(ageGreeter);

//NON TRADITIONAL WAY OF IF AMD ?

inputAge >= 22
  ? console.log("Allowed for marriage")
  : console.log("Child marriages are not allowed");
// ? unusual way

// Task
// let getInputAnswer = prompt("What is the official name of Javascript");
let getInputAnswer = "ecmascript";

let res = getInputAnswer == "ecmascript";

res ? console.log("Right🤜") : console.log("You don't know ECMAScript😭");

let getInputNumber = 34;
getInputNumber = Number(getInputNumber);

if (getInputNumber > 0) {
  console.log("➕");
} else if (getInputNumber === 0) {
  console.log("0️⃣");
} else {
  console.log("➖");
}

// * LOGICAL OPERATORS

// Four(||, &&, !, ??)

// OR  // ? high precedence rank 3

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(0 || 0);
console.log(0 || 1);
console.log(1 || 23);
//returns first true val and last false val

let time = 12;
let isWeekEnd = true;
if (time < 10 || time > 22 || isWeekEnd) {
  console.log("Closed🚫");
} else {
  console.log("Shops open🏪");
}

let firstName, lastName, nickName;
// let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous");

// Short circuiting

console.log(null || "If cond is true this is not displayed");
console.log(true || "If cond is true this is not displayed");

// AND  // ? high precedence rank 2

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(0 && 3);
console.log(1 && 0);
console.log(1 && 4);
//returns last true val and 1st false val

// NOT // ? high precedence rank 1

console.log(!true);
console.log(!false);

let loginId = prompt("Who's there ? ");
let password;
if (loginId === "Admin") {
  password = prompt("Enter admin password : ");
  password === "TheMaster"
    ? console.log("Welcome🥰")
    : !password || password == ""
    ? console.log("Cancelled")
    : console.log("WrongPassword");
} else if (loginId === "Cancel" || !loginId) {
  console.log("Cancelled 🚫");
} else {
  console.log("I don't know you 🙅‍♀️");
}

// End of DAY3

// :)