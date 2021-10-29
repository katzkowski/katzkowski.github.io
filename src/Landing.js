import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export const Landing = () => {
  return (
    <Container
      maxWidth="xl"
      component="section"
      sx={{
        height: "90vh",
      }}
    >
      <Box sx={{ mt: "15vh" }}>
        <Typography variant="h1" component="h1" sx={{ my: 4 }}>
          Hey, I'm Kevin.
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ my: 2, maxWidth: "60%" }}
        >
          M. Sc. Informatics student at the Technical University of Munich
          interested in deep learning, artificial intelligence and new
          technologies in general.
        </Typography>

        <Button variant="outlined" href="#projects" sx={{ my: 2 }}>
          My projects
        </Button>
      </Box>
    </Container>
  );
};
