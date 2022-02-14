import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { FaFilePdf, FaGithub, FaLink } from "react-icons/fa";
import { TechnologyList } from "./TechnologyList";

const DevItem = styled("li")({
  listStyleType: "circle",
});

export const Project = (props) => {
  return (
    <Paper variant="outlined" sx={{ bgcolor: "grey.900" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={4}
        sx={{ display: "flex", p: 3 }}
      >
        {props.large ? (
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ mb: 3 }}>
              {props.title}
            </Typography>
          </Grid>
        ) : null}

        {/* Lead text for large card above image for mobile */}
        {props.large ? (
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              order: 0,
            }}
          >
            <Typography
              variant="body1"
              component="p"
              sx={{ color: "text.secondary", mb: { xs: 2, md: 0 } }}
            >
              {props.summary}
            </Typography>
          </Grid>
        ) : null}

        {/* project description */}
        <Grid
          item
          xs={12}
          md={props.large ? 6 : 12}
          sx={{
            display: "flex",
            flexDirection: "column",
            order: props.large ? { xs: 2, md: 1 } : 2,
          }}
        >
          {!props.large ? (
            <Grid item xs={12}>
              <Typography variant="h4" component="h4" sx={{ my: 2 }}>
                {props.title}
              </Typography>
            </Grid>
          ) : null}
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "text.secondary",
              display: props.large ? { xs: "none", md: "block" } : "block",
            }}
          >
            {props.summary}
          </Typography>

          <Box component="ul" sx={{ color: "text.secondary" }}>
            {props.devProcessItems
              ? props.devProcessItems.map((item) => {
                  return <DevItem key={item}>{item}</DevItem>;
                })
              : null}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TechnologyList technologies={props.technologies} />
          </Box>

          <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
            {props.repoLink ? (
              <Button
                variant="outlined"
                startIcon={<FaGithub />}
                aria-label="GitHub repository"
                href={props.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </Button>
            ) : null}
            {props.websiteLink ? (
              <Button
                variant="outlined"
                startIcon={<FaLink />}
                aria-label="Project website"
                href={props.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </Button>
            ) : null}
            {props.pdfLink ? (
              <Button
                variant="outlined"
                startIcon={<FaFilePdf />}
                aria-label="PDF document download"
                href={props.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF
              </Button>
            ) : null}
          </Stack>
        </Grid>

        {/* project image */}
        <Grid
          item
          xs={12}
          md={props.large ? 6 : 12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            order: props.large ? { xs: 1, md: 2 } : 1,
          }}
        >
          <img
            style={{ width: "100%", alignSelf: "center", borderRadius: 5 }}
            src={props.image ? props.image : "/logo512.png"}
            alt="project highlight"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
