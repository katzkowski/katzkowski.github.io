import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";

const StyledTimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
})(TimelineItem);

export const TimelineCard = (props) => {
  return (
    <StyledTimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        {props.isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            p: 1,
          }}
        >
          {/* Start and end date */}
          <Box
            sx={{
              height: "100%",
              width: "3rem",
              textAlign: "center",
            }}
          >
            <Typography
              variant="overline"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {props.endDate
                ? props.endDate
                : props.startDate
                ? props.startDate
                : null}
              {props.startDate && props.endDate ? (
                <center style={{ lineHeight: 1 }}>-</center>
              ) : null}
              {props.startDate && props.endDate ? props.startDate : null}
            </Typography>
          </Box>
          {/* Divider */}
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Title */}
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Typography variant="subtitle2" component="div">
              <b>{props.title}</b>
            </Typography>
            <Typography variant="subtitle2" component="div">
              {props.description}
            </Typography>
          </Box>

          {/* Logo */}
          <Box
            sx={{
              maxHeight: "3rem",
              display: "flex",
              justifyContent: "flex-end",
              pl: 1,
              marginLeft: "auto",
            }}
          >
            <a href={props.imgHref}>
              <img
                src={props.img}
                alt={props.imgAlt}
                style={{
                  display: "block",
                  maxWidth: "4rem",
                  maxHeight: "3rem",
                  height: "auto",
                  width: "auto",
                  alignSelf: "flex-end",
                }}
              />
            </a>
          </Box>
        </Paper>
      </TimelineContent>
    </StyledTimelineItem>
  );
};
