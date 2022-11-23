console.log(23 - 54 + 34 - 8);

console.log("Nikhil");
console.log(23);

let first_Name = "Nikhil";
console.log(first_Name);

//***************************************
//***************DATA TYPE *************
//***************************************
/*
console.log(typeof true); // Boolean
console.log(typeof "jonas"); // String
console.log(typeof 24); // Number

let year; // Undefined variable:- its value is not defined
console.log(year); // the value of the variable is Undifined and also,
console.log(typeof year); // the type of variable is Undefined

// Dynamic Typing
// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time 

year = 1991;
console.log(typeof year);

console.log(typeof null); // type of null is object

// let age = 30; // its value is mutable at any point in future
// age = 31;

// const birthYear = 1991; // immutable variable - its value cannot be changed.

var job = "programmer"; // var is the older way of defining variable prior to ES6
job = "Analyst"; // it works simmilar to let

// Actually we dont even have to declare varables at all, Because it actually not manditiory
lastNam = "dillon";
console.log(lastNam);
*/

//***************************************
//***************OPERATORS **************
//***************************************

// 1. Mathematical or Arithmetic operators

const now = 2022;
const ageNikhil = now - 2001;
const ageSaraha = now - 1999;
console.log(ageNikhil, ageSaraha);

console.log(ageNikhil * 2, ageSaraha / 2, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = "Nikhil";
const lastName = "Arya";
console.log(firstName + lastName); // conctination of strings

// Assignment opetators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operator
console.log(ageNikhil > ageSaraha); // it will result either true or false
console.log(ageSaraha >= 18);

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10;
console.log(a, b);

const averageAge = (ageNikhil + ageSaraha) / 2;
console.log(averageAge);

// strings
const firstname = "jonas";
const job = "teacher";

// Template Literals: use back-ticks (``)
// https://www.w3schools.com/js/js_string_templates.asp

// Template Literal :- used to log variable and expressions into strings.(Interpolation)
const jonas = `I'm ${firstname} and i am a ${job}`;
console.log(jonas);

console.log("Strings with \n\
multiple lines\n\
to print ");

console.log(`Strings with 
multiple lines
to print `);

//***********************************
// Taking Decisions / If else statement

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  // It is called a control structure - it allow us to  have more control over the way that our code is executed
  console.log("Saraha can start driving licience 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sahara is too young. wait for ${yearsLeft} years`);
}
// example 2
const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// TYPE CONVERSION AND TYPE COERCION

// Type conversion
const inputYear = "1991"; // string value

console.log(Number(inputYear), inputYear); // number and string
console.log(Number(inputYear) + 18); // number + number

console.log(Number("jonas")); // NaN - Not a Number
console.log(typeof NaN);

console.log(String(23), 23);

// Type coersion
console.log("I am " + 23 + " years old"); // here niumber is converted to string and concatinated
console.log("23" - "10" - 3); // here strings are converted to Number due to Minus operator
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "6" - 3 + "5");

// TRUTHY AND FALSY VALUES

//  5 falsy values: 0, '', undefined, null, NaN

// those values which will converted to false, when we attempt them to convert to boolean they are not false initially but they will become false when converted to boolean

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// Any other values than these five are truthy values

const money = 0;
if (money) {
  console.log(`don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let height;
if (height) {
  console.log(`YAY height is defined `);
} else {
  console.log(`height is UNDEFINED`);
}

// EQUALITY OPERATOR == or ===
/*
// const age = 18;
const age = "18";
if (age === 18) console.log("You just become adult (strict)"); // strict equality operator: no type coercion both the value should be exacty same 18 === 18

if (age == 18) console.log("You just become adult (loose)"); // loose equality operator: type coersion is done by JavaScript '18' == 18 (String is converted to number)

const favourite = Number(prompt("what's your favourite number"));
console.log(typeof favourite, favourite);
*/

// BOOLEAN

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND (true when ALL the values are true)
// console.log(hasDriversLicense || hasGoodVision); // OR  (true when ONE of the value is true)
// console.log(!hasDriversLicense); // NOT

const isTired = false; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sahara is able to drive.`);
} else {
  console.log(`someone else should drive..`);
}

// Switch STATEMENT

const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan your weekly goals");
    console.log("find some valuable courses online");
    break;
  case "tuesday":
    console.log("Start learning Theory lectures");
    break;
  case " wednesday":
  case "thursday":
    console.log("write some code hands on ");
    break;
  case "friday":
    console.log("revise your topic covered till now");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy your weekends");
    break;
  default:
    console.log("Not a valid day");
}

// if (day === "monday") {
//   console.log("start learning new courses");
//   console.log("today is monday");
// } else if (day === "tuesday") {
//   console.log("prepare some theory notes");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("have some coffee");
// } else if (day === "friday") {
//   console.log("Oye friday hai aaj");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Weekend me only Party");
// } else {
//   console.log("Are bhai bahi bhai !!");
// }

// EXPRESSIONS AND OPERTORS (MDN)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#:~:text=At%20a%20high%20level%2C%20an,example%20of%20the%20first%20type.

// TERNARY OPERATOR / CONDITONAL OPERATOR
// It has three parts: it is used to take quick decisions
// It is not a replacement for if/else statement.
// All the time we use if/else statement for lager block of code.

const age = 23;
age >= 19 ? console.log("you are adult mow") : console.log("you are under age");

const drink = age >= 19 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 19) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
console.log(`I like to drink ${age >= 19 ? "wine 🍷" : "water 💧"}`);
