'use strict';
/* Default Parameters:
const bookings = [];

const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH123');
creatBooking('LH123', 1, 199);
creatBooking('LH123', 3); // price is calculated dynamically
creatBooking('DH123', undefined, 500);
*/
/*
const flight = 'LH234';
const nikhil = {
  name: 'Nikhil Arya',
  passport: 180970101031,
};

const checkIn = function (flightNum, passenger) {
  // changeing details
  flightNum = 'LH900';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 180970101031) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, nikhil);
console.log(flight); // passed by value
console.log(nikhil); // object reference passed by value
*/

/*
// Callback functions
const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const high5 = function () {
  console.log(`👋`);
};

/////////////////////////////////
// Higher-order function
// This function operates at higher level of abstraction, leaving the low level details to low level funtions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is best programming language!', upperFirstWord);
transformer('JavaScript is best programming language!', oneword);

// JS uses callback functions all the time : high5 is callbasck here
// callback functions are used to create abstraction.
document.body.addEventListener('click', high5);
*/

/*
////////////////////////////////
// Function returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet('Hey');
greetHey('Nikhil');

greet('Hey')('Jonas');

// Arrow function
const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};
greet2('Hello')('Bob');
*/

/*
// Example: Airline
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LU',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} airline flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline}${flightNum}`,
      passengerName: `${name}`,
    });
  },
};

lufthansa.book(241, 'Nikhil Arya');
lufthansa.book(992, 'John smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does not work
// book(232, 'Sahara Williams');
/////////////////////////////////
// Call method: allow us to explicitly set this keyword of any function we want to call: here this keyword is set to eurowings followed by the arguments of the original function.
book.call(eurowings, 756, 'Sahara Williams');
book.call(lufthansa, 999, 'Chris Jordan');

console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'SW',
  bookings: [],
};

// Apply method: it takes arguments as array, older way of doing
const flightData = [567, 'Tripti Dimri'];
book.apply(swiss, flightData);

// better way of doing same thing
book.call(swiss, ...flightData);
console.log(swiss);

////////////////////////////////////
// The Bind Method:
const bookEW = book.bind(eurowings);
const bookswiss = book.bind(swiss);

bookEW(123, 'Nikhil Arya');

// Also predefined value for argument is defined
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schemedmann');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// this keyword initially points to content of selected class element i.e the button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // manually defined this keyword

// Partial application: we csn preset the value of the parameters.

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.23, 100));

const addGST = addTax.bind(undefined, 0.23);
console.log(addGST(100));
console.log(addGST(60));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Java', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n write option number`
      )
    );
    console.log(answer);

    // Register Answer
    if (typeof answer === 'number' && answer < this.answers.length)
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// calling displayResults function with some other object, using call method. Now this keyword will consider the object specified.
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

//////////////////////////////////////////
// Immediately Invoked Function Expression (IIFE)
//////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

const runMany = function () {
  console.log('This can be invoked many times');
};

runMany();

// IIFE
(function () {
  console.log('This will never run again');
})();

(() => {
  console.log('Namaste JavaScript 🙏Immediately Invoked Function Expression');
})();

///////////////////////////////////////////////
////////////      Closures    /////////////////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount += 1;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);
// The Execution context of the secureBooking function is no longer avaliable in the call stack after returning booker function.
// still the boker function is able to acces the variable passengerCount and manage to update it
// because booker function is created/born inside the execution context of the secureBooking funtion. and
// A function has access to the variable environment(VE) of the Execution contextin which it was created
// A closures is the closed-over Variable environment of the execution context in which function is created, even after that execution context is gone.
