import { Chip } from "@mui/material";
import React from "react";
import * as Icons from "react-icons/fa";

export const TechnologyChip = (props) => {
  // get icon from FA icon library
  const getIcon = (name) => {
    const iconName =
      "Fa" + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <Chip icon={getIcon(props.name)} label={props.name} variant="outlined" />
  );
};
