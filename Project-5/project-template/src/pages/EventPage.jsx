import {
  Card,
  Image,
  Text,
  Box,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useEvents } from "../Context/Context";
import { toaster } from "../components/ui/toaster";

import { useNavigate } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode.jsx";
import { VITE_API_BASE_URL } from "../utils/env.js";
import EventPageSkeleton from "../components/EventPageSkeleton";

function dateFun(value) {
  if (!value) return "";
  const date = new Date(value);

  return isNaN(date.getTime()) ? "" : date.toLocaleDateString();
}
function timeFun(value) {
  if (!value) return "";
  const date = new Date(value);

  return isNaN(date.getTime()) ? "" : date.toLocaleTimeString();
}

export const EventPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { setEdit, setEvents, setSelectedEvent, post, fetchEventData } =
    useEvents();

  const textColor = useColorModeValue("gray.700", "gray.200");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");

  const buttonEditEventBg = useColorModeValue("blue.500", "blue.400");
  const buttonEditEventHoveBg = useColorModeValue("blue.600", "blue.300");
  const buttonDeleteEventBg = useColorModeValue("red.500", "red.400");
  const buttonDeleteEventHoverBg = useColorModeValue("red.600", "red.300");

  useEffect(() => {
    fetchEventData(eventId);
  }, [eventId, fetchEventData]);

  const deleteEvent = async (Id) => {
    try {
      const confirmDelete = window.confirm("Are you sure?");
      if (!confirmDelete) return;

      const res = await fetch(`${VITE_API_BASE_URL}/events/${Id}`, {
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

  if (!post) {
    return <EventPageSkeleton />;
  }

  return (
    <Box>
      <Card.Root
        key={post?.id}
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
            src={post?.image}
            alt={post?.title}
            width="100%"
            height="100%"
            objectFit="cover"
            cursor="pointer"
          />
        </Box>
        <Stack flex="1">
          <Card.Body gap={2}>
            <Card.Title fontSize="24px" color={textColor}>
              {post?.title}
            </Card.Title>
            <Card.Description fontSize="16px" color={textColor}>
              {post?.description}
            </Card.Description>
          </Card.Body>
          <Card.Footer flexDir="column" alignItems="flex-start">
            <Text color={textColor}>
              Start-Date: {dateFun(post?.startTime)}
            </Text>
            <Text color={textColor}>
              Start-Time:
              {timeFun(post?.startTime)}
            </Text>
            <Text color={textColor}>End-Date: {dateFun(post?.endTime)}</Text>
            <Text color={textColor}>End-Time: {timeFun(post?.endTime)}</Text>
            <Text color={textColor}>
              Catergory: {post?.categoryNames.join(", ")}
            </Text>
            <HStack marginTop="20px" gap={6}>
              <Button
                onClick={() => {
                  setSelectedEvent(post);
                  setEdit(true);
                }}
                bg={buttonEditEventBg}
                color="white"
                _hover={{ bg: buttonEditEventHoveBg }}
              >
                Edit Event
              </Button>
              <Button
                onClick={() => deleteEvent(post.id)}
                bg={buttonDeleteEventBg}
                color="white"
                _hover={{ bg: buttonDeleteEventHoverBg }}
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
