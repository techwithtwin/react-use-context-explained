import type { User } from "@/App";
import { Avatar, Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  user: User | null;
  login: () => void;
}

const NavUserMenu = ({ user, login }: Props) => {
  if (!user) {
    return (
      <Button colorPalette="green" onClick={() => login()}>
        Login
      </Button>
    );
  }
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Avatar.Root>
          <Avatar.Fallback name={user.username} />
          <Avatar.Image src={user.profile} />
        </Avatar.Root>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="username">Username: {user.username}</Menu.Item>
            <Menu.Item value="role">Role: {user.role}</Menu.Item>
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
  );
};

export default NavUserMenu;
