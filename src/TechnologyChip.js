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

  return props.large ? (
    <Chip
      sx={{
        p: 2,
        borderRadius: "10px",
        fontSize: "0.9rem",
        flexGrow: 0,
        fontWeight: 500,
        color: "text.primary",
        // bgcolor: props.color ? `${props.color}.main` : "default",
      }}
      // icon={getIcon(props.name)}
      label={props.name}
      variant="outlined"
      color={props.color ? props.color : "default"}
    />
  ) : (
    <Chip
      sx={{ maxWidth: "8rem" }}
      // icon={getIcon(props.name)}
      label={props.name}
      variant="outlined"
    />
  );
};
