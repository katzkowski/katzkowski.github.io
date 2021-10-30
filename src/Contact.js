import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { MdWavingHand } from "react-icons/md";

export const Contact = () => {
  return (
    <Container
      maxWidth="xl"
      component="section"
      id="contact"
      sx={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        // variant="outlined"
        sx={{ m: 10, width: "80%", height: "40%", textAlign: "center" }}
      >
        <Typography variant="h1" component="h2" sx={{ my: 4 }}>
          Get in Touch
        </Typography>
        <Typography variant="h5" component="div">
          I'm happy to hear from you!
        </Typography>
        <Button variant="outlined" sx={{ my: 3 }} endIcon={<MdWavingHand />}>
          Say hello
        </Button>
      </Paper>
    </Container>
  );
};
