import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TechnologyList } from "./TechnologyList";

export const Skills = () => {
  return (
    <Container maxWidth="xl" component="section" id="skills">
      <Typography variant="h3" component="h3" sx={{ my: 4 }}>
        Skills
      </Typography>

      <Grid container spacing={12} sx={{ justifyContent: "center" }}>
        {/* Programming languages */}
        <Grid item>
          <Typography variant="h5" component="h5" sx={{ my: 2 }}>
            Languages
          </Typography>
          <TechnologyList
            direction="column"
            technologies={[
              "Python",
              "JavaScript",
              "SQL",
              "Haskell",
              "Java",
              "C / C++",
              "HTML5 & CSS3",
            ]}
          />
        </Grid>

        {/* AI technologies */}
        <Grid item>
          <Typography variant="h5" component="h5" sx={{ my: 2 }}>
            AI technologies
          </Typography>
          <TechnologyList
            direction="column"
            technologies={[
              "Pytorch",
              "scikit-learn",
              "Jupyter",
              "Pandas",
              "Keras",
              "TensorFlow",
            ]}
            sx={{ width: "auto" }}
          />
        </Grid>

        {/* Other, more general frameworks */}
        <Grid item>
          <Typography variant="h5" component="h5" sx={{ my: 2 }}>
            Other frameworks
          </Typography>
          <TechnologyList
            direction="column"
            technologies={[
              "Flask",
              "Node.js",
              "React",
              "Gatsby",
              "Material UI",
              "JavaFX",
            ]}
            sx={{ width: "auto" }}
          />
        </Grid>

        {/* Software tools */}
        <Grid item>
          <Typography variant="h5" component="h5" sx={{ my: 2 }}>
            Tools
          </Typography>
          <TechnologyList
            direction="column"
            technologies={[
              "Git",
              "Jira",
              "Unix VM",
              "Google Cloud",
              "Figma/Adobe XD",
              "LaTeX",
              "MS Office",
            ]}
            sx={{ width: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
