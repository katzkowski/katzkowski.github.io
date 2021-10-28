import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Container maxWidth="xl" component="section">
      <Typography variant="h3" component="h3">
        Projects
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Project
            title="Generating Website Layouts with AI from Natural Language"
            summary="Summary sentence that briefly describes the idea of the project and my main contributions to it."
            devProcessItems={[
              "Development step 1 with technology 1",
              "Step 2",
              "A longer step 3",
            ]}
            technologies={["Python", "React", "HTML5", "MySQL"]}
            repoLink={"https://github.com"}
            websiteLink={"https://google.com"}
            pdfLink={"/"}
          />
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
