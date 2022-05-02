import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo Silva</Text>
        <Text color="gray.300" fontSize="small">eduardojrodriguessilva@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Eduardo Silva" src="https://github.com/eduardojrsilva.png" />
    </Flex>
  );
}