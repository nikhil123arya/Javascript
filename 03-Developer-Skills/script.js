// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// PROBLEM:
// We work for a company building smart home thermometer. Our most Recent Task is this:
//"Given n array of temperatures of one day , Calculate the temperature aplitude. Keep in mind that somtome there might be a sensor error."

const temperatures = [3 - 2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem and then only jump to solution
// - What is temperature aplitude? Answer: the difference between height and lowest temperature
// - How to compute max and min temperatures?
// - What is a sensor error and what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find the max vlaue in the temp array
// - Find the min vlaue in the temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currentTemp = arr[i];
    if (typeof arr[i] === 'string') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([1, 3, 5, 8, 34, 43]);
const aplitude = calcTempAmplitude(temperatures);
console.log(aplitude);

// Function should receive 2 arrays of temps
// - merge two arrays and then perform the functionality

const calcTempAmplitudeNew = function (arr1, arr2) {
  const arr = arr1.concat(arr2);
  console.log(arr);

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const currentTemp = arr[i];
    if (typeof arr[i] === 'string') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const aplitudeNew = calcTempAmplitudeNew([1, 3, 5], [4, 6, 8]);
console.log(aplitudeNew);

//  ************** DEBUGGING ****************
// Function to convert temperature in celsius to kelvin.

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: prompt('Degree celsius:'),
    value: 10,
  };

  console.table(measurement);

  debugger;
  console.log(measurement.value);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

// Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Test data:
// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]

// Sol:- Breaking the problem into sub-problems
//      - Transform array into String
//      - Transform each element to String and add Degree C
//      - Day ( index + 1)

const printForcast = function (arr) {
  let str = '';
  let i = 0;
  while (i < arr.length) {
    str = str + `${arr[i]}ºC in ${i + 1} day...`;
    i++;
  }
  console.log('...' + str);
};

printForcast([1, 2, 4, 5]);
