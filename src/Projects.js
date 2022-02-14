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
            title="Traffic Sign Classification with Neural Networks"
            summary="Trained and implemented several neural networks for the task of traffic sign classification"
            devProcessItems={[
              "Dataset from German Traffic Sign Recognition Benechmark (GTSRB)",
              "Implemented fully-connected and convolutional neural networks in PyTorch",
              "Explored data augmentation and different architectures",
              "Hyperparameter tuning for architecture choices and optimization algorithms",
              "Planned implementationss: residual networks, (variational) autoencoder",
              "Best test accuracy: 94.05% (2 conv. layers, max pooling, ReLU, BN, 2 FC layers)",
            ]}
            technologies={["Python", "PyTorch", "Tensorboard"]}
            image={"/traffic-sign-classification.jpg"}
            repoLink={
              "https://github.com/katzkowski/traffic-sign-classification"
            }
            large
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            title="Generating Website Layouts with AI from Natural Language Input"
            summary="Trained Generative Adversarial Networks (GANs) to generate images of websites based on natural language messages send to a chatbot"
            devProcessItems={[
              "Self-created dataset by web scraping",
              "Introduced custom label quality metrics transferred from information retrieval domain",
              "Re-labeled dataset based on visual similarity based on k-means clustering and label quality metrics",
              "Self-developed chatbot based on spaCy NLP library",
              "Multiple GANs trained at large-scale with transfer learning approach using Google Cloud Platform and PyTorch",
              "Chatbot UI written in React using Material-UI framework",
            ]}
            technologies={[
              "Python",
              "PyTorch",
              "Pandas",
              "MySQL",
              "Google Cloud",
              "scikit-learn",
              "spaCy",
              "React",
            ]}
            image={"/generated-websites-samples-small.JPG"}
            repoLink={"https://github.com/katzkowski/webgen-chatbot"}
            websiteLink={"https://webgen-bot.netlify.app/"}
            // pdfLink={"/"}
            large
          />
        </Grid>
        <Grid item xs={12}>
          <Project
            title="Song Popularity Prediction using Ensemble Learning"
            summary="Prediction of a song's popularity based on musical features, lyrics and artist data"
            devProcessItems={[
              "Musical features and artist data from Spotify dataset",
              "Lyrics for songs of Spotify dataset fetched from Genius API",
              "Stored songs with self-created lyrical features and other features in SQL database",
              "Trained classifiers for musical, lyrical and artist features",
              "Used ensemble learning methods to increase accurarcy",
            ]}
            technologies={["Python", "Pandas", "Scikit-Learn", "MySQL"]}
            image={"/song-popularity-hero.JPG"}
            repoLink={"https://github.com/jakhac/song-popularity"}
            // pdfLink={"/"}
            large
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="algo-lib"
            summary="Library of algorithms encountered during studies with short descriptions"
            devProcessItems={[
              "Developed with React and Gatsby.js",
              "Data management with GraphQL",
              "Component styling using styled-components",
            ]}
            image={"/algo-lib-hero.jpg"}
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
            summary="Interactive adventure-game chatbot which makes use of the OpenAI GPT-2"
            devProcessItems={[
              "Team leader of project group of 12 students",
              "Project management with Jira",
              "Web server development in Python using Flask-Socketio",
              "Frontend development with JavaScript, HTML5 & CSS3",
              "Database development with SQL",
            ]}
            image={"/elephanture-hero.png"}
            technologies={[
              "Python",
              "Flask",
              "JavaScript",
              "HTML5",
              "CSS3",
              "SQL",
            ]}
            repoLink={"https://github.com/katzkowski/chatbot-group"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Project
            title="chemulator"
            summary="Java application for the computation of chemical formulas  available on Desktop/Android "
            devProcessItems={[
              "Desktop application with Java 8 and JavaFX",
              "Android app developed in Android Studio",
              "Project website with JavaScript, HTML5 & CSS3",
            ]}
            image={"/chemulator-hero.jpg"}
            technologies={["Java", "JavaScript", "HTML5", "CSS3"]}
            repoLink={"https://github.com/katzkowski/chemulator/"}
            websiteLink={"https://katzkowski.github.io/chemulator/"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
