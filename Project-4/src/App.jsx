import { Container } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";

function App() {
  const [selectedLabel, setSelectedLabel] = useState("");

  function handleSelectLabel(label) {
    setSelectedLabel(label);
  }
  function handleBackToListPage() {
    setSelectedLabel("");
  }
  return (
    <Container maxW="1400px" bg="blue.500">
      {selectedLabel ? (
        <RecipePage
          selectedLabel={selectedLabel}
          onBackToList={handleBackToListPage}
        />
      ) : (
        <RecipeListPage onSelectLabel={handleSelectLabel} />
      )}
    </Container>
  );
}

export default App;
