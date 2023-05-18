import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid,
  Fab,
  Container,
  Avatar,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const ReportCard = (props) => {
  const startIndex = props.moodData.length - 4;
  const endIndex = props.moodData.length - 1;
  const selectedElements = props.moodData.slice(startIndex, endIndex);

  const moodsArray = selectedElements.map((element) => element.mood);
  const sum = moodsArray.reduce((acc, current) => acc + current, 0);
  const average = sum / moodsArray.length;

  let moodValue = "";
  let bgColor;

  if (average >= 0 && average <= 2) {
    moodValue = "sad";
    bgColor = "smiley1Backing.main";
  } else if (average > 2 && average <= 3.5) {
    moodValue = "okay";
    bgColor = "smiley3Backing.main";
  } else {
    moodValue = "happy";
    bgColor = "smiley5Backing.main";
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: bgColor,
          borderRadius: "8px",

          padding: "16px",
          width: "100%",
          height: "33%",
        }}
      >
        <Container sx={{ display: "flex" }}>
          <Avatar src={`../../../../pictures/${props.profilePicture}`}></Avatar>
          <Container>
            <Typography variant="h6">{props.name}</Typography>
            <Typography variant="h6">{props.title}</Typography>
            <Typography variant="body1">
              {props.name} has been feeling {moodValue} for the past 3 days.
            </Typography>
          </Container>
        </Container>
      </Box>
      <br />
    </>
  );
};

export default ReportCard;
