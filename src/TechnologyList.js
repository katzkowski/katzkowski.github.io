import { Box } from "@mui/material";
import React from "react";
import { TechnologyChip } from "./TechnologyChip";

export const TechnologyList = (props) => {
  // list of chips for technologies
  const technologies = props.technologies
    ? props.technologies.map((t) => <TechnologyChip name={t} key={t} />)
    : null;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
      {technologies}
    </Box>
  );
};