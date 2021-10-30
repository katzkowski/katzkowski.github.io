import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { About } from "./About";
import { Contact } from "./Contact";
import { Landing } from "./Landing";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { darkTheme } from "./theme";

function App() {
  const theme = createTheme(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Nav />
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
