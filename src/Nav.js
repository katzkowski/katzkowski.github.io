import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
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

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

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

          <Stack
            spacing={1}
            direction="row"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
            onClick={() => toggleDrawer(!open)}
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            anchor="right"
            open={open}
            onOpen={() => toggleDrawer(true)}
            onClose={() => toggleDrawer(false)}
          >
            <Stack
              spacing={2}
              direction="column"
              sx={{
                display: { xs: "flex", sm: "none" },
                p: 2,
              }}
            >
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
          </SwipeableDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
