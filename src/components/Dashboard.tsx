import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { marginX } from "@/utils/constants";

const Dashboard = () => {
  return (
    <Flex mx={marginX} gap={4} flex={1} mb={2}>
      <Sidebar />
      <Main />
    </Flex>
  );
};

export default Dashboard;
