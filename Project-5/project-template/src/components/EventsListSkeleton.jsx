import { Grid, GridItem, Skeleton, Stack } from "@chakra-ui/react";

export const EventsListSkeleton = () => {
  return (
    <Grid
      w="full"
      margin="10px auto"
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {[...Array(6)].map((_, i) => (
        <GridItem key={i} border="1px solid" borderRadius="20px" p={2}>
          <Stack>
            <Skeleton height="200px" borderRadius="10px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="15px" />
            <Skeleton height="15px" />
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
};
