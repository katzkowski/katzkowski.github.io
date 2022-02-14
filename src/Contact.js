import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";

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
        {/* <Button variant="outlined" sx={{ my: 3 }} endIcon={<MdWavingHand />}>
          Say hello
        </Button> */}
        <Stack
          spacing={{ xs: 1 }}
          direction="row"
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="GitHub"
            sx={{ display: { xs: "inline-flex" }, color: "primary.main" }}
            href="https://github.com/katzkowski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="LinkedIn"
            sx={{ display: { xs: "inline-flex" }, color: "primary.main" }}
            href="https://www.linkedin.com/in/kevin-katzkowski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Container>
  );
};
