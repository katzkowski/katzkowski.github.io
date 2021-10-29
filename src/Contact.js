import { Container, Typography } from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <Container maxWidth="xl" component="section" sx={{ height: "45vh" }}>
      <Typography variant="h3" component="h3" sx={{ my: 4 }}>
        Contact
      </Typography>
    </Container>
  );
};
