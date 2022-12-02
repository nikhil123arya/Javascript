'use strict';
/*
// Note:
// Scope of a variable is the entire region of the code where in which the variable is accessible
// const and let variables are blocked scoped.
// var (pre ES6) is function scoped.
// Funtions are also block scoped (but only in strict mode)

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  console.log(firstName); // first name is not in this scope , so it does a variable lookup in its parent scope
  // where it finds firstName variable in Global scope
  function printAge() {
    const output = `${firstName}, You are ${age}, born in year ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      const firstName = 'Steven';
      var millenial = true;
      const str = `Oh, you are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // str is not defined
    console.log(millenial);
    // console.log(add(2, 3)); // add is not defined.
  }
  printAge();

  return age;
}
// calcAge(1991); // Error: ReferenceError: Cannot access 'firstName' before initialization
const firstName = 'Jonas';
calcAge(1991);

// console.log(age); // Here we are in outer scope hence, we cannot access the variable of a child scope.
// printAge(); // cannot be accessed from outer scope


// *************************
// **** Hoisting and TDZ ***
// *************************

console.log(me); // undefined: because varable decared with var are Hoisted with value undefined
// console.log(job); // Reference Error: job variable is still in (Temporal Death Zone) here in this point so we can not access it.
// console.log(year); // same reason as above

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // it is defined with const ,also in TDZ
console.log(addArrow(2, 3));
console.log(addExprVar(2, 3)); // TypeError: it is initialised as Undefined at this point. basically it is doing
// Undefined(2,3)  : its is not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addExprVar = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example:-
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All prododuct deleted');
}


// ***************************
// ***** This Keyword   ******
// ***************************

console.log(this); // this keyword is pointing to the =>[Window object].

const ageCalc = function (year) {
  console.log(this);
  return 2022 - year;
};
ageCalc(1999);

const ageCalcArrow = year => {
  console.log(this);  //  this keyword points to its [parent object] window object
  console.log(2022 - year);
};
ageCalcArrow(0);

// *************************************************
// ***** Regular finctuon vs Arrow function   ******
// *************************************************

// eg:- Here below, its not a code block its just an object literal, it does not have its own scope, all of inside this is in the global scope
// - When we try to access a property that doesn't exist on an object we get [Undefined]
// - variable declared with var, actually creates properties on the global object.
// Note:- Never use var and arrow funtion to avoid these type od mistakes

// var firstName = 'martila';

const bob = {
  firstName: 'bob',
  lastName: 'marley',
  year: 1998,
  calcAge: function () {
    console.log(this); // this keywoed points to the the object calling it, here => [bob objects]
    console.log(2022 - this.year);

    // // Solution 1: by using another variable that we can solve this problem
    // const that = this;
    // const isMillenial = function () {
    //   console.log('********Millenial******');
    //   console.log(this); // undefined
    //   console.log(that);
    // };

    // Solution:2 by using arrow function
    const isMillenial = () => {
      console.log('********Millenial******');
      console.log(this); // undefined / jonas object because arrow funtion inhert this keyword of its parent object
    };

    isMillenial(); // Inside a regualar function call this keyword is undefined.
  },

  greet: () => {
    console.log(this); // Window is the this keyword in the arrow function
    console.log(`Hey ${this.firstName}`); // firstName in window is undefined
  },
};

bob.calcAge();
// bob.greet();
// console.log(this.firstName);

//eg:-
const matila = {
  year: 2013,
};

matila.calcAge = bob.calcAge; // Method borrowing
// matila.calcAge();
*/

// Argument keyword

// **********************************
// ***** PRIMITIVE VS OBJECTS  ******
// **********************************

// Ecamplel 1:
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 20,
};
const friend = me;
friend.age = 17;

console.log(me);
console.log(friend);

// Example 2:

// Primitive type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessic = jessica; // Reference to the object is copied, not the object
marriedJessic.lastName = 'Davis';

console.log(jessica, marriedJessic);

// Coping objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['meena', 'bob', 'menal'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2, jessicaCopy);

jessicaCopy.family.push('jay');
jessicaCopy.family.push('mark');
console.log(jessica2, jessicaCopy);
