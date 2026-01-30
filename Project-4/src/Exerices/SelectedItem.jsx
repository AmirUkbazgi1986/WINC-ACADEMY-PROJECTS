import { portfolioItems } from "../../data/sampleData";
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

function SelectedItem({ selectedId, onBackHomePage }) {
  const selectedJob = portfolioItems.find((list) => list.id === selectedId);
  console.log(selectedJob);

  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="1300px"
      maxH="350px"
      p="15px"
      mx={"auto"}
      mt={"20px"}
      border="2px solid "
      borderColor="gray.200"
    >
      <Box W="500px" overflow="hidden" borderRadius="10px">
        <Image
          objectFit="cover"
          src={selectedJob.imageUrl}
          alt={selectedJob.Title}
        />
      </Box>
      <Box>
        <Card.Body>
          <Card.Title mb="2">{selectedJob.title}</Card.Title>
          <Card.Description>{selectedJob.description}</Card.Description>
          <HStack mt="4">
            {selectedJob.skills?.map((skill, index) => (
              <Badge
                key={index}
                color="blackAlpha.800"
                bg="blue.200"
                px="10px"
                py="5px"
                cursor="pointer"
              >
                {skill}
              </Badge>
            ))}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => onBackHomePage()}>Back to overView</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default SelectedItem;
