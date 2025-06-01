import type { User } from "@/App";
import { marginX } from "@/utils/constants";
import { Box, Flex, Heading } from "@chakra-ui/react";
import NavUserMenu from "./NavUserMenu";

interface Props {
  user: User | null;
  login: () => void;
}

const Navbar = ({ user, login }: Props) => {
  return (
    <Box>
      <Flex justify="space-between" mx={marginX} py="1rem">
        <Heading color="white">TechWithTwin.</Heading>
        <NavUserMenu user={user} login={login} />
      </Flex>
    </Box>
  );
};

export default Navbar;
