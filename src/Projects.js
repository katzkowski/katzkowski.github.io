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
            repoLink={"https://github.com/katzkowski/ba-code"}
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
            repoLink={"https://github.com/jakhac/song-popularity"}
            pdfLink={"/"}
            large
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="algo-lib"
            summary="Library of algorithms encountered during studies with short descriptions and complexity info"
            devProcessItems={[
              "Developed with React and Gatsby.js",
              "Data management with GraphQL",
              "Component styling using styled-components",
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
            repoLink={"https://github.com/katzkowski/algo-lib"}
            websiteLink={"https://katzkowski.github.io/algo-lib/"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="Graph Algorithm Visualizer"
            summary="Web application for the interactive visualization of graph algorithms on custom graphs"
            devProcessItems={[
              "Custom graphs can be drawn on the canvas",
              "Visual highlighting of the algorithm's path",
              "Backend and frontend written in Vanilla JavaScript",
              // "HTML5 & CSS3 for styling",
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
            summary="Development of an interactive adventure-game chatbot which makes use of the OpenAI GPT-2"
            devProcessItems={[
              "Team leader of project group of 12 students",
              "Project management with Jira",
              "Web server development in Python using Flask-Socketio",
              "Frontend development with JavaScript, HTML5 & CSS3",
              "Database development with SQL",
            ]}
            image={"/graph-algo.PNG"}
            technologies={[
              "Python",
              "Flask",
              "JavaScript",
              "HTML5",
              "CSS3",
              "SQL",
            ]}
            repoLink={"https://github.com/minotalen/chatbot-group"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="Chemulator"
            summary="Java application for the computation of chemical formulas  available on Desktop and Android "
            devProcessItems={[
              "Desktop application with Java 8 and JavaFX",
              "Android app developed in Android Studio",
              "Project website with JavaScript, HTML5 & CSS3",
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
