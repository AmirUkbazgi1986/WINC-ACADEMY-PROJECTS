import { Button } from "@chakra-ui/react";

function RecipePage({ selectedLabel, onBackToList }) {
  return (
    <div>
      <Button onClick={onBackToList}>Back</Button>
      <p>{selectedLabel}</p>
      <p>recipe details </p>
    </div>
  );
}

export default RecipePage;
