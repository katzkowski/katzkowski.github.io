import { Button, Container, Typography } from "@mui/material";
import React from "react";

export const Landing = () => {
  return (
    <Container maxWidth="xl" component="section">
      <Typography variant="h1" component="h1">
        Hey, I'm Kevin.
      </Typography>

      <Typography variant="subtitle1" component="p">
        M. Sc. Informatics student at the Technical University of Munich
        interested in deep learning, artificial intelligence and new
        technologies in general.
      </Typography>

      <Button>My projects</Button>
    </Container>
  );
};
