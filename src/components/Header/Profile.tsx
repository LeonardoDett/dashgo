import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Leonardo dettmann</Text>
            <Text color="gray.300" fontSize="small">Leokruger2012@hotmail.com</Text>
          </Box>
        )
      }


      <Avatar size="md" name="Leonardo Dettmann" />
    </Flex>
  );
}