'use strict';
///////////////////////////////////////
// Working With Strings - Part 3

// Split and Join
// - The split() method splits a String object into an array of strings by separating the string into substrings.
// - We need to specify the point at which the string is seprated passing it as an argument
// - When you split a string you turn it into an array
console.log('a+very+nice+programming+language'.split('+'));
console.log('Nikhil Arya'.split(' '));

const [firstName, lastName] = 'jonas schemedmann'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ₹ ');
console.log(newName);

// Example: capitalize names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('ayushmann khuranna');
capitalizeName('anushka sharma');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('nikhil'.padStart(25, '+').padEnd(30, '+'));

// Example:-
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(2453253565543423));

// Repeat:
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planeInLine(5);
planeInLine(12);
///////////////////////////////////////
// Working With Strings - Part 2
/*
const airline = 'TAP Air India';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io';

// console.log(loginEmail.toLowerCase());
// console.log(loginEmail.trim());

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing
const priceGB = '289,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const priceRupee = Number(priceUS.slice(0, priceUS.length - 1)) * 82.81;
console.log(priceRupee + '₹');

const announcement = 'All passenger come to boading door 23. Boading door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the New Airbus family');

// example: checking baggage
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are NOT allowed on board !!');
  else console.log('You are on Boarding');
};
checkBaggage('I have got some food, and a KniFe');
checkBaggage('I have nothing more than a laptop and some snacks');
checkBaggage("I've got some books, clothes and a gun for protection");
*/

///////////////////////////////////////
// Working With Strings - Part 1
/*
const airline = 'Tap Air India';
const plane = 'A320';

console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B703'[0]);

console.log(airline.length);
console.log('B703'.length);

// Methods: on Strings are somewhat simillar to the arrays
console.log(airline.indexOf('I'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('Air'));

// slice method use indices as an argument: to Extract form a String
console.log(airline.slice(8));
console.log(airline.slice(4, 7)); // length of string = 7- 4 = 3
console.log(airline.slice(airline.indexOf('A')));

console.log(airline.slice(0, airline.indexOf(' '))); // first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // last word

console.log(airline.slice(-2));

// Example: 1
const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const a = seat.slice(-1);
  if (a === 'B' || a === 'E') console.log('You have got the mIddle seat 💺');
  else console.log('You got lucky🤞');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('nikhil'));
// conclusion:
// String are Primitive : but we are using methods as objects because internally JavaScript will convert it to Objects with the same content inside it.
*/
