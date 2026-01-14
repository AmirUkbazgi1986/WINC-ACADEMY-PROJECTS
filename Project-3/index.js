"use-strict";
const response = await fetch("./cake-recipes.json");
const data = await response.json();
// console.log(Array.isArray(data));
// console.log(Array.isArray(data[0]));
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

// 2. function to log Recipe names (this need to be a general function which logs the name of the recipe)

const getRecipesName = (data) => {
  data.forEach(({ Name }) => {
    if (!Name) {
      console.log("There is no recipe found");
    }
    console.log(Name);
  });
};

// getRecipesName(data);

// 3.function to get Recipe by Author;

const getRecipesByAuthor = (data, author) => {
  const filterRecipe = data.filter(({ Author, Name }) => {
    if (author === Author) {
      return Name;
    }
  });

  getRecipesName(filterRecipe);
};

// getRecipesByAuthor(data, "Barney Desmazery");

// 4. Function to get Recipe by ingredients

const getRecipesByIngredient = (data, ing) => {
  const hasIngredient = data.some(({ Ingredients }) =>
    Ingredients.includes(ing)
  );

  // console.log(hasIngredient);

  if (hasIngredient) {
    const filteredIngredient = data.filter((recipe) =>
      recipe.Ingredients.includes(ing) ? recipe.Name : null
    );
    // return filteredIngredient;
    console.log(filteredIngredient);
    getRecipesName(filteredIngredient);
  }
};
getRecipesByIngredient(data, "3 large eggs, beaten");
// const result = getRecipesByIngredient(data, "200g dark muscovado sugar");
// console.log(result);

//5. function to get Recipes by name
const getRecipesByName = (data, name) => {
  const recipe = data.filter((recipe) => recipe.includes(name));
};
// getRecipesByName(data,'Dundee cake')
