import { marginX } from "@/utils/constants";
import { Box, Flex, Heading } from "@chakra-ui/react";
import NavUserMenu from "./NavUserMenu";

const Navbar = () => {
  return (
    <Box>
      <Flex justify="space-between" mx={marginX} py="1rem">
        <Heading color="white">TechWithTwin.</Heading>
        <NavUserMenu />
      </Flex>
    </Box>
  );
};

export default Navbar;
