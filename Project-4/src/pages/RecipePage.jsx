import {
  Button,
  Flex,
  Box,
  Image,
  Grid,
  GridItem,
  Text,
  Heading,
  List,
  ListItem,
  Tag,
  HStack,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";

function RecipePage({ selectedRecipe, onBackToList }) {
  console.log(selectedRecipe);

  return (
    <Flex
      direction="column"
      maxW="1300px"
      minH="100vh"
      mx="auto"
      align="center"
      bg="white"
    >
      <Flex
        width="100%"
        height="100px"
        justify="flex-start"
        alignItems="center"
        px="30px"
      >
        <Button onClick={onBackToList} color="blue.300" bg="transparent">
          <FaAngleLeft />
        </Button>
      </Flex>
      <Box width="100%">
        <Image
          src={selectedRecipe.image}
          alt={selectedRecipe.label}
          width="100%"
          maxH="350px"
          objectFit="cover"
        />
      </Box>
      <Grid
        width="100%"
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        gap="10px"
        p="20px"
      >
        <GridItem colSpan={1} minH="400px">
          <Flex direction="column" gap="5px">
            <Text>{selectedRecipe.mealType[0].toUpperCase()}</Text>

            <Heading as="h2">{selectedRecipe.label.toUpperCase()}</Heading>

            <Text>
              Total cooking time:
              <Text as="span" ml="5px" fontWeight="bold">
                {selectedRecipe.totalTime} Minutes
              </Text>
            </Text>

            <Text>
              Servings:
              <Text as="span" ml="5px" fontWeight="bold">
                {selectedRecipe.yield}
              </Text>
            </Text>

            <Heading as="h4">Ingredients:</Heading>

            <List.Root as="ul" spaceY="15px" unstyled>
              {selectedRecipe?.ingredients.map((ing) => (
                <List.Item key={ing.food}>{ing.text}</List.Item>
              ))}
            </List.Root>
          </Flex>
        </GridItem>

        <GridItem colSpan={1} minH="400px">
          <Text fontSize="18px" fontWeight="semibold">
            Health labels:
          </Text>
          <HStack gap="10px" wrap="wrap" my="10px">
            {selectedRecipe.healthLabels.map((label) => (
              <Tag.Root key={label} bg="purple.300">
                <Tag.Label fontWeight="bold" fontSize="14px">
                  {label.toUpperCase()}
                </Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
          <Text fontSize="18px" fontWeight="semibold">
            {selectedRecipe.dietLabels.length > 0 ? "Diet:" : null}
          </Text>
          <HStack gap="10px" my="10px">
            {selectedRecipe.dietLabels?.map((label) => (
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
          <Text fontSize="18px" fontWeight="semibold">
            {selectedRecipe.cautions.length > 0 ? "Cautions:" : null}
          </Text>
          <HStack wrap="wrap" gap="10px" my="10px">
            {selectedRecipe.cautions?.map((caution) => (
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
          <Text fontSize="18px" fontWeight="semibold">
            Total nutrients:
          </Text>
          <HStack wrap="wrap" gap="20px" my="10px">
            <Box>
              <Text>{selectedRecipe.calories.toFixed(0)}</Text>
              <Text fontWeight="semibold">CALORIES</Text>
            </Box>

            <Box>
              <Text>
                {selectedRecipe.totalNutrients.CHOCDF.quantity.toFixed(0)}{" "}
                {selectedRecipe.totalNutrients.CHOCDF.unit}{" "}
              </Text>
              <Text fontWeight="semibold">
                {selectedRecipe.totalNutrients.CHOCDF.label.toUpperCase()}
              </Text>
            </Box>

            <Box>
              <Text>
                {selectedRecipe.totalNutrients.PROCNT.quantity.toFixed(0)}
                {selectedRecipe.totalNutrients.PROCNT.unit}
              </Text>
              <Text fontWeight="semibold">
                {selectedRecipe.totalNutrients.PROCNT.label.toUpperCase()}
              </Text>
            </Box>

            <Box>
              <Text>
                {selectedRecipe.totalNutrients.FAT.quantity.toFixed(0)}
                {selectedRecipe.totalNutrients.FAT.unit}
              </Text>
              <Text fontWeight="semibold">
                {selectedRecipe.totalNutrients.FAT.label.toUpperCase()}
              </Text>
            </Box>

            <Box>
              <Text>
                {selectedRecipe.totalNutrients.CHOLE.quantity.toFixed(0)}
                {selectedRecipe.totalNutrients.CHOLE.unit}
              </Text>
              <Text fontWeight="semibold">
                {selectedRecipe.totalNutrients.CHOLE.label.toUpperCase()}
              </Text>
            </Box>

            <Box>
              <Text>
                {selectedRecipe.totalNutrients.NA.quantity.toFixed(0)}{" "}
                {selectedRecipe.totalNutrients.NA.unit}
              </Text>
              <Text fontWeight="semibold">
                {selectedRecipe.totalNutrients.NA.label.toUpperCase()}
              </Text>
            </Box>
          </HStack>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default RecipePage;
