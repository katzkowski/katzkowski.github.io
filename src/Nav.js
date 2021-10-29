import { AppBar, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

export const Nav = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: 0, lg: 0 } }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="h5">
            Kevin Katzkowski
          </Typography>

          <Stack spacing={2} direction="row">
            <Box>About</Box>
            <Box>Projects</Box>
            <Box>Skills</Box>
            <Box>Contact</Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
