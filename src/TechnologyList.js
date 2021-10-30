import { Stack } from "@mui/material";
import React from "react";
import { TechnologyChip } from "./TechnologyChip";

export const TechnologyList = (props) => {
  // list of chips for technologies
  const technologies = props.technologies
    ? props.technologies.map((t) => (
        <TechnologyChip
          name={t}
          key={t}
          large={props.large}
          color={props.color}
        />
      ))
    : null;

  return (
    <Stack
      spacing={1}
      direction={props.direction === "column" ? "column" : "row"}
      sx={{ flexWrap: "wrap" }}
    >
      {technologies}
    </Stack>
  );
};
