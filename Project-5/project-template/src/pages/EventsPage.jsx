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
import { Link } from "react-router";
import { useEvents } from "../Context/Context";
import { EventsListSkeleton } from "../components/EventsListSkeleton";

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
  const { events, loading } = useEvents();
  const { eventsWithCategories, categories } = events;

  const [inputValue, setInputValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  let filteredEvents;

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
        // justifyContent="center"
        gap="20px"
        p="10px"
      >
        <Heading
          as={"h1"}
          textAlign={"center"}
          marginTop={"10px"}
          fontSize={"32px"}
        >
          List of events
        </Heading>
        <HStack>
          <Input
            placeholder="Search events"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            width={{ base: "250px", sm: "300px", md: "500px", lg: "600px" }}
            px="20px"
            py="20px"
            fontSize="18px"
          />
          <Button>Search</Button>
        </HStack>
        <VStack align="center" gap={2}>
          <Heading as="h2">Category Filters</Heading>
          <HStack gap={{ base: "10px", md: "30px" }} margin="20px 0">
            {categories?.map((category) => (
              <Checkbox.Root
                key={category.id}
                value={Number(category.id)}
                checked={selectedCategories.includes(Number(category.id))}
                onChange={handleCategoryChange}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>{category.name}</Checkbox.Label>
              </Checkbox.Root>
            ))}

            <Button
              onClick={() => {
                setSelectedCategories([]);
                setInputValue("");
              }}
            >
              Clear Filter
            </Button>
          </HStack>
        </VStack>
      </Flex>
      {loading ? (
        <EventsListSkeleton />
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
              border="1px solid"
              borderRadius="20px"
              overflow="hidden"
              key={event.id}
            >
              <Link
                to={`/event/${event.id}`}
                style={{ display: "block", width: "100%", height: "100%" }}
              >
                <Card.Root w="full" display="flex" flexDirection="column">
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
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Description>{event.description}</Card.Description>
                  </Card.Body>
                  <Card.Footer flexDir="column" alignItems="flex-start">
                    <Text>Start-Date: {dateFun(event.startTime)}</Text>
                    <Text>
                      Start-Time:
                      {timeFun(event.startTime)}
                    </Text>
                    <Text>End-Date: {dateFun(event.endTime)}</Text>
                    <Text>End-Time: {timeFun(event.endTime)}</Text>
                    <Text>Catergory: {event.categoryNames.join(", ")}</Text>
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
