import {
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
  Stack,
  VStack,
} from "@chakra-ui/react";

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
      alignItems="stretch"
      gap={4}
    >
      {[...Array(6)].map((_, i) => (
        <GridItem
          key={i}
          border="1px solid"
          borderRadius="20px"
          p={2}
          minH="530px"
        >
          <Skeleton height="250px" borderRadius="10px" mb={3} />
          <Stack>
            <Stack gap={2} mb={5}>
              <SkeletonText noOfLines={2} height="20px" />
            </Stack>
            <VStack>
              <SkeletonText noOfLines={5} height="20px" mb={2} />
            </VStack>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
};
