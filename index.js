"use strict";

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

// part 1 creating the user object

const mockData = [
  {
    first_name: "Tally",
    last_name: "Lillyman",
    age: 22,
    gender: "F",
    gender_interest: "X",
    location: "city",
    min_age_interest: 30,
    max_age_interest: 66,
  },
  {
    first_name: "Ryun",
    last_name: "Cobb",
    age: 22,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 32,
    max_age_interest: 82,
  },
  {
    first_name: "Sheffie",
    last_name: "Elecum",
    age: 45,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 29,
    max_age_interest: 61,
  },
  {
    first_name: "Putnam",
    last_name: "Haigh",
    age: 25,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 94,
  },
  {
    first_name: "Caldwell",
    last_name: "Semarke",
    age: 55,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 36,
    max_age_interest: 79,
  },
  {
    first_name: "Linn",
    last_name: "Cashin",
    age: 51,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 34,
    max_age_interest: 100,
  },
  {
    first_name: "Zebulon",
    last_name: "Bucksey",
    age: 45,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 22,
    max_age_interest: 97,
  },
  {
    first_name: "Lyndy",
    last_name: "Medler",
    age: 31,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 24,
    max_age_interest: 88,
  },
  {
    first_name: "Debora",
    last_name: "Braghini",
    age: 19,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 44,
  },
  {
    first_name: "Giacopo",
    last_name: "Spinke",
    age: 70,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 46,
    max_age_interest: 93,
  },
  {
    first_name: "Klarrisa",
    last_name: "Dust",
    age: 20,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 53,
  },
  {
    first_name: "Menard",
    last_name: "Raye",
    age: 32,
    gender: "X",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 23,
    max_age_interest: 66,
  },
  {
    first_name: "Martguerita",
    last_name: "Remington",
    age: 22,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 37,
  },
  {
    first_name: "Thomasin",
    last_name: "Torrans",
    age: 71,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 48,
    max_age_interest: 88,
  },
  {
    first_name: "Red",
    last_name: "Killgus",
    age: 30,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 21,
    max_age_interest: 54,
  },
  {
    first_name: "Hillyer",
    last_name: "Willshere",
    age: 45,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 24,
    max_age_interest: 64,
  },
  {
    first_name: "Fionna",
    last_name: "Sposito",
    age: 50,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 26,
    max_age_interest: 67,
  },
  {
    first_name: "Joni",
    last_name: "Vise",
    age: 34,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 23,
    max_age_interest: 58,
  },
  {
    first_name: "Allayne",
    last_name: "Mcmanaman",
    age: 44,
    gender: "X",
    gender_interest: "B",
    location: "city",
    min_age_interest: 26,
    max_age_interest: 73,
  },
  {
    first_name: "Glenn",
    last_name: "Lucius",
    age: 54,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 36,
    max_age_interest: 72,
  },
  {
    first_name: "Breanne",
    last_name: "Pochet",
    age: 48,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 73,
  },
  {
    first_name: "Garnette",
    last_name: "Lamputt",
    age: 34,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 26,
    max_age_interest: 55,
  },
  {
    first_name: "Joey",
    last_name: "Tretter",
    age: 55,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 92,
  },
  {
    first_name: "Gerrie",
    last_name: "Cadore",
    age: 32,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 22,
    max_age_interest: 55,
  },
  {
    first_name: "Koren",
    last_name: "Oaks",
    age: 34,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 23,
    max_age_interest: 53,
  },
  {
    first_name: "Bax",
    last_name: "Lorryman",
    age: 48,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 33,
    max_age_interest: 64,
  },
  {
    first_name: "Dannie",
    last_name: "Hexter",
    age: 56,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 34,
    max_age_interest: 81,
  },
  {
    first_name: "Marta",
    last_name: "Richel",
    age: 21,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 35,
  },
  {
    first_name: "Deloria",
    last_name: "Berni",
    age: 40,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 26,
    max_age_interest: 83,
  },
  {
    first_name: "Rowland",
    last_name: "Bestar",
    age: 42,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 26,
    max_age_interest: 56,
  },
  {
    first_name: "Howie",
    last_name: "Vicarey",
    age: 57,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 39,
    max_age_interest: 95,
  },
  {
    first_name: "Kellina",
    last_name: "Fitchew",
    age: 22,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 56,
  },
  {
    first_name: "Papagena",
    last_name: "Stains",
    age: 62,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 30,
    max_age_interest: 81,
  },
  {
    first_name: "Lesly",
    last_name: "Aherne",
    age: 37,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 62,
  },
  {
    first_name: "Willow",
    last_name: "Whitrod",
    age: 39,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 96,
  },
  {
    first_name: "Rachael",
    last_name: "Worton",
    age: 48,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 33,
    max_age_interest: 66,
  },
  {
    first_name: "Danya",
    last_name: "Rozec",
    age: 29,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 53,
  },
  {
    first_name: "Valentino",
    last_name: "Eisak",
    age: 35,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 61,
  },
  {
    first_name: "Mina",
    last_name: "Deer",
    age: 41,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 64,
  },
  {
    first_name: "Clo",
    last_name: "Dubois",
    age: 42,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 30,
    max_age_interest: 82,
  },
  {
    first_name: "Cory",
    last_name: "Itchingham",
    age: 46,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 60,
  },
  {
    first_name: "Janeta",
    last_name: "Heintzsch",
    age: 19,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 35,
  },
  {
    first_name: "Shaine",
    last_name: "Towse",
    age: 25,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 39,
  },
  {
    first_name: "Goddart",
    last_name: "Binstead",
    age: 41,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 26,
    max_age_interest: 55,
  },
  {
    first_name: "Lelia",
    last_name: "Tremathick",
    age: 52,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 73,
  },
  {
    first_name: "Roderigo",
    last_name: "Brailsford",
    age: 61,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 46,
    max_age_interest: 86,
  },
  {
    first_name: "Lynnelle",
    last_name: "Ramme",
    age: 26,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 46,
  },
  {
    first_name: "Sibby",
    last_name: "Kembry",
    age: 65,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 47,
    max_age_interest: 98,
  },
  {
    first_name: "Mildrid",
    last_name: "Maddams",
    age: 39,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 25,
    max_age_interest: 80,
  },
  {
    first_name: "Burke",
    last_name: "Deverose",
    age: 20,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 49,
  },
  {
    first_name: "Perry",
    last_name: "Blastock",
    age: 19,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 40,
  },
  {
    first_name: "Hermina",
    last_name: "Fardy",
    age: 43,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 22,
    max_age_interest: 73,
  },
  {
    first_name: "Mariel",
    last_name: "Fearick",
    age: 27,
    gender: "F",
    gender_interest: "X",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 40,
  },
  {
    first_name: "Orton",
    last_name: "Norssister",
    age: 58,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 44,
    max_age_interest: 99,
  },
  {
    first_name: "Mayne",
    last_name: "Ottewell",
    age: 48,
    gender: "F",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 30,
    max_age_interest: 62,
  },
  {
    first_name: "Innis",
    last_name: "Golightly",
    age: 65,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 40,
    max_age_interest: 78,
  },
  {
    first_name: "Andy",
    last_name: "Parfrey",
    age: 19,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 35,
  },
  {
    first_name: "Phebe",
    last_name: "Reven",
    age: 41,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 68,
  },
  {
    first_name: "Marcello",
    last_name: "Spreckley",
    age: 40,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 21,
    max_age_interest: 65,
  },
  {
    first_name: "Goober",
    last_name: "Andreichik",
    age: 30,
    gender: "F",
    gender_interest: "M",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 59,
  },
  {
    first_name: "Dulcie",
    last_name: "Sedgman",
    age: 27,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 18,
    max_age_interest: 40,
  },
  {
    first_name: "Barbey",
    last_name: "Castri",
    age: 30,
    gender: "X",
    gender_interest: "B",
    location: "city",
    min_age_interest: 19,
    max_age_interest: 47,
  },
  {
    first_name: "Shaina",
    last_name: "Sterrie",
    age: 44,
    gender: "M",
    gender_interest: "F",
    location: "city",
    min_age_interest: 35,
    max_age_interest: 71,
  },
  {
    first_name: "Hoebart",
    last_name: "Lutwidge",
    age: 27,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 19,
    max_age_interest: 38,
  },
  {
    first_name: "Ashlie",
    last_name: "Conradie",
    age: 24,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 44,
  },
  {
    first_name: "Jolie",
    last_name: "Dyment",
    age: 44,
    gender: "F",
    gender_interest: "X",
    location: "city",
    min_age_interest: 28,
    max_age_interest: 67,
  },
  {
    first_name: "Anett",
    last_name: "Byway",
    age: 50,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 80,
  },
  {
    first_name: "Althea",
    last_name: "Cescoti",
    age: 29,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 55,
  },
  {
    first_name: "Barbara-anne",
    last_name: "Manser",
    age: 37,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 49,
  },
  {
    first_name: "Jammal",
    last_name: "Gaenor",
    age: 26,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 38,
  },
  {
    first_name: "Agustin",
    last_name: "Sennett",
    age: 22,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 40,
  },
  {
    first_name: "Caprice",
    last_name: "Juszkiewicz",
    age: 25,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 69,
  },
  {
    first_name: "Nap",
    last_name: "Stilgoe",
    age: 34,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 19,
    max_age_interest: 49,
  },
  {
    first_name: "Farlee",
    last_name: "Stainton",
    age: 45,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 77,
  },
  {
    first_name: "Harper",
    last_name: "Dignan",
    age: 24,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 50,
  },
  {
    first_name: "Rozalin",
    last_name: "Ruckman",
    age: 34,
    gender: "F",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 48,
  },
  {
    first_name: "Melodie",
    last_name: "Birney",
    age: 48,
    gender: "F",
    gender_interest: "F",
    location: "city",
    min_age_interest: 25,
    max_age_interest: 95,
  },
  {
    first_name: "Graham",
    last_name: "Reyner",
    age: 26,
    gender: "F",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 45,
  },
  {
    first_name: "Marijn",
    last_name: "Isham",
    age: 31,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 97,
  },
  {
    first_name: "Elia",
    last_name: "Gioan",
    age: 56,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 94,
  },
  {
    first_name: "Erma",
    last_name: "Derrett",
    age: 42,
    gender: "X",
    gender_interest: "X",
    location: "city",
    min_age_interest: 27,
    max_age_interest: 100,
  },
  {
    first_name: "Ingrid",
    last_name: "Mizen",
    age: 23,
    gender: "M",
    gender_interest: "B",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 48,
  },
  {
    first_name: "Murray",
    last_name: "Plom",
    age: 33,
    gender: "X",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 50,
  },
  {
    first_name: "Bruno",
    last_name: "Sidary",
    age: 50,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 72,
  },
  {
    first_name: "Inglis",
    last_name: "Bolden",
    age: 63,
    gender: "M",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 30,
    max_age_interest: 75,
  },
  {
    first_name: "Marion",
    last_name: "Dessant",
    age: 37,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 22,
    max_age_interest: 53,
  },
  {
    first_name: "Akim",
    last_name: "Lade",
    age: 51,
    gender: "M",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 30,
    max_age_interest: 94,
  },
  {
    first_name: "Kory",
    last_name: "Rebert",
    age: 46,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 27,
    max_age_interest: 79,
  },
  {
    first_name: "Agatha",
    last_name: "Dun",
    age: 29,
    gender: "X",
    gender_interest: "M",
    location: "city",
    min_age_interest: 19,
    max_age_interest: 49,
  },
  {
    first_name: "Aretha",
    last_name: "Baumber",
    age: 24,
    gender: "F",
    gender_interest: "M",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 48,
  },
  {
    first_name: "Barret",
    last_name: "Diggles",
    age: 54,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 23,
    max_age_interest: 89,
  },
  {
    first_name: "Natale",
    last_name: "Adess",
    age: 32,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 25,
    max_age_interest: 49,
  },
  {
    first_name: "Judye",
    last_name: "Jacklings",
    age: 28,
    gender: "M",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 20,
    max_age_interest: 48,
  },
  {
    first_name: "Modestine",
    last_name: "Standish",
    age: 57,
    gender: "M",
    gender_interest: "X",
    location: "city",
    min_age_interest: 34,
    max_age_interest: 97,
  },
  {
    first_name: "Harwell",
    last_name: "Sexty",
    age: 36,
    gender: "X",
    gender_interest: "F",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 60,
  },
  {
    first_name: "Harriot",
    last_name: "Leedal",
    age: 27,
    gender: "M",
    gender_interest: "M",
    location: "city",
    min_age_interest: 21,
    max_age_interest: 44,
  },
  {
    first_name: "Matelda",
    last_name: "Ellam",
    age: 38,
    gender: "F",
    gender_interest: "F",
    location: "rural",
    min_age_interest: 18,
    max_age_interest: 67,
  },
  {
    first_name: "Marleah",
    last_name: "Leggan",
    age: 62,
    gender: "X",
    gender_interest: "X",
    location: "rural",
    min_age_interest: 39,
    max_age_interest: 97,
  },
  {
    first_name: "Gaultiero",
    last_name: "Lawey",
    age: 47,
    gender: "X",
    gender_interest: "B",
    location: "rural",
    min_age_interest: 29,
    max_age_interest: 97,
  },
  {
    first_name: "Payton",
    last_name: "Lonsbrough",
    age: 49,
    gender: "F",
    gender_interest: "B",
    location: "city",
    min_age_interest: 24,
    max_age_interest: 70,
  },
];

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
const user = {};
let minAgeInterest;
let maxAgeInterest;

for (let i = 0; i < questions.length; i++) {
  let answer;

  while (true) {
    answer = prompt(questions[i]);

    // Trim the answer
    const trimmedValue = answer.trim();

    // 1. case 1 Validate first and last name (letters + spaces only)
    if (i === 0 || i === 1) {
      if (/^[a-zA-Z\s]+$/.test(trimmedValue) && trimmedValue.length > 2) break;
      alert("Invalid input! Please use letters only.");
    }
    // 2. case 2 Validate age is a number and ranges (18-100)
    else if (i === 2) {
      const num = Number(trimmedValue);
      if (/^\d+$/.test(trimmedValue) && num >= 18 && num <= 100) break;
      alert("Invalid age! Enter a number between 18 and 100");
    }
    //3. case 3  validating gender (M/F/X)
    else if (i === 3 || i === 4) {
      if (
        trimmedValue.toLowerCase() === "m" ||
        trimmedValue.toLowerCase() === "f" ||
        trimmedValue.toLowerCase() === "x"
      )
        break;
      alert("Please enter valid gender? M/F/X");
    }
    //4. case 4  validating location (city/rural)
    else if (i === 5) {
      if (
        trimmedValue.toLowerCase() === "city" ||
        trimmedValue.toLowerCase() === "rural"
      )
        break;
      alert("Please enter valid location? city/rural");
    }
    // 5. case 5 Validate minimum age interest (18-100)
    else if (i === 6) {
      minAgeInterest = Number(trimmedValue);
      if (
        /^\d+$/.test(trimmedValue) &&
        minAgeInterest >= 18 &&
        minAgeInterest <= 100
      )
        break;
      alert("Invalid input! Enter a number between 18 and 100.");
    }
    //6. case 6 Validate maximum age interest (18-100)
    else if (i === 7) {
      maxAgeInterest = Number(trimmedValue);
      console.log(maxAgeInterest, minAgeInterest);
      if (
        /^\d+$/.test(trimmedValue) &&
        maxAgeInterest >= 18 &&
        maxAgeInterest <= 100 &&
        maxAgeInterest > minAgeInterest
      )
        break;
      alert(
        "Invalid input! Enter a number between 18 and 100. And maximum age interest should be greater than minimum age interest"
      );
    }
  }

  // Store the answer
  // if (i === 0) answers.first_name = answer.trim();
  // else if (i === 1) answers.last_name = answer.trim();
  // else if (i === 2) answers.age = Number(answer.trim());
  // else if (i === 3) answers.gender = answer.trim().toUpperCase();
  // else if (i === 4) answers.gender_interest = answer.trim().toUpperCase();
  // else if (i === 5) answers.location = answer.trim();
  // else if (i === 6) answers.min_age_interest = Number(answer.trim());
  // else if (i === 7) answers.max_age_interest = Number(answer.trim());
  if (i === 0) {
    user.first_name = answer.trim().charAt(0).toUpperCase() + answer.slice(1);
  } else if (i === 1) {
    user.last_name = answer.trim().charAt(0).toUpperCase() + answer.slice(1);
  } else if (i === 2) user.age = Number(answer.trim());
  else if (i === 3) user.gender = answer.trim().toUpperCase();
  else if (i === 4) user.gender_interest = answer.trim().toUpperCase();
  else if (i === 5) user.location = answer.trim();
  else if (i === 6) user.min_age_interest = Number(answer.trim());
  else if (i === 7) user.max_age_interest = Number(answer.trim());
}

// part 2 comparing and finding the matches

let matches = [];
let count = 0;

for (let i = 0; i < mockData.length; i++) {
  let person = mockData[i];

  const yourAgeMatchesTheirRange =
    user.age >= person.min_age_interest && user.age <= person.max_age_interest;

  const theirAgeMatchesYourRange =
    person.age >= user.min_age_interest && person.age <= user.max_age_interest;

  const theirGenderInterestMatchesYou = person.gender_interest === user.gender;

  const yourGenderInterestMatchesThem = user.gender_interest === person.gender;

  const sameLocation = person.location === user.location;
  if (
    yourAgeMatchesTheirRange &&
    theirAgeMatchesYourRange &&
    theirGenderInterestMatchesYou &&
    yourGenderInterestMatchesThem &&
    sameLocation
  ) {
    matches.push(person);
    count++;
  }
}
// Print matches in readable format
console.log(`Total matches found: ${count}`);
for (let i = 0; i < matches.length; i++) {
  const m = matches[i];
  console.log(
    `${i + 1}. ${m.first_name} ${m.last_name} — Age: ${m.age}, Location: ${
      m.location
    }`
  );
}
