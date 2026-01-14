"use-strict";
const response = await fetch("./cake-recipes.json");
const data = await response.json();

console.log(data.slice(0, 6));

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
// getAllAuthors(data);

// 2.function to get Recipe by Author;

const getRecipesByAuthor = (data, author) => {
  const filterRecipe = data.filter(({ Author, Name }) => {
    if (author === Author) {
      return Name;
    }
  });

  getRecipesName(filterRecipe);
};

// getRecipesByAuthor(data, "Barney Desmazery");

// 3. Function to get Recipe by ingredients

const getRecipesByIngredient = (data, ing) => {
  const hasIngredient = data.some(({ Ingredients }) =>
    Ingredients.includes(ing)
  );

  if (hasIngredient) {
    const filteredIngredient = data.filter((recipe) =>
      recipe.Ingredients.includes(ing) ? recipe.Name : null
    );

    getRecipesName(filteredIngredient);
  }
};

//4. function to get Recipes by name
const getRecipesByName = (data, name) => {
  const recipe = data.find((recipe) => recipe.Name.includes(name));
  console.log(recipe);
  return recipe;
};
// const returnedRecipe = getRecipesByName(data, "Dundee cake");
// console.log(returnedRecipe);

// 5. function to get all the ingredients

const getAllIngredients = (data) => {
  const returnedIng = data
    .map(({ Ingredients }) => Ingredients)
    .flat()
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        return [...acc, curr];
      }
      return acc;
    }, []);
  console.log(returnedIng);
  return returnedIng;
};
// const allIngredients = getAllIngredients(data.slice(0, 3));
// console.log(allIngredients);

// 6. function to log Recipe names (this need to be a general function which logs the name of the recipe)

const getRecipesName = (data) => {
  data.forEach(({ Name }) => {
    if (!Name) {
      console.log("There is no recipe found");
    }
    console.log(Name);
  });
};

// getRecipesName(data);

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
let resultRecipes = [];

do {
  choice = displayMenu();

  switch (choice) {
    case 1:
      getAllAuthors(data);
      break;
    case 2:
      {
        const author = prompt(
          "Enter the name of the author? In the form of (Amir Ukbazgi)"
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
          "Enter the name of the Recipe you are looking for?"
        );
        const resultRecipe = getRecipesByName(data, recipeName);
        resultRecipes = [...resultRecipes, resultRecipe];

        const confirmStatus = confirm("Do you want this recipe to save? ");
        if (confirmStatus) {
          const saveRecipe = localStorage.setItem(
            "saveRecipe",
            JSON.stringify(resultRecipes)
          );
        }
      }
      break;
    case 5:
      {
        const getRecipe = JSON.parse(localStorage.getItem("saveRecipe")) || 0;
        if (getRecipe !== 0) {
          getAllIngredients(getRecipe);
        } else {
          console.log(
            "There is no saved Recipes to show you the ingredients? please first save some recipes!!"
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
