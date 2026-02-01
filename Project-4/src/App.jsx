import { Flex } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";
import { ColorModeToggle } from "./components/ColorModeToggle";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleSelectedRecipe(recipe) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedRecipe(recipe);
  }

  function handleBackToListPage() {
    setSelectedRecipe(null);
  }

  return (
    <Flex direction="column" maxW="100vw" minH="100vh" bg="bg">
      <Flex justify="flex-end" p="10px">
        <ColorModeToggle />
      </Flex>
      {selectedRecipe ? (
        <RecipePage
          selectedRecipe={selectedRecipe}
          onBackToList={handleBackToListPage}
        />
      ) : (
        <RecipeListPage onSelectedRecipe={handleSelectedRecipe} />
      )}
    </Flex>
  );
}

export default App;
