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

function RecipeListPage({ onSelectLabel }) {
  const [inputRecipe, setInputRecipe] = useState("");
  const veg = ["Vegan", "Vegetarian"];

  const filterRecipe = data.hits.filter((recipe) =>
    recipe.recipe.label === inputRecipe ? recipe.recipe : null,
  );
  console.log(filterRecipe);

  // const dataEle = data.hits[10].recipe;
  // let dietLabel = dataEle.dietLabels?.map((label) => label);
  // console.log(dietLabel);

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
      <Heading as="h1" size="4xl" color="white">
        Winc Recipe Checker
      </Heading>
      <Input
        placeholder="Search recipes"
        value={inputRecipe}
        onChange={(e) => setInputRecipe(e.target.value)}
        width={{ base: "300px", sm: "300px", md: "500px", lg: "600px" }}
        bg="white"
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
      >
        {data.hits.map((recipe) => (
          <GridItem
            colSpan={1}
            borderRadius="20px"
            maxW="300px"
            minH="400px"
            overflow="hidden"
            key={recipe.recipe.label}
            onClick={() => onSelectLabel(recipe.recipe.label)}
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
                        color="black.100"
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
