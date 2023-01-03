'use strict';
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`${half} half ${min}: ${event}`);
}
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`${player} scored ${i + 1} goal`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const value of odds) average += value;

average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


// 1
const [player1, player2] = game.players;
console.log(player1, player2);

// 2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3
const allplayers = [...player1, ...player2];
console.log(allplayers);

// 4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals scored`);
};
printGoals('lukaku', 'harry kane', 'modric');
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

// some other object
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const hours = {
  mon: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    // compute property names
    open: 11,
    close: 23,
  },
  [`day-${5 - 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Object literal syntax
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //ES6 enhanced object literal:
  hours,

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

  // ES6 way of writing Methods
  orderDelivery({ starterIndex, mainIndex, time, address }) {
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
/*
// ************************************
// *** Short Circuiting (&& and ||) ***
// ************************************

// result of OR operator can be any type of value, Its not always boolean

// Short- circuiting evaluation: if the first operand of OR operator is truthy value , it will immediately return the first value. than the other operand is not even be evaluated.
console.log('------ Or ------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
// undefined || 'Jonas'
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 20; // it will not work when the value is zero
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; // if its undefined , value of guest1 will be 10
console.log(guest1);

// default value assigned  to guest2
const guest2 = restaurant.numGuests || 40;
console.log(guest2);

console.log('------ AND ------');
// AND operator short circuits when the first value is falsy and immediately return that false value without evaluating the second value.
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('hello' && 23 && null && 'Jonas');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'olivs');
}

restaurant.orderPizza && restaurant.orderPizza('paneer', 'onions', 'vegies');

// ************************************
// * Nulling Coalescing operator (??) *
// ************************************
// ES2020
restaurant.numGuests = 0;
// Nulish values: Null and Undefined {NOT 0 or ''} therfore only nullish values will short circuit the evaluation
const guestNew = restaurant.numGuests ?? 10;
console.log(guestNew);

// ************************************
// * Logical Assignment Operators *
// ************************************
// ES2021

const restaurant1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const restaurant2 = {
  name: 'La continental',
  owner: 'leonardo de caprio',
};
// OR assignment operator:- assign a value to a variable that is currently falsy( so zero can not be assigned)
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

// Nullish assignment operator overcome this problem with falsy values
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// AND  check for first occuring value to be false, if its true it return second value
// restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';

// AND operator will assign value to a variablle if its currently truthy.
restaurant1.owner &&= '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';

console.log(restaurant1);
console.log(restaurant2);

// ////////////////////////////////////
// /// Looping Arrays: for-of loop ////
// ////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// Here we will get an array containing [index, item]
for (const item of menu.entries()) {
  console.log(item);
}
// Destructuring item array as [i, el] = item
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

// it is an array of array, so we get an array item as a array at each index
console.log([...menu.entries()]);

console.log(restaurant);

// ////////////////////////////////////
// ///    Optional Chaining(?.)    ////
// ////////////////////////////////////

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.fri?.open);

// Example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays
const user = [{ name: 'jonas', email: 'hello@gmail.com' }];
console.log(user[0]?.name ?? 'user array empty');

if (user.length > 0) console.log(user[0].name);
else console.log('user array empty');

// Looping over the object (property-name/key or value )
// Property Name
const properties = Object.keys(restaurant.openingHours);

console.log(`We open on ${properties.length} days`);
for (const day of properties) {
  console.log(day);
}

// Property values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire opbjects
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);.

// [key, values]

// for (const x of entries) {
//   console.log(x);
// }
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// ////////////////////////////////////
// ///    Sets     ////
// ////////////////////////////////////

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const orderSet = new Set(['Pizza', 'Pasta', 'Pizza', 'Risoto', 'Pizza']);

console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('burger'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risoto');
// orderSet.clear();
console.log(orderSet);

// itration on set
for (const order of orderSet) {
  console.log(order);
}

// Ezample:
const staff = ['Waiter', 'chef', 'Manager', 'chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique);

// set to array conversion
const staffArray = [...new Set(staff)];
console.log(staffArray);

// ////////////////////////////////////
// ///    Maps : fundamentals    ////
// ////////////////////////////////////

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

// creating a new map
const restMap = new Map();

// to fill a map we use set()
restMap.set('name', 'Clasico Italiano');
restMap.set(1, 'Frienze, Italy');
restMap.set(2, 'Lisbon, Portugal');

console.log(restMap);

restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegitarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// to read data from a map
console.log(restMap.get('name'));
console.log(restMap.get(1));

// Example:
const time = 21;
console.log(
  restMap.get(time > restMap.get('open') && time < restMap.get('close'))
);

// Methods on maps
console.log(restMap.has('categories'));
restMap.delete(2);
// restMap.clear();

// objects as key
restMap.set([1, 2], 'Test');
console.log(restMap);
console.log(restMap.size);

console.log(restMap.get([1, 2])); // Undefined because this is different object in the heap memory
restMap.set(document.querySelector('h1'), 'This is heading 1');

// Example 2:
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 💯'],
  [false, 'Wrong answer 🤢'],
]);

console.log(question);

// Convert object to Maps
console.log(Object.entries(restaurant.openingHours)); // array of array syntax same as maps
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your options'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Converting maps to arrays
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
