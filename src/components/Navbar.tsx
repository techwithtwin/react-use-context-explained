import { marginX } from "@/utils/constants";
import { Avatar, Box, Flex, Heading, Menu, Portal } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex justify="space-between" mx={marginX} py="1rem">
        <Heading color="white">TechWithTwin.</Heading>
        <Menu.Root>
          <Menu.Trigger>
            <Avatar.Root>
              <Avatar.Fallback name="TechWithTwin" />
              <Avatar.Image src="https://avatars.githubusercontent.com/u/140457665?s=40&v=4" />
            </Avatar.Root>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="username">Username: TechWithTwin</Menu.Item>
                <Menu.Item value="role">Role: Admin</Menu.Item>
                <Menu.Item
                  value="delete"
                  color="fg.error"
                  _hover={{ bg: "bg.error", color: "fg.error" }}
                >
                  Logout
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>
    </Box>
  );
};

export default Navbar;
