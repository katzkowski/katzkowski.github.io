import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Container id="projects" maxWidth="xl" component="section" sx={{ py: 8 }}>
      <Typography variant="h3" component="h3" sx={{ mb: 5 }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Project
            title="Generating Website Layouts with AI from Natural Language Input"
            summary="Generative Adversarial Networks (GANs) trained to generate images of websites based on natural language messages send to a chatbot"
            devProcessItems={[
              "Self-created dataset by web scraping",
              "Introduced custom label quality metrics transferred from information retrieval domain",
              "Re-labeled dataset based on visual similarity based on k-means clustering and label quality metrics",
              "Self-developed chatbot based on spaCy NLP library",
              "Multiple GANs trained at large-scale with transfer learning approach using Google Cloud Platform and PyTorch",
              "NVIDIA Tesla V100 GPU used as accelerator and for higher image resolution (512 x 512 px)",
              "Developed chatbot from scratch with spaCy NLP library",
              "UI written in React using Material-UI framework",
            ]}
            technologies={[
              "Python",
              "PyTorch",
              "Pandas",
              "MySQL",
              "Google Cloud",
              "scikit-learn",
              "spaCy",
              "Flask",
              "React",
            ]}
            repoLink={"https://github.com/katzkowski/ba-code"}
            websiteLink={"https://webgen-bot.netlify.app/"}
            pdfLink={"/"}
            large
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            title="Song Popularity Prediction"
            summary="Prediction of a song's popularity based on musical features and artist data from Spotify, in combination with self-collected lyrical features"
            devProcessItems={[
              "Lyrics for songs of Spotify dataset fetched from Genius API",
              "Stored songs with custom lyric metrics and other features in SQL database",
              "Trained classifiers for musical, lyrical and artist features",
              "Used ensemble learning methods to increase accurarcy",
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
            summary="Library of algorithms encountered during studies with short descriptions and complexity information"
            devProcessItems={[
              "Developed with React and Gatsby.js",
              "Data management with GraphQL",
              "Component styling using styled-components",
            ]}
            image={"/graph-algo.PNG"}
            technologies={[
              "React",
              "Gatsby",
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
