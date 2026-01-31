import { Container } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // const [search, setSearch] = useState("");

  function handleSelectedRecipe(label) {
    setSelectedRecipe(label);
  }
  function handleBackToListPage() {
    setSelectedRecipe("");
  }
  return (
    <Container maxW="1400px" bg="blue.500">
      {selectedRecipe ? (
        <RecipePage
          selectedRecipe={selectedRecipe}
          onBackToList={handleBackToListPage}
        />
      ) : (
        <RecipeListPage onSelectedRecipe={handleSelectedRecipe} />
      )}
    </Container>
  );
}

export default App;
