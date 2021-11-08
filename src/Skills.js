import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TechnologyList } from "./TechnologyList";

export const Skills = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey.900",
      }}
    >
      <Container
        maxWidth="xl"
        component="section"
        id="skills"
        sx={{
          bgcolor: "grey.900",
          py: 8,
        }}
      >
        <Typography variant="h3" component="h3" sx={{ mb: 5 }}>
          Skills
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, xl: 14 }}
          sx={{ justifyContent: "center" }}
        >
          {/* Programming languages */}
          <Grid item xs={8} sm={5} md={3}>
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
              large
              color="error"
            />
          </Grid>

          {/* AI technologies */}
          <Grid item xs={8} sm={5} md={3}>
            <Typography variant="h5" component="h5" sx={{ my: 2 }}>
              AI & Data Science
            </Typography>
            <TechnologyList
              direction="column"
              technologies={[
                "Pytorch",
                "scikit-learn",
                "spaCy",
                "Jupyter",
                "Pandas",
                "Keras",
                "matplotlib",
              ]}
              large
              color="success"
            />
          </Grid>

          {/* Other, more general frameworks */}
          <Grid item xs={8} sm={5} md={3}>
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
                "Bootstrap",
                "JavaFX",
              ]}
              large
              color="info"
            />
          </Grid>

          {/* Software tools */}
          <Grid item xs={8} sm={5} md={3}>
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
              large
              color="secondary"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
