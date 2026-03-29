import {
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  Box,
  Flex,
  Input,
  HStack,
  Button,
  GridItem,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigation } from "react-router";
import { useEvents } from "../Context/Context";
import { EventsListSkeleton } from "../components/EventsListSkeleton";
import { useColorModeValue } from "../components/ui/color-mode.jsx";

function dateFun(value) {
  const date = new Date(value);
  const day = date.toLocaleDateString();
  return day;
}
function timeFun(value) {
  const date = new Date(value);
  const time = date.toLocaleTimeString();
  return time;
}

export const EventsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { events } = useEvents();

  const eventsWithCategories = events?.eventsWithCategories;
  const categories = events?.categories;

  const navigation = useNavigation();

  const headingColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");

  let filteredEvents;

  if (!eventsWithCategories) {
    return <EventsListSkeleton />;
  }

  if (inputValue) {
    filteredEvents = eventsWithCategories.filter((event) =>
      event.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
  } else if (selectedCategories.length > 0) {
    filteredEvents = eventsWithCategories.filter((event) =>
      event.categoryIds.some((categoryId) =>
        selectedCategories.includes(categoryId),
      ),
    );
  } else {
    filteredEvents = eventsWithCategories;
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);
    setSelectedCategories([]);
  }
  function handleCategoryChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      // Add the item to the array
      setSelectedCategories((selectedCategories) => [
        ...selectedCategories,
        Number(value),
      ]);
      setInputValue("");
    } else {
      // Remove the item from the array;
      setSelectedCategories((selectedCategories) =>
        selectedCategories.filter((item) => item !== Number(value)),
      );
    }
  }

  return (
    <Container maxW="1300px" minH="100vh">
      <Flex
        direction="column"
        w="full"
        mx="auto"
        align="center"
        gap="20px"
        p="10px"
      >
        <Heading
          as={"h1"}
          color={headingColor}
          textAlign={"center"}
          marginTop={"10px"}
          fontSize={"32px"}
        >
          List of events
        </Heading>
        <HStack>
          <Input
            type="text"
            placeholder="Search events"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            width={{ base: "250px", sm: "300px", md: "500px", lg: "600px" }}
            px="20px"
            py="20px"
            fontSize="18px"
            bg={useColorModeValue("white", "gray.700")}
            color={useColorModeValue("gray.800", "gray.100")}
          />
        </HStack>
        <VStack align="center" gap={2}>
          <Heading as="h2">Category Filters</Heading>
          <HStack
            wrap="wrap"
            justify="center"
            gap={{ base: "10px", md: "30px" }}
            margin="20px 0"
          >
            {categories?.map((category) => (
              <Checkbox.Root
                key={category.id}
                value={Number(category.id)}
                checked={selectedCategories.includes(Number(category.id))}
                onChange={handleCategoryChange}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label
                  color={useColorModeValue("gray.800", "gray.100")}
                >
                  {category.name}
                </Checkbox.Label>
              </Checkbox.Root>
            ))}

            <Button
              onClick={() => {
                setSelectedCategories([]);
                setInputValue("");
              }}
              bg={useColorModeValue("blue.500", "blue.400")}
              color="white"
              _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
            >
              Clear Filter
            </Button>
          </HStack>
        </VStack>
      </Flex>

      {filteredEvents.length === 0 ? (
        <Text textAlign="center" mt="20px" fontSize="lg" color={textColor}>
          No events found
        </Text>
      ) : (
        <Grid
          w="full"
          margin={"10px auto"}
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          alignItems="stretch"
          gap={4}
          opacity={navigation.state === "loading" ? 0.6 : 1}
          pointerEvents={navigation.state === "loading" ? "none" : "auto"}
          transition="opacity 0.2s"
        >
          {filteredEvents?.map((event) => (
            <GridItem
              colSpan={
                inputValue && filteredEvents.length === 1
                  ? { base: 1, md: 3 }
                  : 1
              }
              maxW={
                inputValue && filteredEvents.length === 1 ? "400px" : "100%"
              }
              mx={inputValue && filteredEvents.length === 1 ? "auto" : "0"}
              // border={`1px solid ${cardBorder}`}
              borderWidth="1px"
              borderColor={`${cardBorder}`}
              borderRadius="20px"
              overflow="hidden"
              key={event.id}
            >
              <Link
                to={`/event/${event.id}`}
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                <Card.Root
                  w="full"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  bg={cardBg}
                >
                  <Box
                    w="full"
                    h={{ base: "200px", md: "250px" }}
                    overflow="hidden"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      cursor="pointer"
                    />
                  </Box>
                  <Card.Body gap={2}>
                    <Card.Title color={textColor}>{event.title}</Card.Title>
                    <Card.Description color={textColor}>
                      {event.description}
                    </Card.Description>
                  </Card.Body>
                  <Card.Footer flexDir="column" alignItems="flex-start">
                    <Text color={textColor}>
                      Start-Date: {dateFun(event.startTime)}
                    </Text>
                    <Text color={textColor}>
                      Start-Time:
                      {timeFun(event.startTime)}
                    </Text>
                    <Text color={textColor}>
                      End-Date: {dateFun(event.endTime)}
                    </Text>
                    <Text color={textColor}>
                      End-Time: {timeFun(event.endTime)}
                    </Text>
                    <Text color={textColor}>
                      Catergory: {event.categoryNames.join(", ")}
                    </Text>
                  </Card.Footer>
                </Card.Root>
              </Link>
            </GridItem>
          ))}
        </Grid>
      )}
    </Container>
  );
};
