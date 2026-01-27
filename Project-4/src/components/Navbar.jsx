import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="10px" align="center" bg="blue.800">
      <Heading as="h1" color="white">
        My Portfolio
      </Heading>
      <Spacer />
      <Flex gap="20px" align="center">
        <Button bg="transparent">Home</Button>
        <Button bg="transparent">Projects</Button>
        <Button bg="transparent">About</Button>
        <Button bg="transparent">Contact</Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
