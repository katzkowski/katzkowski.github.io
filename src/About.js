import Timeline from "@mui/lab/Timeline";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { TimelineCard } from "./TimelineCard";

export const About = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey.900",
      }}
    >
      <Container
        maxWidth="xl"
        component="section"
        id="about"
        sx={{ bgcolor: "grey.900", boxSizing: "border-box", py: 8 }}
      >
        <Typography variant="h3" component="h3" sx={{ mb: 5 }}>
          About me
        </Typography>
        <Grid container spacing={4}>
          {/* Personal description */}
          <Grid item xs={12} lg={5}>
            <Typography variant="h6" component="h6">
              Kevin Katzkowski
            </Typography>

            <Typography variant="caption" component="div" sx={{ mb: 3 }}>
              M. Sc. Informatics student at the Technical University of Munich
            </Typography>

            <Typography variant="body1" component="div" sx={{ mb: 2 }}>
              I'm a Master Informatics student in the first semester with a huge
              passion for computer science and technology in general.
              Specifically, I'm focused on deep learning, computer vision, data
              science and other artificial intelligence topics like machine
              learning and natural language processing.
            </Typography>

            <Typography variant="body1" component="div" sx={{ mb: 2 }}>
              Software development is another passion of mine. I have three
              years of experience in several programming languages, including
              Python, JavaScript, Java and others. See the{" "}
              <Link href="#skills" underline="hover">
                skills
              </Link>{" "}
              section for a comprehensive list and the{" "}
              <Link href="#projects" underline="hover">
                projects
              </Link>{" "}
              section below for a selection of my projects at the intersection
              of AI, data science and software development.
            </Typography>

            <Typography variant="body1" component="div" sx={{ mb: 2 }}>
              Besides that, I enjoy solving complex mathematical and logical
              problems. In my Media Informatics bachelor's studies, I
              additionally took modules in the mathematical and logical domain
              worth 37 credits to extend my theoretical background.
            </Typography>

            <Typography variant="body1" component="div" sx={{ mb: 2 }}>
              My clear aim for the future is to continue my specialization in
              deep learning, computer vision as well as machine learning, so I
              can significantly contribute to the technological advance in the
              field of artificial intelligence and data science.
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
                img="./webmen-logo.png"
                imgAlt="WebMen Logo"
                imgHref="https://webmen.de/"
              />

              <TimelineCard
                title="Intern Software Dev."
                startDate="04.2017"
                description="WebMen Internet GmbH"
                img="./webmen-logo.png"
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
    </Box>
  );
};
