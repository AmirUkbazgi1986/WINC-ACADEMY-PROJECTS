import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeToggle } from "./ColorModeToggle";

function Navbar() {
  return (
    <Box
      bg="blue.500"
      p="5px"
      maxW="1400px"
      mx="auto"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        as="nav"
        p="10px"
        mb="10px"
        align="center"
        maxW="1300px"
        mx="auto"
      >
        <Heading as="h1" size={"3xl"} color="white">
          My Portfolio
        </Heading>
        <Spacer />
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          gap={{ base: "10px", md: "20px", lg: "20px" }}
          align="center"
        >
          <Button bg="transparent" fontSize="18px" color="white">
            Home
          </Button>
          <Button bg="transparent" fontSize="18px" color="white">
            Projects
          </Button>
          <Button bg="transparent" fontSize="18px" color="white">
            About
          </Button>
          <Button bg="transparent" fontSize="18px" color="white">
            Contact
          </Button>
          <ColorModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
