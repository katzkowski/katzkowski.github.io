import { Box } from "@mui/system";
import { About } from "./About";
import "./App.css";
import { Landing } from "./Landing";
import { Nav } from "./Nav";
import { Projects } from "./Projects";

function App() {
  return (
    <Box>
      <Nav />
      <Landing />
      <About />
      <Projects />
    </Box>
  );
}

export default App;
