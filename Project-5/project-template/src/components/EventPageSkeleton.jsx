import { Box, Card, HStack, Stack, Skeleton } from "@chakra-ui/react";

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
        <Box
          w={{ base: "full", md: "50%" }}
          h={{ base: "250px", md: "450px" }}
          overflow="hidden"
          marginRight={{ base: "0", md: "20px" }}
        >
          <Skeleton height="100%" width="100%" />
        </Box>

        <Stack flex="1">
          <Card.Body gap={2}>
            {/* Title Skeleton */}
            <Skeleton height="24px" width="60%" my="4px" />

            {/* Description Skeleton */}
            <Stack gap={2} mt="2">
              <Skeleton height="16px" width="90%" />
            </Stack>
          </Card.Body>

          <Card.Footer flexDir="column" alignItems="flex-start">
            {/* Details Lines (Start/End Date, Category) */}
            <Stack gap={2} width="100%">
              <Skeleton height="16px" width="45%" />
              <Skeleton height="16px" width="40%" />
              <Skeleton height="16px" width="45%" />
              <Skeleton height="16px" width="40%" />
              <Skeleton height="16px" width="50%" />
            </Stack>

            {/* Buttons Skeleton */}
            <HStack marginTop="20px" gap={6}>
              <Skeleton height="40px" width="110px" borderRadius="md" />
              <Skeleton height="40px" width="125px" borderRadius="md" />
            </HStack>
          </Card.Footer>
        </Stack>
      </Card.Root>
    </Box>
  );
}

export default EventPageSkeleton;
