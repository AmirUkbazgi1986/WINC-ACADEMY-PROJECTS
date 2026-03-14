import { Flex, Link } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <nav>
      <Flex
        width="full"
        height="80px"
        background="green.200"
        alignItems="center"
        justifyContent="end"
        padding="10px 30px"
        gap={6}
      >
        <Link href="/" textDecoration="none" fontSize="20px" fontWeight="bold">
          Events
        </Link>
        <Link textDecoration="none" fontSize="20px" fontWeight="bold">
          Add Event
        </Link>
      </Flex>
    </nav>
  );
};
