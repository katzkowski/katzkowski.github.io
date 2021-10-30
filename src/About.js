import Timeline from "@mui/lab/Timeline";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TimelineCard } from "./TimelineCard";

export const About = () => {
  return (
    <Container maxWidth="xl" component="section" id="about">
      <Typography variant="h3" component="h3" sx={{ my: 4 }}>
        About me
      </Typography>
      <Grid container spacing={4}>
        {/* Personal description */}
        <Grid item xs={12} lg={5}>
          <Typography variant="h6" component="h6">
            Kevin Katzkowski
          </Typography>

          <Typography variant="caption" component="div" sx={{ mb: 2 }}>
            M. Sc. Informatics student at the Technical University of Munich
          </Typography>

          <Typography variant="body1" component="div">
            I'm a Master Informatics student at TUM with a passion for computer
            science and technology in general. Specifically, I'm interested in
            deep learning, computer vision, data science and other artificial
            intelligence topics like machine learning and natural language
            processing.
          </Typography>
        </Grid>

        {/* Education & Work Experience*/}
        <Grid item xs={12} lg={7}>
          <Typography variant="h6" component="h6">
            Education & Work Experience
          </Typography>

          <Timeline
            // position="alternate"
            sx={{ maxWidth: "900px", margin: "auto" }}
          >
            <TimelineCard
              title="M. Sc. Informatics"
              startDate="2021"
              endDate="Today"
              description="TUM"
              img="./tum-logo.png"
              imgAlt="TUM Logo"
              imgHref="https://tum.de/"
            />

            <TimelineCard
              title="B. Sc. Media Informatics"
              startDate="2018"
              endDate="2021"
              description="University of Bremen"
              img="./uni-hb-logo.png"
              imgAlt="Uni Bremen Logo"
              imgHref="https://uni-bremen.de/"
            />

            <TimelineCard
              title="Working Student"
              startDate="2017"
              endDate="2020"
              description="WebMen Internet GmbH"
              img="./webmen-logo.jpg"
              imgAlt="WebMen Logo"
              imgHref="https://webmen.de/"
            />

            <TimelineCard
              title="Intern Software Dev."
              startDate="04.2017"
              description="WebMen Internet GmbH"
              img="./webmen-logo.jpg"
              imgAlt="WebMen Logo"
              imgHref="https://webmen.de/"
            />

            <TimelineCard
              title="Intern Software Dev."
              startDate="05.2015"
              description="encoway GmbH"
              img="./encoway-logo.png"
              imgAlt="encoway Logo"
              imgHref="https://encoway.de/"
            />

            <TimelineCard
              isLast
              title="A-Levels (Abitur)"
              startDate="2010"
              endDate="2018"
              description="Gymnasium Horn"
              img="./gym-horn-logo.png"
              imgAlt="Gymnasium Horn Logo"
              imgHref="https://309.sixcms.schule.bremen.de/startseite-1459"
            />
          </Timeline>
        </Grid>
      </Grid>
    </Container>
  );
};
