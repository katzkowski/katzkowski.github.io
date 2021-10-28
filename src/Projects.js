import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" component="h3">
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Project title="Generating Website Layouts with AI from Natural Language" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Project title="lg=6" />
        </Grid>
        <Grid item xs={12} lg={6}>
          lg=6
        </Grid>
        <Grid item xs={12} lg={6}>
          lg=6
        </Grid>
        <Grid item xs={12} lg={6}>
          lg=6
        </Grid>
      </Grid>
    </Container>
  );
};
