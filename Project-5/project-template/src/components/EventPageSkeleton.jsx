import {
  Box,
  Card,
  HStack,
  Stack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function EventPageSkeleton() {
  return (
    <Box>
      <Card.Root
        flexDirection={{ base: "column", md: "row" }}
        overflow="hidden"
        maxW={{ base: "300px", sm: "400px", md: "900px" }}
        margin="50px auto"
        borderWidth="1px"
        borderRadius="20px"
      >
        <Box w={{ base: "full", md: "50%" }} h={{ base: "250px", md: "450px" }}>
          <Skeleton height="100%" width="100%" />
        </Box>

        <Stack flex="1" p="6" gap="4">
          <Card.Body gap={4} p="0">
            {/* Title Skeleton */}
            <Skeleton height="32px" width="60%" />

            {/* Description Skeleton */}
            <SkeletonText noOfLines={3} gap="4" />
          </Card.Body>

          <Card.Footer flexDir="column" alignItems="flex-start" p="0" gap={3}>
            {/* Details Lines (Start/End Date, Category) */}
            <Skeleton height="18px" width="40%" />
            <Skeleton height="18px" width="45%" />
            <Skeleton height="18px" width="40%" />
            <Skeleton height="18px" width="45%" />
            <Skeleton height="18px" width="50%" />

            {/* Buttons Skeleton */}
            <HStack marginTop="20px" gap={6} w="full">
              <Skeleton height="40px" width="120px" borderRadius="md" />
              <Skeleton height="40px" width="120px" borderRadius="md" />
            </HStack>
          </Card.Footer>
        </Stack>
      </Card.Root>
    </Box>
  );
}

export default EventPageSkeleton;
