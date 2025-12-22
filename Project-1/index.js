// 1. step 1 importing the mockData from mockData.js file
import { mockData } from "./mockData.js";

// 2. step 2 creating the user object
console.log(mockData);
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
      console.log("Invalid input! Please use letters only.");
    }
    // 2. case 2 Validate age is a number and ranges (18-100)
    else if (i === 2) {
      const num = Number(trimmedValue);
      if (/^\d+$/.test(trimmedValue) && num >= 18 && num <= 100) break;
      console.log("Invalid age! Enter a number between 18 and 100");
    }
    //3. case 3  validating gender (M/F/X)
    else if (i === 3 || i === 4) {
      if (
        trimmedValue.toLowerCase() === "m" ||
        trimmedValue.toLowerCase() === "f" ||
        trimmedValue.toLowerCase() === "x"
      )
        break;
      console.log("Please enter valid gender? M/F/X");
    }
    //4. case 4  validating location (city/rural)
    else if (i === 5) {
      if (
        trimmedValue.toLowerCase() === "city" ||
        trimmedValue.toLowerCase() === "rural"
      )
        break;
      console.log("Please enter valid location? city/rural");
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
      console.log("Invalid input! Enter a number between 18 and 100.");
    }
    //6. case 6 Validate maximum age interest (18-100)
    else if (i === 7) {
      maxAgeInterest = Number(trimmedValue);
      // console.log(maxAgeInterest, minAgeInterest);
      if (
        /^\d+$/.test(trimmedValue) &&
        maxAgeInterest >= 18 &&
        maxAgeInterest <= 100 &&
        maxAgeInterest > minAgeInterest
      )
        break;
      console.log(
        "Invalid input! Enter a number between 18 and 100. And maximum age interest should be greater than minimum age interest"
      );
    }
  }

  //  Store the answer in an object

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

// 3. step 3 comparing and finding the matches

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

//4. step 4  Print matches in readable format
console.log(`Total matches found: ${count}`);
for (let i = 0; i < matches.length; i++) {
  const m = matches[i];
  console.log(
    `${i + 1}. ${m.first_name} ${m.last_name} — Age: ${m.age}, Location: ${
      m.location
    }`
  );
}
