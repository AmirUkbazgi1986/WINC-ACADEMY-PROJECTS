import {
  Card,
  Flex,
  Heading,
  Image,
  Text,
  Tag,
  Container,
} from "@chakra-ui/react";
import { portfolioItems } from "../../data/sampleData";
function PortfolioItemCard() {
  // console.log(portfolioItems[0]);
  return (
    <Container maxW="1300px">
      {portfolioItems.map((portfolioItem) => (
        <Card.Root
          maxW="600px"
          overflow={"hidden"}
          mx="auto"
          my="20px"
          borderRadius="20px"
          p="10px"
          boxShadow="10px 8px 10px rgba(0,0,0,0.2)"
        >
          <Card.Header>
            <Image
              src={portfolioItem.imageUrl}
              alt="image"
              borderRadius="20px"
              h="300px"
            />
          </Card.Header>
          <Card.Body gap={2}>
            <Heading
              as="h1"
              textStyle="3xl"
              fontWeight="bold"
              letterSpacing="tight"
            >
              {portfolioItem.title}
            </Heading>
            <Text mt="2" fontSize="20px">
              {portfolioItem.summary}
            </Text>
          </Card.Body>
          <Card.Footer gap={2}>
            <Flex gap={"20px"}>
              {portfolioItem.skills.map((skill) => (
                <Tag.Root
                  padding="20px"
                  bg="blue.400"
                  color="whiteAlpha.700"
                  borderRadius="8px"
                >
                  <Tag.Label fontSize="16px">{skill}</Tag.Label>
                </Tag.Root>
              ))}
            </Flex>
          </Card.Footer>
        </Card.Root>
      ))}
    </Container>
  );
}

export default PortfolioItemCard;
