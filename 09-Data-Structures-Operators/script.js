'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // object inside object
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // object destruction in parameters
    // these name should be exactly same as in the Object
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPizza: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pizza with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Rajpur road , Dehradun',
  mainIndex: 2,
  starterIndex: 2,
});

// /*
// ********************************
// ********Destructuring array*****
// ********************************
// Breaking array into seprate variables.
const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swaping both values
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
// receive 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // Destructuring inside destructuring
console.log(i, j, k);

// Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
// */
// **********************************
// ******* Destructuring Objects ****
// **********************************
// /*
// By using Property names:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// By using different varable name for properties
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(resturantName, hours, tags);

// Default values are important in case: when we trying to read a property on a object that does not exist eg: bevrages
const { bevrages = [], starterMenu: starter = [] } = restaurant;
console.log(bevrages, starter);

// Mutating Variables
let m1 = 10;
let m2 = 20;

const marks = { m1: 25, m2: 17, m3: 12 };
({ m1, m2 } = marks);
console.log(m1, m2);

// Nested objects

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// */
// /*
// ************************************
// ******* The Spread Operator(...) ***
// ************************************
//Note:- spread operator is simialar to destructuring, it takes all the elements out from the array, without creating new variables
// Use Cases: 1) to create shallow copies of arrays. 2)to merge two arrays, 3) to pass values to a function
// spread operator works with all Iterables: arrays , strings , map, sets. NOT objects
// used where multiple values are separated by a commas.
// Spread operator works with all iterables

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Kaphli'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Merge two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Pass values to function
const ingredients = ['cheeze', 'mushroom', 'onions'];
restaurant.orderPizza(...ingredients);

// objects
const newRestaurant = { founderIn: 1998, ...restaurant, location: 'maldives' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Hayatt hotel';
console.log(restaurant.name);
console.log(restaurantCopy.name);
// */
// REST PATTERN and Parameters, left side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Function that can take any number of Parameters
const numbers = [23, 43, 12];
const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};

// passing any number of parameters
add(2, 3, 4, 5, 6, 7, 12);
// passing all elements of array as parameters
add(...numbers);
