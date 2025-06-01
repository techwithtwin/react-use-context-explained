import { Button, Stack, Text } from "@chakra-ui/react";
import { IoIosExit } from "react-icons/io";
import { Tooltip } from "./ui/tooltip";
import { useUser } from "@/hooks/useUser";

const Sidebar = () => {
  const { user, logout } = useUser();
  return (
    <Stack bg="whiteAlpha.400" p={4} borderRadius="md">
      <Text color="white">Sidebar</Text>
      {!user ? (
        <Text color="red" mt="auto">
          Not Logged IN
        </Text>
      ) : (
        <Tooltip
          content={`Logout ${user.username}`}
          showArrow
          contentProps={{ css: { "--tooltip-bg": "tomato" } }}
        >
          <Button mt="auto" colorPalette="red" onClick={logout}>
            Logout <IoIosExit />
          </Button>
        </Tooltip>
      )}
    </Stack>
  );
};

export default Sidebar;
