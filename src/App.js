import { Box } from "@mui/system";
import { About } from "./About";
import "./App.css";
import { Contact } from "./Contact";
import { Landing } from "./Landing";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

function App() {
  return (
    <Box>
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Box>
  );
}

export default App;
