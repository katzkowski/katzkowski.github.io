import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export const Landing = () => {
  return (
    <Container
      maxWidth="xl"
      component="section"
      sx={{
        height: "90vh",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        mt: 4,
      }}
    >
      <Box
        sx={{
          mt: { xs: "5vw", md: "15vw" },
          flexShrink: 1,
          width: "65%",
          zIndex: 1,
          position: "absolute",
        }}
      >
        <Typography variant="h1" component="h1" sx={{ my: 4 }}>
          Hey, I'm Kevin.
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{ my: 2, maxWidth: "70%" }}
        >
          M. Sc. Informatics student at the Technical University of Munich
          interested in deep learning, artificial intelligence and new
          technologies in general.
        </Typography>

        <Button
          variant="outlined"
          sx={{ my: 2 }}
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ block: "start", behavior: "smooth" })
          }
        >
          My projects
        </Button>
      </Box>

      {/* Image */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexGrow: 0,
          flexShrink: 0,
          alignSelf: "end",
          marginLeft: "auto",
          width: "70%",
        }}
      >
        <img
          src="./kevin.png"
          alt="Me!"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "560px",
            marginLeft: "auto",
          }}
        />
      </Box>
    </Container>
  );
};
