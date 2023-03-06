'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements)

const calcDesplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} ₹`;
};

// calcDesplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements)

const user = 'Steven Thomsas Williams'; // stw

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner.split(' ').map(ownername => ownername[0]).join('').toLowerCase();

  })
}
createUsernames(accounts);
// console.log(accounts);

const updatedUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDesplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
}
//////////////////////////////////////
//////// Event Handlers //////////////

// Implementing login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value))
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back,${currentAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity = 100;

  //clear input fields
  inputLoginUsername.value = inputLoginPin.value = null;
  inputLoginPin.blur();

  // updated UI
  updatedUI(currentAccount);

  // // Display movements
  // displayMovements(currentAccount.movements);
  // // Display balance
  // calcDesplayBalance(currentAccount);
  // // Display summary
  // calcDisplaySummary(currentAccount)
})

// Implementing transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
  inputTransferAmount.value = inputTransferTo.value = null;
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username) {
    console.log('Transfer valid')
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount)

    // updated UI
    updatedUI(currentAccount)
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // check for the condition of the loan
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movements
    currentAccount.movements.push(amount)
    // update Ui
    updatedUI(currentAccount)
  }
  inputLoanAmount.valuef = ' ';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin) {

    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index)

    // Delete account
    accounts.splice(index, 1)

    // hide UI
    containerApp.style.opacity = 0;
    console.log('delete')
  }
  inputCloseUsername.value = inputClosePin.value = ' ';

})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// challenge
// const dogsJulia = [3, 5, 2, 12, 7]
// const dogsKate = [4, 1, 15, 8, 3]
// const checkDogs = function (arr1, arr2) {
//   const arrNew = [...arr1.slice(1, -1), ...arr2];
//   arrNew.forEach(function (value, i) {
//     const check = value < 3 ? 'puppy' : 'adult';
//     console.log(`"Dog number ${i + 1} is an ${check}, and is ${value} years old`);
//   })

// }
// checkDogs(dogsJulia, dogsKate)

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // start extracting at that point, till end
console.log(arr.slice(2, 4)); // the end parameter is not included in the output
console.log(arr.slice(-1)); // extract the last element from the array
console.log(arr.slice(-2)); // extract the last two elements from the array
console.log(arr.slice(1, -2)); // extract from index 1 and exclude the last two elements

console.log(arr.slice()); // create the shallow copy of the same array

// SPLICE
// console.log(arr.splice(2)); // delete the extracted elements from the array.
console.log(arr.splice(-1)); // removes the last element of the array
console.log(arr);
console.log(arr.splice(1, 2)); // second parameter The number of elements to remove.
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // mutated the original array

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));


// At method

// const arr = [20, 12, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element of the array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));

//////////////////////////////////////
// For Each Loop


for (const item of movements) {
  if (item > 0) {
    console.log(`You deposited ${item}`);
  } else {
    console.log(`You withdrew ${Math.abs(item)}`);
  }
}

// forEach : technically its a Higher order function, that will call a callback function in each iteration.
//         : In each iteration it will pass in the current element of the array as an argument
console.log('------for each-------');

movements.forEach(function (item) {
  if (item > 0) {
    console.log(`You deposited ${item}`);
  } else {
    console.log(`You withdrew ${Math.abs(item)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ..

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function (movement, index, array) {
  console.log(array);
  if (movement > 0) {
    console.log(`Movements ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

////////////////////////////////////////////
/// For Each with Maps and Sets            /
////////////////////////////////////////////

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// Map.forEach()
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

/////////////////////////////////////////////////////////
//  Data Traansformation with Map Filter and Reduce    //
/////////////////////////////////////////////////////////

// The map() method creates a new array having the results provided by a callback function on every element in the calling array.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * euroToUsd;
})
console.log(movementsUsd)

const movementsUsdArrow = movements.map(mov => mov * euroToUsd)
console.log(movementsUsdArrow)

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);



// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const deposits = movements.filter(mov => mov > 0);
console.log(deposits)

// using for of
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals)

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// snow ball effect: accumulator => snowball
// syntax: reduce(callback function, initial value of the accumulator)

const balance = movements.reduce(function (acc, currVal, i, arr) {
  return acc + currVal;
}, 0)
console.log(balance);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

// challenge #2
const ages = [5, 2, 4, 1, 15, 8, 3]

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => {
    return age <= 2 ? age * 2 : 16 + (age * 4);
  })
  console.log(humanAge);
}

console.log(calcAverageHumanAge(ages))

///////////////////////////////////////
//  The Magic Of Chainnig Methods    //
///////////////////////////////////////

const euroToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

// challange
// const calcAverageHumanAge = ages => {
//   return ages
//     .map(age => age < 3 ? age * 2 : age * 4 + 16)
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))

//////////////////////
// Find() method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements)
console.log(firstWithdrawal)
console.log(movements.includes(10))

// findIndex()
console.log(accounts)
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)


////////////////////////////////////////////////////////
//////   some() and every() flat() , flatMap()     /////
////////////////////////////////////////////////////////

console.log(movements)

// it checks for EQUALITY
console.log(movements.includes(-130))

// SOME
// it checks for CONDITION
console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits);

// EVERY
// ---> returns true when all of the element in the array satisfy the given condition

console.log(movements.every(mov => mov > 0))
console.log(account4.movements.every(mov => mov > 0))

// Seprate callback function
const deposit = mov => mov > 0;
console.log(movements.every(deposit))
console.log(movements.some(deposit))
console.log(movements.filter(deposit))


// Flat
// --> introduced in ES2019
// --> falt method goes one method deep when flattenimg the array
const arr = [[1, 2, 3], 4, 5, [6, 7]]
console.log(arr.flat())

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7]
console.log(arrDeep.flat(2))

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat()
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
// console.log(overallBalance)

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance)

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance2)


////////////////////////////////
////   Sorting Arrays     //////
////////////////////////////////

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort())
console.log(owners)

// Numbers
console.log(movements)
console.log(movements.sort())

// return < 0, A, B
// return > 0, B, A

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
})

// movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// })
movements.sort((a, b) => b - a);
console.log(movements)


////////////////////////////////////////////////
console.log([1, 2, 3, 4, 5, 6, 7])
console.log(new Array(1, 3, 3, 4, 5, 6, 7))

const x = new Array(7)
console.log(x)
// we cannot call map method here

// fill

x.fill(5)
console.log(x)

// fill from 3 to 5
x.fill(1, 3, 5)
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y)

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z)
// const z1 = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z1)

// const rand = Array.from({ length: 100 }, () => Math.round(Math.random() * 6))
// console.log(rand);

// convert to Arrays from NodeList: an array like strucuture
// result of document.querry selector is an NodeList

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

*/

///////////////////////////////
// Array practice //
// const bankDepositSum = accounts.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0)
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0)

console.log(bankDepositSum)

// 1.
const sum = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? sums.deposit += cur : sums.withdrawals += cur;
      return sums
    }, { deposit: 0, withdrawals: 0 }
  );
console.log(sum)