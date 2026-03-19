import { Flex, Link, Heading } from "@chakra-ui/react";
import { useEvents } from "../Context/Context";
// import { Link } from "react-router";

export const Navigation = () => {
  const { setOpen } = useEvents();

  return (
    <nav>
      <Flex
        direction={{ base: "column", md: "row" }}
        width="full"
        height={{ base: "200px", md: "80px" }}
        background="gray.100"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        padding="10px 30px"
        gap={4}
      >
        <Heading as="h1" fontSize="26px" fontWeight="bold">
          Events App
        </Heading>
        <Flex alignItems="center" justifyContent="end" gap={6}>
          <Link
            href="/"
            textDecoration="none"
            fontSize="18px"
            fontWeight="bold"
          >
            Events
          </Link>
          <Link
            textDecoration="none"
            fontSize="18px"
            fontWeight="bold"
            onClick={() => setOpen(true)}
          >
            Add Event
          </Link>
          <Link
            href="/contact"
            textDecoration="none"
            fontSize="18px"
            fontWeight="bold"
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
};
