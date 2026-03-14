import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";

export const Root = () => {
  return (
    <Box maxW="1300px" minH="100vh" border="1px solid #333" margin="0 auto">
      <Navigation />
      <Outlet />
    </Box>
  );
};
