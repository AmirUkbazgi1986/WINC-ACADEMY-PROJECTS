import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Box } from "@chakra-ui/react";
import { Toaster } from "../components/ui/toaster";

import { ContextProvider } from "../Context/Context";

import CreateEvents from "../components/CreateEvents";
import EditEvents from "../components/EditEvents";

export const Root = () => {
  return (
    <Box maxW="1300px" minH="100vh" background="#fff" margin="0 auto">
      <ContextProvider>
        <Navigation />
        <Outlet />
        <CreateEvents />
        <EditEvents />
        <Toaster />
      </ContextProvider>
    </Box>
  );
};
