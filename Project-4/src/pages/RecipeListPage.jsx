import {
  Flex,
  Grid,
  Heading,
  Input,
  Box,
  GridItem,
  Card,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { data } from "../../data/data.js";
import { useState } from "react";

function RecipeListPage({ onSelectedRecipe }) {
  const [inputRecipeLabel, setInputRecipeLabel] = useState("");
  const [filterRecipes, setFilteredRecipe] = useState(data.hits);

  const veg = ["Vegan", "Vegetarian"];

  function getFilteredRecipe(value) {
    // filtering using the recipe label
    const result = data.hits.filter((recipe) =>
      recipe.recipe.label.toLowerCase().includes(value.toLocaleLowerCase()),
    );
    setFilteredRecipe(result);
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputRecipeLabel(value);
    getFilteredRecipe(value);
  }

  return (
    <Flex
      direction="column"
      maxW="1300px"
      minH="100vh"
      mx="auto"
      align="center"
      gap="20px"
      p="10px"
    >
      <Heading as="h1" size="4xl">
        Winc Recipe Checker
      </Heading>

      <Input
        placeholder="Search recipes"
        value={inputRecipeLabel}
        onChange={(e) => handleChange(e)}
        width={{ base: "300px", sm: "300px", md: "500px", lg: "600px" }}
        px="20px"
        py="20px"
        fontSize="18px"
      />

      <Grid
        maxW="1300px"
        minH="100vh"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="6"
        justifyItems={
          inputRecipeLabel && filterRecipes.length === 1 ? "center" : "stretch"
        }
      >
        {filterRecipes?.map((recipe) => (
          <GridItem
            colSpan={
              inputRecipeLabel && filterRecipes.length === 1 ? { lg: 4 } : 1
            }
            display="flex"
            justifyContent="center"
            border="1px solid"
            borderRadius="20px"
            maxW="300px"
            minH="400px"
            overflow="hidden"
            key={recipe.recipe.label}
            onClick={() => onSelectedRecipe(recipe.recipe)}
          >
            <Card.Root width="100%" height="100%">
              <Box maxH="200px" w="100%">
                <Image
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  w="100%"
                  height="100%"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Box>
              <Card.Body>
                <Flex direction="column" gap="5px" align="center">
                  <Text>{recipe.recipe.mealType[0].toUpperCase()}</Text>

                  <Heading as="h3" textAlign="center" letterSpacing="tight">
                    {recipe.recipe.label}
                  </Heading>

                  <HStack>
                    {veg
                      .filter((label) =>
                        recipe.recipe.healthLabels.includes(label),
                      )
                      .map((label) => (
                        <Text
                          as="span"
                          key={label}
                          bg="purple.300"
                          color="black"
                          p="5px"
                          fontSize="12px"
                          fontWeight="bold"
                        >
                          {label.toUpperCase()}
                        </Text>
                      ))}
                  </HStack>

                  <HStack>
                    {recipe.recipe.dietLabels?.map((label) => (
                      <Text
                        as="span"
                        key={label}
                        bg="green.200"
                        p="5px"
                        fontSize="12px"
                        fontWeight="bold"
                        color="black"
                      >
                        {label.toUpperCase()}
                      </Text>
                    ))}
                  </HStack>
                  <Text>Dish: {recipe.recipe.dishType[0]}</Text>
                  <Text>
                    {recipe.recipe.cautions.length > 0 ? "Cautions:" : null}
                  </Text>
                  <HStack wrap="wrap">
                    {recipe.recipe.cautions?.map((caution) => (
                      <Text
                        key={caution}
                        as="span"
                        bg="red.200"
                        color="black"
                        p="5px"
                        fontSize="12px"
                        fontWeight="bold"
                      >
                        {caution.toUpperCase()}
                      </Text>
                    ))}
                  </HStack>
                </Flex>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

export default RecipeListPage;
