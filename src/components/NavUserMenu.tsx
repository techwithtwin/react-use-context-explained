import { useUser } from "@/hooks/useUser";
import { Avatar, Button, Menu, Portal } from "@chakra-ui/react";

const NavUserMenu = () => {
  const { user, login } = useUser();
  if (!user) {
    return (
      <Button
        colorPalette="green"
        onClick={() =>
          login({
            username: "TechWithTwin",
            role: "ADMIN",
            profile: "https://avatars.githubusercontent.com/u/140457665?v=4",
          })
        }
      >
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
