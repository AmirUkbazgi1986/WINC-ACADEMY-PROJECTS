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

function PortfolioItemCard({ onSelectedId }) {
  // console.log(portfolioItems[0]);
  return (
    <Flex maxW="1200px" wrap="wrap" mx="auto" justifyContent="center">
      {portfolioItems.map((portfolioItem) => (
        <Card.Root
          maxW="450px"
          overflow={"hidden"}
          m="20px"
          borderRadius="20px"
          p="10px"
          boxShadow="10px 8px 10px rgba(0,0,0,0.2)"
          key={portfolioItem.id}
          onClick={() => onSelectedId(portfolioItem.id)}
        >
          <Card.Header>
            <Image
              src={portfolioItem.imageUrl}
              alt="image"
              borderRadius="20px"
              h="300px"
              cursor="pointer"
            />
          </Card.Header>
          <Card.Body gap={2}>
            <Heading
              as="h1"
              textStyle="lg"
              fontWeight="bold"
              letterSpacing="tight"
            >
              {portfolioItem.title}
            </Heading>
            <Text mt="2" fontSize="16px">
              {portfolioItem.summary}
            </Text>
          </Card.Body>
          <Card.Footer gap={2}>
            {portfolioItem.skills.map((skill) => (
              <Flex align="center" wrap="wrap" key={skill}>
                <Tag.Root
                  padding="10px"
                  bg="blue.200"
                  color="blackAlpha.800"
                  borderRadius="8px"
                  cursor="pointer"
                >
                  <Tag.Label fontSize="16px">{skill}</Tag.Label>
                </Tag.Root>
              </Flex>
            ))}
          </Card.Footer>
        </Card.Root>
      ))}
    </Flex>
  );
}

export default PortfolioItemCard;
