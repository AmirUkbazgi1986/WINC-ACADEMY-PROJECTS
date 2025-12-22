"use strict";
import { mockData } from "./mockData.js";

// 1. Refactoring dating questions Project From Winc Academy
/---------------------------------------------------------/;

// let datingAnswers = [];
// const datingQuestions = [
//   "What is your first name?",
//   "What is your last name?",
//   "What is your age?",
//   "Where do you live?",
//   "What is your gender? (male,female,other)",
//   "Which gender are you interested in dating?",
//   "What is your main hobby?",
//   "What is your favorite movie?",
// ];
// for (let question of datingQuestions) {
//   const answer = prompt(question);
//   if (answer.length < 2) {
//     console.log("The answer is too short!");
//   }
//   datingAnswers.push(answer);
// }
// for (let i = 0; i < datingAnswers.length; i++) {
//   const question = datingQuestions[i];
//   const answer = datingAnswers[i];
//   console.log(`Question ${i + 1}: ${question} `);
//   console.log(`Answer: ${answer}`);
//   console.log("");
// }

/---------------------------------------------------------/;

// 2. buidling a pyramid from winc academy
/---------------------------------------------------------/;

// let levelNum;

// while (true) {

//   levelNum = prompt("How many levels should the pyramid have?");

//   if (levelNum === "") {
//     alert("please enter a level number");
//     continue;
//   }
//   if (isNaN(levelNum)) {
//     alert("please enter a real number!");
//     continue;
//   }

//   let level = Number(levelNum);

//   if (level < 3) {
//     alert("The number of levels should be greater or equall to 3.");
//     continue;
//   }
//   if (level >= 15) {
//     alert("You are building too close to the heaven!");
//     continue;
//   }

//   let characterStraight = "|";
//   let characterEqual = "=";
//   let characterHash = "#";

//   if (level <= 5) {
//     for (let i = 1; i <= level; i++) {
//       const space = " ".repeat(level - i);
//       const block = characterStraight.repeat(2 * i - 1);
//       console.log(space + block);
//     }
//     break;
//   } else if (level <= 10) {
//     for (let i = 1; i <= level; i++) {
//       const space = " ".repeat(level - i);
//       const block = characterEqual.repeat(2 * i - 1);
//       console.log(space + block);
//     }
//     break;
//   } else if (level < 15) {
//     for (let i = 1; i <= level; i++) {
//       const space = " ".repeat(level - i);
//       const block = characterHash.repeat(2 * i - 1);
//       console.log(space + block);
//     }
//     break;
//   }
// }

/---------------------------------------------------------/;

/---------------------------------------------------------/;
// const amir = {
//   name: "Amir",
//   place: "Almkerk",
// };
// amir.age = 39;
// amir.gender = "male";
// amir.preferences = {
//   likeKids: true,
//   hobbies: ["fitness", "Film watching", "football"],
// };
// const yorda = {
//   name: "Yorda",
//   place: "Hank",
// };
// yorda.age = 35;
// yorda.gender = "female";
// yorda.preferences = {
//   likeKids: true,
//   hobbies: ["fitness", "Traveling", "chatting", "sex"],
// };

// if (amir.preferences.likeKids && yorda.preferences.likeKids) {
//   console.log("We both love kids!");
// }

// console.log(
//   Object.keys(yorda.preferences.hobbies).length,
//   Object.keys(amir.preferences.hobbies).length
// );
// if (
//   Object.keys(amir.preferences.hobbies).length ===
//   Object.keys(yorda.preferences.hobbies).length
// ) {
//   console.log("You have the same amount of preferences!");
// } else {
//   console.log("You haven't the same amount of preferences!");
// }

// console.log(yorda);

// const entries = Object.entries(yorda);
// console.log(entries);

// for (let entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   if (key === "preferences") {
//     let hobbies = value.hobbies.join(", ");

//     console.log(`The hobbies are ${hobbies}`);

//   } else {
//     console.log(`The ${key} is ${value}`);
//   }
// }
/---------------------------------------------------------/;

// Some more practices

// let hobbies = "";
// let wantsToAddMoreHobbies = true;
// while (wantsToAddMoreHobbies) {
//   const answer = prompt("Do you want to add more hobbies? Y/N");
//   if (answer === "Y") {
//     const newHobbies = prompt("What is another hobby you have?");
//     hobbies = `${hobbies} ${newHobbies}`;
//   } else if (answer === "N" || answer === null) {
//     wantsToAddMoreHobbies = false;
//   } else {
//     console.log("You answer was unclear");
//   }
// }
// console.log(`Your hobbies are: ${hobbies}`);

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   const musicTypes = document.selectForm.musicTypes;
//   console.log(`You have selected ${counterSelected(musicTypes)} options`);
// });
// function counterSelected(selectedObj) {
//   let numberSelected = 0;
// for (let i = 0; i < selectedObj.options.length; i++) {
//   if (selectedObj.options[i].selected) {
//     numberSelected++;
//   }
// }
//   for (let option of selectedObj.options) {
//     if (option.selected) numberSelected++;
//   }
//   return numberSelected;
// }

// const workOut = ["pushUp", "deadlift", "squat", "benchPress"];
// for (let i = 0; i < workOut.length; i++) {
//   for (let j = 1; j < 4; j++) {
//     console.log(`${workOut[i]}: set ${j}`);
//   }
// }

// let calculationDo = true;
// while (calculationDo) {
//   const question = prompt("Do you want calculation? Y/N");
//   if (question === "N") {
//     break;
//   }
//   const first = +prompt("What is the first number?");
//   const value = prompt("Which operation do you want to do?");
//   const second = +prompt("What is the second number?");
//   let result;

//   if (value === "+") {
//     result = first + second;
//   } else if (value === "-") {
//     result = first - second;
//   } else if (value === "*") {
//     result = first * second;
//   } else if (value === "/") {
//     result = first / second;
//   }

//   const calculator = alert(`${first} ${value} ${second}=${result}`);
// }

// let order = true;
// let orderArray = [];
// while (order) {
//   const question = prompt("Do you want to order? Y/N");
//   if (question === "N") {
//     break;
//   }
//   const listenOrder = prompt("What do you want to order?");
//   orderArray.push(listenOrder);
// }
// alert(`You orders are: ${orderArray}`);
// while (true) {
//   const choice = prompt(
//     "Menu:\n1. Say Hello\n2. Show Date\n3. Quit\nEnter your choice (1-3):"
//   );

// User pressed Cancel
// if (choice === null) {
//   console.log("You canceled the menu. Exiting...");
//   break;
// }

// switch (choice) {
//   case "1":
//     console.log("Hello!");
//     break;
//   case "2":
//     console.log("Today's date is " + new Date().toLocaleDateString());
//     break;
//   case "3":
//     console.log("Goodbye!");
// break; // Exit after saying goodbye
// default:
//   console.log("Invalid choice. Try again.");
//   continue; // Ask again
// }

// Exit if user chose 3
//   if (choice === "3") break;
// }

// console.log("Menu loop ended.");

// while exercise
// 1. count from 1 to 10

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 2. count down from 10 to 0

// let j = 10;
// while (j >= 0) {
//   console.log(j);
//   j--;
// }

// 3. Print even numbers from 2 to 20;

// let lowNum = 2;
// let highNum = 20;
// while (lowNum <= highNum) {
//   if (lowNum % 2 === 0) {
//     console.log(lowNum);
//   }
//   lowNum++;
// }

// let lowNum = 1;
// let highNum = 20;
// while (lowNum < highNum) {
//   lowNum++;
//   if (lowNum % 2) {
//     continue;
//   }
//   console.log(lowNum);
// }
// let lowNum = 0;
// let highNum = 20;
// while (lowNum < highNum) {
//   lowNum++;
//   if (!(lowNum % 2)) {
//     continue;
//   }
//   console.log(lowNum);
// }

//  4. Sum of the first 10 numbers;

// let firstNum = 1;
// let lastNum = 10;
// let sum = 0;
// while (firstNum <= lastNum) {
//   sum += firstNum;
//   firstNum++;
// }
// console.log(sum);

// 5. Ask user until they type 'stop';

// while (true) {
//   const question = prompt("Enter something. yes/no");
//   if (question.toLowerCase() === "no") break;
//   console.log(question);
// }

// 6.Generate multiplication table;

// const paintLivingRoomProject = [
//   ["paint", "sand paper", "brushes", "wallpaper stripper"],
//   ["colors", "painting techniques", "music for DIY"],
//   ["strip wallpaper", "clean walls", "sand surfaces", "apply paint"],
//   ["colors", "who does what", "budget", "sand paper"],
// ];
// for (let list of paintLivingRoomProject) {
//   console.log("---------------");
//   console.log(`This list has ${list.length} items.`);
//   console.log("---------------");
//   for (let item of list) {
//     console.log(item);
//   }
// }

// 7. Buying staffs from a grocery

// const thingsToBuy = [
//   "pants",
//   "sand paper",
//   "burshes",
//   "wallpaper stripper",
//   "paint roller",
// ];
// for (let item of thingsToBuy) {
//   if (item === "sand paper") continue;
//   console.log(`We need to buy ${item}`);
// }

// 8. counting numbers of vowels and consenants

// using while loop
// let name = "Hey, my name is amir. I live in Almkerk";
// let numbersOfVowels = 0;
// let numbersOfConsonant = 0;
// for (const letter of name) {
//   if (letter === " " || letter === "." || letter === ",") continue;

//   if ("aeiou".includes(letter.toLowerCase())) {
//     console.log(`${letter} is a vowel`);
//     numbersOfVowels++;
//   } else {
//     numbersOfConsonant++;
//   }
// }
// console.log(numbersOfVowels, numbersOfConsonant);

// 9. creating multiplication table

// while (true) {
//   const question = prompt("Do you want to enter a number? Yes/No");
//   if (question.toLowerCase() === "no") {
//     break;
//   }
//   const answer = +prompt("Enter the number");
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${answer} * ${i}`);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j}`);
//   }
// }

// 10. Happy new year count down

// let countDown = 10;
// for (let count = countDown; count > 0; count--) {
//   console.log(count);
// }
// console.log("Happy New Year!");

// 11.Finding a dating ranging in ages

// console.log(
//   "Please tell us which of the following age ranges you are interested in dating."
// );
// const ageStep = 10;
// for (let age = 20; age < 110; age += ageStep) {
//   const ageLowRange = age;
//   const ageHighRange = age + ageStep;
//   console.log(
//     `Are you interested in dating people from ${ageLowRange} to ${ageHighRange}? Y/N`
//   );
// }

// 12. capital cities of a country

// const countries = ["Afghanistan", "Albania", "Algeria", "Andorra"];
// const cities = ["Kabul", "Tirana", "Algiers", "Andorra la Vella"];
// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];
//   const city = cities[i];
//   console.log(`The capital of ${country} is ${city}`);
// }

// 13. playing a fizzbuzz game

// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

const questions = [
  "What is your first Name?",
  "What is your last Name?",
  "What is your age",
  "What is your gender? M/F/X",
  "What is your gender interest? M/F/X",
  "What is your location? City/Rural",
  "What is the minimum age interest? 18-100",
  "What is the maximum age interest? 18-100",
];

// let capitals = ["Asmara", "Addis Ababa", "Amsterdam", "Khartum", "Paris"];
// let countries = [];
// let correct = false;
// let mistakeCounter = 0;

// for (let i = 0; i < capitals.length; i++) {
//   let answer;
//   while (!correct) {
//     answer = prompt(`${capitals[i]} is the capital city of ? `).toLowerCase();
//     if (i === 0) {
//       if (answer === "eritrea") {
//         break;
//       }
//       mistakeCounter++;
//       console.log("Wrong answer! Try again");
//     } else if (i === 1) {
//       if (answer === "ethiopia") {
//         break;
//       }
//       mistakeCounter++;
//       console.log("Wrong answer! Try again");
//     } else if (i === 2) {
//       if (answer === "nederland") {
//         break;
//       }
//       mistakeCounter++;
//       console.log("Wrong answer! Try again");
//     } else if (i === 3) {
//       if (answer === "sudan") {
//         break;
//       }
//       mistakeCounter++;
//       console.log("Wrong answer! Try again");
//     } else if (i === 4) {
//       if (answer === "france") {
//         break;
//       }
//       mistakeCounter++;
//       console.log("Wrong answer! Try again");
//     }
//   }
//   if (i === 0) countries.push(answer);
//   if (i === 1) countries.push(answer);
//   if (i === 2) countries.push(answer);
//   if (i === 3) countries.push(answer);
//   if (i === 4) countries.push(answer);
// }
// if (mistakeCounter > 5) {
//   console.log(`You made ${mistakeCounter} mistakes. You fail try again`);
// } else {
//   console.log(`You made ${mistakeCounter} mistakes. You passed the test`);
// }

// console.log(countries);
const players = ["amir", "namik", "amna"];

for (let i = 0; i < players.length; i++) {
  let answer;
  while (true) {
    answer = prompt(
      ` ${players[i]}, what is the capital city of Eritrea?`
    ).toLowerCase();

    if (answer === "asmara") {
      break;
    }
    alert("Try again!");
  }
}
