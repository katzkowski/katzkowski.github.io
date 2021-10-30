import { AppBar, Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

export const Nav = () => {
  return (
    <AppBar
      position="sticky"
      // sx={{ background: "transparent", boxShadow: "none" }}
    >
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
            <Button
              variant="text"
              color="secondary"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              About
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              Projects
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              Skills
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
