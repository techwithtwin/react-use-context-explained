import { Stack } from "@chakra-ui/react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Stack
      bgColor="#5f5f5f"
      bgBlendMode="multiply"
      bgImage="url(/bg.jpg)"
      h="100vh"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Navbar />
      <Dashboard />
    </Stack>
  );
}

export default App;
