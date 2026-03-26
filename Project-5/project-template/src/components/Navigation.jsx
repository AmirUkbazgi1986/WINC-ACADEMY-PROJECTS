import { Flex, Link } from "@chakra-ui/react";
import { useEvents } from "../Context/Context";
import { Link as RouterLink } from "react-router";

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
        <Link
          as={RouterLink}
          to="/"
          textDecoration="none"
          fontSize="26px"
          fontWeight="bold"
          _focus={{ outline: "none" }}
        >
          Events App
        </Link>
        <Flex alignItems="center" justifyContent="end" gap={6}>
          <Link
            as={RouterLink}
            to="/"
            textDecoration="none"
            fontSize="18px"
            fontWeight="bold"
            _focus={{ outline: "none" }}
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
            as={RouterLink}
            to="/contact"
            textDecoration="none"
            fontSize="18px"
            fontWeight="bold"
            _focus={{ outline: "none" }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </nav>
  );
};
