"use-strict";

// Fetching the data from cake-recipes.json file

const response = await fetch("./cake-recipes.json");
const data = await response.json();

// 1. function to get unique Author;

const getAllAuthors = (data) => {
  const authors = data.map(({ Author }) => Author);
  const reduceAu = authors.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      return [...acc, curr];
    }
    return acc;
  }, []);

  reduceAu.forEach((author) => console.log(author));
};

// 2.function to get Recipe by Author;

const getRecipesByAuthor = (data, author) => {
  const filteredRecipesNames = data.filter(
    (recipe) => recipe.Author.toLowerCase() === author.toLowerCase(),
  );

  if (filteredRecipesNames.length === 0) {
    console.log("No recipes found for this author.");
    return;
  }

  getRecipesName(filteredRecipesNames);
};

// 3. Function to get Recipe by ingredients

const getRecipesByIngredient = (data, ing) => {
  const ingredient = ing.toLowerCase();

  const filteredRecipes = data.filter((recipe) =>
    recipe.Ingredients.some((item) => item.toLowerCase().includes(ingredient)),
  );

  if (filteredRecipes.length === 0) {
    console.log(
      "There is no such ingredient in CakeRecipes! Please enter a valid ingredient.",
    );
    return;
  }
  getRecipesName(filteredRecipes);
};

//4. function to get Recipes by name

const getRecipeByName = (data, name) => {
  const recipe = data.find((recipe) =>
    recipe.Name.toLowerCase().includes(name.toLowerCase()),
  );

  if (!recipe) {
    console.log("There is no recipe found");
    return null;
  }

  return recipe;
};

// 5. function to get all the ingredients

const displayAllIngredients = (data) => {
  const returnedIng = data.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      return [...acc, curr];
    }
    return acc;
  }, []);

  console.log("All saved ingredients:");
  returnedIng.forEach((ingredient, index) => {
    console.log(`${index + 1}. ${ingredient}`);
  });
};

// 6. function to log Recipe names

const getRecipesName = (data) => {
  data.forEach(({ Name }) => {
    console.log(Name);
  });
};

// Part 2

const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);
};

let choice;
let savedIngredients = [];

do {
  choice = displayMenu();

  switch (choice) {
    case 1:
      getAllAuthors(data);
      break;

    case 2:
      {
        const author = prompt(
          "Enter the name of the author? In the form of (Amir Ukbazgi)",
        );
        getRecipesByAuthor(data, author);
      }
      break;

    case 3:
      {
        const ing = prompt("Enter the name of ingredients");
        getRecipesByIngredient(data, ing);
      }

      break;

    case 4:
      {
        const recipeName = prompt(
          "Enter the name of the Recipe you are looking for?",
        );
        const resultRecipe = getRecipeByName(data, recipeName);

        if (resultRecipe) {
          console.log("Recipe found:");
          console.log(resultRecipe);

          const confirmStatus = confirm(
            "Do you want to save the ingredients of this recipe?",
          );

          if (confirmStatus) {
            savedIngredients = [
              ...savedIngredients,
              ...resultRecipe.Ingredients,
            ];

            localStorage.setItem(
              "savedIngredients",
              JSON.stringify(savedIngredients),
            );
          }
        }
      }
      break;

    case 5:
      {
        const getSavedIngredients =
          JSON.parse(localStorage.getItem("savedIngredients")) || [];
        if (getSavedIngredients.length > 0) {
          displayAllIngredients(getSavedIngredients);
        } else {
          console.log(
            "There are no saved recipes yet. Please save some recipes first!",
          );
        }
      }
      break;

    case 0:
      console.log("Exiting...");
      break;

    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);
