import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Box } from "@chakra-ui/react";

import { useLoaderData, useNavigation } from "react-router";
import { ContextProvider } from "../Context/Context";
import EventModuleForm from "../components/EventModule";

export const Root = () => {
  const events = useLoaderData();
  const navigation = useNavigation();
  console.log(events);
  // idle, loading, submitting
  if (navigation.state === "loading") {
    return <p>Loading ...</p>;
  }

  return (
    <Box maxW="1300px" minH="100vh" border="1px solid #333" margin="0 auto">
      <ContextProvider initialEvents={events}>
        <Navigation />
        <Outlet />
        <EventModuleForm />
      </ContextProvider>
    </Box>
  );
};
