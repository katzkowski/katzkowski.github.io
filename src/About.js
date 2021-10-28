import { Container, Typography } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Container maxWidth="xl" component="section">
      <Typography variant="h3" component="h3">
        About me
      </Typography>

      <Typography variant="h6" component="h6">
        Kevin Katzkowski
      </Typography>

      <Typography variant="caption" component="div">
        M. Sc. Informatics student at the Technical University of Munich
      </Typography>

      <Typography variant="body1" component="div">
        I'm a Master Informatics student at TUM with a passion for computer
        science and technology in general. Specifically, I'm interested in deep
        learning, computer vision, data science and other artificial
        intelligence topics like machine learning and natural language
        processing.
      </Typography>
    </Container>
  );
};
