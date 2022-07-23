import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Lopes</Text>
          <Text color="gray.300" fontSize="small">
            guilhermelopes17@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Guilherme Lopes" src="https://github.com/guilhermelps.png" />
    </Flex>
  );
}