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
switch(num){
  case 0:
    console.log(0);
    break
  case 1:
    console.log(1);
    break
  case 2:
  case 3:
    console.log('2, 3');
}
