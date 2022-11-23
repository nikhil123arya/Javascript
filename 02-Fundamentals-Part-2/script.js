// "use strict"; // Defines that JavaScript code should be executed in "strict mode
/*
// It helps you to write cleaner code, like preventing you from using undeclared variables.

let hasDriversLicense = false;
const passtest = true;

if (passtest) {
  hasDriverLicense = true;
}
if (hasDriversLicense) {
  console.log("You can drive 🚗");
}

// Here, mistyping a variable name creates a new global variable (hasDriverLicense). In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

const private = "private"; // reserve word 'private' can't be declared as variable name
const interface = "interface"; // You can not use the reserve words in Strict mode
// console.log(interface, private);

// *******************************
// ******* FUNCTIONS *************
// *******************************

// Example:1
function namelogger() {
  console.log(`My name is Nikhil`); // fonction body
}

// function call /invoke /execute /running
namelogger();
namelogger();
namelogger();

// Example:2
function foodProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = foodProcessor(3, 5);
console.log(appleOrangeJuice);

// Example:3

// Function Declaration

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1999);

// Function Expression

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1992);

console.log(age1, age2);

// Arrow Function

const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1999));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1997, "bob"));


//  Function calling another function.

function cutPeices(fruit) {
  return fruit * 4;
}

function foodProcessor(apples, oranges) {
  // parameters / placeholders
  const applePeices = cutPeices(apples); // calling cutPeice()
  const orangePeices = cutPeices(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePeices} peices of  apples and ${orangePeices} peices of oranges`;
  return juice;
}

console.log(foodProcessor(2, 4)); // Arguments

// example:

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1999));

function calcAverage(x, y, z) {
  return (x + y + z) / 3;
}

let dolphinsAvg = calcAverage(44, 23, 71);
let koalasAvg = calcAverage(23, 34, 27);
console.log(koalasAvg, dolphinsAvg);

function checkWinner(koalasAvg, dolphinsAvg) {
  if (koalasAvg > 2 * dolphinsAvg) {
    console.log(`koalas wins (${koalasAvg} vs ${dolphinsAvg})`);
  } else if (dolphinsAvg > 2 * koalasAvg) {
    console.log(`Dolphin wins (${dolphinsAvg} vs ${koalasAvg})`);
  } else {
    console.log(`No team wins.....`);
  }
}

checkWinner(koalasAvg, dolphinsAvg);

// test 2

dolphinsAvg = calcAverage(85, 54, 41);
koalasAvg = calcAverage(23, 34, 27);
console.log(koalasAvg, dolphinsAvg);

checkWinner(koalasAvg, dolphinsAvg);

// ****************************
// ******** ARRAYS ************
// ****************************

//https://www.w3schools.com/js/js_arrays.asp

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Adam";

const friends = ["Michael", "Steven", "Adam"]; // Literal Syntax
console.log(friends);

// const years = new Array("1992", "1994", "1987");
// console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = "Jay"; // changing element
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "schemedtmann", 2022 - 1992, "teacher", friends];
console.log(jonas);

// Exercise

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const years = [1994, 1993, 2014, 2002, 1984];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// BASIC ARRAY OPERATIONS (METHODS)

const cars = ["ferarri", "mustang", "ford", "aventador"];

// Push(): adds element to the end of the array.
const newLength = cars.push("MG Hector");
console.log(cars);
console.log(newLength);

// Unshift(): adds element to the begining of the arrays
cars.unshift("Everest");
console.log(cars);

// Pop() : removes the last elements from array.
cars.pop(); // Last
const popped = cars.pop();
console.log(popped);
console.log(cars);

// shift(): remove first element in the array.
cars.shift();
console.log(cars);

// indexOf(): retun the index of given element
console.log(cars.indexOf("mustang"));

// includes(): retuns true if element exist in the array
console.log(cars.includes("ford"));
console.log(cars.includes("mini cooper"));



// Challenge #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);



// ********************************
// ******** OBJECTS ***************
// ********************************
// https://www.w3schools.com/js/js_object_definition.asp

const nikhilArray = [
  "Nikhil",
  "Arya",
  2022 - 2001,
  "developer",
  ["bellu", "choti", "kohli"],
];

// object :- name : value pairs ( here nikhil contains five key value pairs)
const nikhil = {
  firstName: "Nikhil", // property firstName
  lastName: "Arya", // property lastName
  birthYear: 2001,
  job: "developer",
  friends: ["bellu", "choti", "kohli"],
  hesDriversLicense: true,

  // Method - a function attached to an objects s called method.

  // calcAge: function (brthyear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear; // this keyword is also used to create new properties.
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hesDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(typeof nikhil);

// We can use two notations to retrive data from the objects

// 1. Dot Notation:  use property name after dot.
console.log(nikhil.lastName);
// 2. Bracket Notation: use property name as String inside square bracket.
console.log(nikhil["lastName"]);

// const interestedIn = prompt(
//   "What do you waht to know about Nikhil? choose between firstname, lastname, age, job, friends "
// );
// console.log(nikhil.interestedIn); // Undefined because interestedIn is not a property name.

// if (nikhil[interestedIn]) {
//   console.log(nikhil[interestedIn]);
// } else {
//   console.log(
//     "Wrong choice!! choose between firstname, lastname, age, job, friends"
//   );
// }

nikhil.location = "Dehradun";
nikhil["twitter"] = "@thenikhilbob";

console.log(nikhil);
console.log(
  `${nikhil.firstName} has ${nikhil.friends.length} friends, and his best friend is ${nikhil.friends[0]}`
);

console.log(nikhil.calcAge()); // calculate once
console.log(nikhil.age); // retrive the calculated property, Efficient
console.log(nikhil.age);
console.log(nikhil.age);


// jonas is a 46 years old teacher ,and he has a/no drier's license
console.log(nikhil.getSummary());


// Chalenge #3
const mark = {
  fullName: "mark miller ",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullName: "john smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI}) `
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${marks.BMI}) `
  );
} else {
  console.log("both have equal BMI");
}

console.log(mark);


// *****************************
// ******* ITERATIONS **********
// *****************************

// for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting the weight ${rep}`);
}

// array
const bob = [
  "bob",
  "marley",
  2022 - 1978,
  "singer",
  ["belu", "nik", "ara"],
  true,
];

// const types = [];

// for (let i = 0; i < bob.length; i++) {
//   // reading from bob array
//   console.log(bob[i], typeof bob[i]);

//   // filling types array
//   // types[i] = typeof bob[i];
//   types.push(typeof bob[i]);
// }

// console.log(types);

// continue and break
for (let i = bob.length - 1; i >= 0; i--) {
  if (i == 3) continue; // it will skip that number and continue looping
  console.log(i, bob[i]);
}

console.log(`**********************`);
for (let i = 0; i < bob.length; i++) {
  if (i == 3) break; // it will break the entire loop at that number
  console.log(i, bob[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- starting exercise ${exercise}`);

  // Loop inside Loop
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetetion ${rep} 🏋️‍♂️`);
  }
}

// While Loop is more versatile than for loop because it only needs a condition to be true (it doest have to be related to counter) to run and it does not really need a counter which is specific to this example below

repetion = 1;
while (repetion <= 10) {
  // console.log(`while: condition is true, print${repetion}`);
  repetion++;
}

// WE do not know beforehand that how many times the loop should run
// if the condition is false initially, the loop will never start (Entry Controlled )

let dice = Math.round(Math.random() * 6);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.round(Math.random() * 6);
  if (dice === 6) {
    console.log(`loop is about to end...`);
  }
}

*/
// Challenge #4

// function to calculate the average of all elements in array
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let avg;

for (let i = 0; i < 10; i++) {
  // tips[i] = calcTip(bills[i]);
  // totals[i] = bills[i] + tips[i];

  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAverage([2, 3, 5]));
console.log(calcAverage(totals));
