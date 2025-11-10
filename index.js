"use strict";
const header = document.querySelector(".log h1");
const imageLogo = document.querySelector(".log img");

// imageLogo.addEventListener("click", function () {
//   const answer = prompt("what is your name?");
//   header.innerHTML = `Hello ${answer}, How are you?`;
//   let sign = prompt("what is your  sign?");
//   if (sign === null) {
//     header.innerHTML = "oky, may be next time!";
//   } else if (sign.toLowerCase() === "") {
//     header.innerHTML = "Don't shy, enter your sign!";
//   } else if (sign.toLowerCase() === "scorpio") {
//     header.innerHTML = "Wow! I am a Scorpio too";
//   } else {
//     header.innerHTML = `${sign} is my favorite sign!`;
//   }
// });

const generateRandomNum = () => Math.floor(Math.random() * 10);
const x1 = String(generateRandomNum());
const x2 = String(generateRandomNum());
const x3 = String(generateRandomNum());
const x4 = String(generateRandomNum());
const x5 = String(generateRandomNum());
const x6 = String(generateRandomNum());
console.log(`${x1}${x2}${x3}${x4}${x5}${x6}`);
