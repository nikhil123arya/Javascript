// let country = "India";
// let continent = "Asia";
// let population = 1393.4;
// console.log(country);
// console.log(continent);
// console.log(population);

const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Marks BMI (${markBMI}) is higher than Johns BMI (${johnBMI}) `);
} else {
  console.log(`johns BMI (${johnBMI}) is higher than Marks BMI (${mab})`);
}

// ASSIGNMENT 3

// const scoreDolphines = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas) {
//   console.log("Dolphines wins the trophy 🏆");
// } else if (scoreKoalas > scoreDolphines) {
//   console.log("Koalas wins the trophy 🏆");
// } else {
//   console.log("Both wins the trophy");
// }

// BONUS 1
const scoreDolphines = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphines, scoreKoalas);

if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
  console.log("Dolphines wins the trophy 🏆");
} else if (scoreKoalas > scoreDolphines && scoreKoalas >= 100) {
  console.log("Koalas wins the trophy 🏆");
} else if (
  scoreDolphines === scoreKoalas &&
  scoreDolphines >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both wins the trophy");
} else {
  console.log("No one wins the trophy 😥");
}

// CHALLENGE 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? (15 * bill) / 100 : (20 * bill) / 100;
console.log(
  `The Bill was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  } `
);
