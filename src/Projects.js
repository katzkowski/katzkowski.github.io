import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Container id="projects" maxWidth="xl" component="section">
      <Typography variant="h3" component="h3" sx={{ my: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Project
            title="Generating Website Layouts with AI from Natural Language"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            technologies={[
              "Python",
              "PyTorch",
              "Pandas",
              "MySQL",
              "Google Cloud",
              "Scikit-Learn",
              "Flask",
              "React",
            ]}
            repoLink={"https://github.com"}
            websiteLink={"https://google.com"}
            pdfLink={"/"}
            large
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            title="Song Popularity Prediction"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            technologies={["Python", "Pandas", "Scikit-Learn", "MySQL"]}
            repoLink={"https://github.com"}
            websiteLink={"https://google.com"}
            pdfLink={"/"}
            large
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="algo-lib"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            image={"/graph-algo.PNG"}
            technologies={[
              "React",
              "Gatsby.js",
              "GraphQL",
              "JavaScript",
              "HTML5",
              "CSS3",
            ]}
            repoLink={"https://github.com/jakhac/graph-algorithms"}
            websiteLink={"https://graph-algorithms.io"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="Graph Algorithm Visualizer"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            image={"/graph-algo.PNG"}
            technologies={["JavaScript", "HTML5", "CSS3"]}
            repoLink={"https://github.com/jakhac/graph-algorithms"}
            websiteLink={"https://graph-algorithms.io"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="Elephanture Chatbot"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            image={"/graph-algo.PNG"}
            technologies={[
              "Python",
              "Flask",
              "SQL",
              "JavaScript",
              "HTML5",
              "CSS3",
            ]}
            repoLink={"https://github.com/jakhac/graph-algorithms"}
            websiteLink={"https://graph-algorithms.io"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="Chemulator"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            image={"/graph-algo.PNG"}
            technologies={["Java", "JavaScript", "HTML5", "CSS3"]}
            repoLink={"https://github.com/jakhac/graph-algorithms"}
            websiteLink={"https://graph-algorithms.io"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
