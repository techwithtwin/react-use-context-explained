import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { marginX } from "@/utils/constants";

interface Props {
  logout: () => void;
  username: string | undefined;
}

const Dashboard = ({ logout, username }: Props) => {
  return (
    <Flex mx={marginX} gap={4} flex={1} mb={2}>
      <Sidebar logout={logout} username={username} />
      <Main />
    </Flex>
  );
};

export default Dashboard;
