import {
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

import { Link } from "react-router";
import { useEvents } from "../Context/Context";

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
  const { events } = useEvents();

  return (
    <Container>
      <Heading
        as={"h1"}
        textAlign={"center"}
        marginTop={"10px"}
        fontSize={"32px"}
      >
        List of events
      </Heading>
      <Grid
        maxW="1200px"
        minH="100vh"
        // border={"1px solid blue"}
        margin={"10px auto"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {events?.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`}>
            <Card.Root w="full" h="full">
              <Box
                W="full"
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
        ))}
      </Grid>
    </Container>
  );
};
