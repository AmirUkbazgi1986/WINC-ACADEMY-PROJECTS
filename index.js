"use strict";
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

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${counterSelected(musicTypes)} options`);
});
function counterSelected(selectedObj) {
  let numberSelected = 0;
  // for (let i = 0; i < selectedObj.options.length; i++) {
  //   if (selectedObj.options[i].selected) {
  //     numberSelected++;
  //   }
  // }
  for (let option of selectedObj.options) {
    if (option.selected) numberSelected++;
  }
  return numberSelected;
}

const datingQuestions = [
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender?",
  "Which gender are you interested in dating?",
  "What is your main hobby?",
  "What is your favorite movie?",
];

let numbersQue = 0;
let arrayValue = [];
// while (true) {
//   if (numbersQue > datingQuestions.length - 1) {
//     break;
//   }
//   const result = prompt(datingQuestions[numbersQue]);
//   arrayValue.push(result);
//   numbersQue++;
// }
// for (let index of arrayValue) {
//   console.log(index);
// }
// for (let index of datingQuestions) {
//   console.log(index);
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
while (true) {
  const choice = prompt(
    "Menu:\n1. Say Hello\n2. Show Date\n3. Quit\nEnter your choice (1-3):"
  );

  // User pressed Cancel
  if (choice === null) {
    console.log("You canceled the menu. Exiting...");
    break;
  }

  switch (choice) {
    case "1":
      console.log("Hello!");
      break;
    case "2":
      console.log("Today's date is " + new Date().toLocaleDateString());
      break;
    case "3":
      console.log("Goodbye!");
      break; // Exit after saying goodbye
    default:
      console.log("Invalid choice. Try again.");
      continue; // Ask again
  }

  // Exit if user chose 3
  if (choice === "3") break;
}

console.log("Menu loop ended.");
