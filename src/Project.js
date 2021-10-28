import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { FaFilePdf, FaGithub, FaLink } from "react-icons/fa";
import { TechnologyList } from "./TechnologyList";

const DevItem = styled("li")({
  listStyleType: "circle",
});

export const Project = (props) => {
  return (
    <Grid container spacing={1} sx={{ display: "flex" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h4" component="h4">
          {props.title}
        </Typography>

        <Typography variant="body1" component="p">
          {props.summary}
        </Typography>

        {/* <Typography variant="body1" component="p">
          {props.devProcess}
        </Typography> */}

        <Box component="ul">
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
          <Typography variant="h6" component="h6">
            Used technologies
          </Typography>
          <TechnologyList technologies={props.technologies} />
        </Box>

        <Stack direction="row">
          <Button
            variant="outlined"
            startIcon={<FaGithub />}
            aria-label="GitHub repository"
            href={props.repoLink}
          >
            source code
          </Button>
          {props.websiteLink ? (
            <Button
              variant="outlined"
              startIcon={<FaLink />}
              aria-label="Project website"
              href={props.websiteLink}
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
            >
              PDF
            </Button>
          ) : null}
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          style={{ maxWidth: "512px", alignSelf: "center" }}
          src="/logo512.png"
          alt="project image"
        />
      </Grid>
    </Grid>
  );
};
