import { Stack } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

export type User = {
  username: string;
  role: "ADMIN" | "USER";
  profile: string;
};

const defaultUser: User = {
  username: "TechWithTwin",
  role: "ADMIN",
  profile: "https://avatars.githubusercontent.com/u/140457665?s=40&v=4",
};

function App() {
  const [user, setUser] = useState<User | null>(defaultUser);
  return (
    <Stack
      bgColor="#5f5f5f"
      bgBlendMode="multiply"
      bgImage="url(/bg.jpg)"
      h="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Navbar user={user} login={() => setUser(defaultUser)} />
      <Dashboard username={user?.username} logout={() => setUser(null)} />
    </Stack>
  );
}

export default App;
