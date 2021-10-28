import { Box, Typography } from "@mui/material";
import React from "react";
import { TechnologyList } from "./TechnologyList";

export const Project = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" component="h4">
          {props.title}
        </Typography>

        <Typography variant="body1" component="p">
          {props.summary}
        </Typography>

        <Typography variant="body1" component="p">
          {props.devProcess}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="h6">
            Used technologies
          </Typography>
          <TechnologyList technologies={props.technologies} />
        </Box>
      </Box>
    </Box>
  );
};
