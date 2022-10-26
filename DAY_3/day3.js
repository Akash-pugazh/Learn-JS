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





















