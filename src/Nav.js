import { AppBar, Box, Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";
import React from "react";

const StyledNavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
}));

export const Nav = () => {
  // trigger to show navbar background color
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

  return (
    <AppBar
      position="sticky"
      sx={{
        background: !trigger && "transparent",
        boxShadow: "none",
        transition: ".5s background",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: 0, lg: 0 } }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="h6" sx={{ fontWeight: "500" }}>
            <Box sx={{ display: "inline", color: "primary.main" }}>Kevin</Box>{" "}
            Katzkowski
          </Typography>

          <Stack spacing={2} direction="row">
            <StyledNavButton
              size="large"
              variant="text"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              About
            </StyledNavButton>
            <StyledNavButton
              size="large"
              variant="text"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              Projects
            </StyledNavButton>
            <StyledNavButton
              size="large"
              variant="text"
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              Skills
            </StyledNavButton>
            <StyledNavButton
              size="large"
              variant="text"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              Contact
            </StyledNavButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
