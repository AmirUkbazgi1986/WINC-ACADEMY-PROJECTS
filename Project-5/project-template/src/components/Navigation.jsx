import { Flex, Link } from "@chakra-ui/react";
import { useEvents } from "../Context/Context";
// import { Link } from "react-router";

export const Navigation = () => {
  const { setOpen } = useEvents();

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
        <Link
          textDecoration="none"
          fontSize="20px"
          fontWeight="bold"
          onClick={() => setOpen(true)}
        >
          Add Event
        </Link>
      </Flex>
    </nav>
  );
};
