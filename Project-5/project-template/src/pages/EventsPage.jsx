import { Card, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";
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
  const { events, loading, error } = useEvents();

  if (loading) return <p>loading ...</p>;

  if (error) return <p>Error</p>;

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
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        {events?.map((event) => (
          <Card.Root key={event.id} maxW="sm">
            <Image maxH={"200px"} src={event.image} alt={event.title} />
            <Card.Body gap={2}>
              <Card.Title>{event.title}</Card.Title>
              <Card.Description>{event.description}</Card.Description>
            </Card.Body>
            <Card.Footer flex flexDir={"column"} alignItems={"start"}>
              <Text>Start-Date: {dateFun(event.startTime)}</Text>
              <Text>
                Start-Time:
                {timeFun(event.startTime)}
              </Text>
              <Text>End-Date: {dateFun(event.endTime)}</Text>
              <Text>End-Time: {timeFun(event.endTime)}</Text>
            </Card.Footer>
          </Card.Root>
        ))}
      </Grid>
    </Container>
  );
};
