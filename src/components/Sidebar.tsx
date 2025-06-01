import { Button, Stack, Text } from "@chakra-ui/react";
import { IoIosExit } from "react-icons/io";
import { Tooltip } from "./ui/tooltip";

interface Props {
  username: string | undefined;
  logout: () => void;
}

const Sidebar = ({ logout, username }: Props) => {
  return (
    <Stack bg="whiteAlpha.400" p={4} borderRadius="md">
      <Text color="white">Sidebar</Text>
      {!username ? (
        <Text color="red" mt="auto">
          Not Logged IN
        </Text>
      ) : (
        <Tooltip
          content="Logout TechWithTwin"
          showArrow
          contentProps={{ css: { "--tooltip-bg": "tomato" } }}
        >
          <Button mt="auto" colorPalette="red" onClick={() => logout()}>
            Logout <IoIosExit />
          </Button>
        </Tooltip>
      )}
    </Stack>
  );
};

export default Sidebar;
