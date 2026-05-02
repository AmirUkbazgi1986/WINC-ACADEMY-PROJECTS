import { Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode.jsx";

export default function ErrorPage({ error, onRetry }) {
  const headingColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const textColor = useColorModeValue("gray.700", "gray.200");
  return (
    <Stack flex="flex" alignItems="center" gap="32px">
      <Heading
        as={"h1"}
        color={headingColor}
        textAlign={"center"}
        marginTop={"10px"}
        fontSize={"32px"}
      >
        Something went wrong
      </Heading>
      <Text textAlign="center" mt="20px" fontSize="lg" color={textColor}>
        {error.message}
      </Text>
      <Button
        type="button"
        colorScheme="blue"
        width="320px"
        bg={useColorModeValue("blue.500", "blue.400")}
        color="white"
        _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
        onClick={onRetry}
      >
        Try Again
      </Button>
    </Stack>
  );
}
