import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box bgImage="url(/bg.jpg)" h="100vh" bgSize="cover" bgRepeat="no-repeat">
      <Navbar />
    </Box>
  );
}

export default App;
