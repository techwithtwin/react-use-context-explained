import { Button, Stack, Text } from "@chakra-ui/react";
import { IoIosExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <Stack bg="whiteAlpha.400" p={4} borderRadius="md">
      <Text color="white">Sidebar</Text>
      <Button mt="auto" colorPalette="red">
        Logout <IoIosExit />
      </Button>
    </Stack>
  );
};

export default Sidebar;
