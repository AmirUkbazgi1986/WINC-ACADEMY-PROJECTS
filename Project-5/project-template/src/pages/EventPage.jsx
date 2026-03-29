import {
  Card,
  Image,
  Text,
  Box,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router";
import { useEvents } from "../Context/Context";
import { toaster } from "../components/ui/toaster";

import { useNavigate } from "react-router-dom";
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

export const EventPage = () => {
  const post = useLoaderData();
  const { setEdit, setSelectedEvent, setEvents } = useEvents();

  const navigate = useNavigate();

  const textColor = useColorModeValue("gray.700", "gray.200");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");

  const deleteEvent = async (Id) => {
    try {
      const confirmDelete = window.confirm("Are you sure?");
      if (!confirmDelete) return;

      const res = await fetch(`http://localhost:3000/events/${Id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("could not delete");

      toaster.create({
        title: "Success",
        description: "Deletion was successful",
      });

      // 🔥 update UI immediately
      setEvents((prev) => ({
        ...prev,
        eventsWithCategories: prev.eventsWithCategories.filter(
          (event) => event.id !== Id,
        ),
      }));

      navigate("/"); // 🔥 go back to event list page
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "Fail",
        description: "Deletion was not successful",
      });
    }
  };

  return (
    <Box>
      <Card.Root
        key={post.id}
        flexDirection={{ base: "column", md: "row" }}
        overflow="hidden"
        maxW={{ base: "300px", sm: "400px", md: "900px" }}
        margin="50px auto"
        borderWidth="1px"
        borderColor={`${cardBorder}`}
        borderRadius="20px"
        bg={cardBg}
      >
        <Box
          w={{ base: "full", md: "50%" }}
          h={{ base: "250px", md: "auto" }}
          overflow="hidden"
          marginRight={{ base: "0", md: "20px" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            width="100%"
            height="100%"
            objectFit="cover"
            cursor="pointer"
          />
        </Box>
        <Stack flex="1">
          <Card.Body gap={2}>
            <Card.Title fontSize="24px" color={textColor}>
              {post.title}
            </Card.Title>
            <Card.Description fontSize="16px" color={textColor}>
              {post.description}
            </Card.Description>
          </Card.Body>
          <Card.Footer flexDir="column" alignItems="flex-start">
            <Text color={textColor}>Start-Date: {dateFun(post.startTime)}</Text>
            <Text color={textColor}>
              Start-Time:
              {timeFun(post.startTime)}
            </Text>
            <Text color={textColor}>End-Date: {dateFun(post.endTime)}</Text>
            <Text color={textColor}>End-Time: {timeFun(post.endTime)}</Text>
            <Text color={textColor}>
              Catergory: {post.categoryNames.join(", ")}
            </Text>
            <HStack marginTop="20px" gap={6}>
              <Button
                onClick={() => {
                  setSelectedEvent(post);
                  setEdit(true);
                }}
                bg={useColorModeValue("blue.500", "blue.400")}
                color="white"
                _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
              >
                Edit Event
              </Button>
              <Button
                onClick={() => deleteEvent(post.id)}
                bg={useColorModeValue("blue.500", "blue.400")}
                color="white"
                _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
              >
                Delete Event
              </Button>
            </HStack>
          </Card.Footer>
        </Stack>
      </Card.Root>
    </Box>
  );
};
