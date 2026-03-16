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
  console.log(post);
  return (
    <Box>
      <Card.Root
        key={post.id}
        flexDirection={{ base: "column", md: "row" }}
        overflow="hidden"
        maxW={{ base: "300px", sm: "400px", md: "600px" }}
        margin="50px auto"
      >
        <Box
          w={{ base: "full", md: "250px" }}
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
            <Card.Title>{post.title}</Card.Title>
            <Card.Description>{post.description}</Card.Description>
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
            <HStack>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </HStack>
          </Card.Footer>
        </Stack>
      </Card.Root>
    </Box>
  );
};
