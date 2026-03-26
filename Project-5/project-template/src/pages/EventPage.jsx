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
  console.log(setEdit);
  const navigate = useNavigate();

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
            <Card.Title fontSize="24px">{post.title}</Card.Title>
            <Card.Description fontSize="16px">
              {post.description}
            </Card.Description>
          </Card.Body>
          <Card.Footer flexDir="column" alignItems="flex-start">
            <Text>Start-Date: {dateFun(post.startTime)}</Text>
            <Text>
              Start-Time:
              {timeFun(post.startTime)}
            </Text>
            <Text>End-Date: {dateFun(post.endTime)}</Text>
            <Text>End-Time: {timeFun(post.endTime)}</Text>
            <Text>Catergory: {post.categoryNames.join(", ")}</Text>
            <HStack marginTop="20px" gap={6}>
              <Button
                onClick={() => {
                  setSelectedEvent(post);
                  setEdit(true);
                }}
              >
                Edit Event
              </Button>
              <Button onClick={() => deleteEvent(post.id)}>Delete Event</Button>
            </HStack>
          </Card.Footer>
        </Stack>
      </Card.Root>
    </Box>
  );
};
