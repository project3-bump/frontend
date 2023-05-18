import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const PulseCard = (props) => {
  const moodColors = {
    1: "smiley1Backing.main",
    2: "smiley2Backing.main",
    3: "smiley3Backing.main",
    4: "smiley4Backing.main",
    5: "smiley5Backing.main",
  };
  const backgroundColor = moodColors[props.userMood] || "#C7C7C7";
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: "8px",

        padding: "16px",
        width: "33%",
      }}
    >
      {props.userMood === 1 && (
        <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80 }} />
      )}
      {props.userMood === 2 && (
        <SentimentDissatisfiedIcon sx={{ fontSize: 80 }} />
      )}
      {props.userMood === 3 && <SentimentNeutralIcon sx={{ fontSize: 80 }} />}
      {props.userMood === 4 && <SentimentSatisfiedIcon sx={{ fontSize: 80 }} />}
      {props.userMood === 5 && (
        <SentimentSatisfiedAltIcon sx={{ fontSize: 80 }} />
      )}

      <br />
      <Typography variant="h6"> {props.dateInfo.day}</Typography>
      <Typography variant="body1">
        {" "}
        {`${props.dateInfo.date} ${
          props.dateInfo.month
        } ${new Date().getFullYear()}
					`}
      </Typography>
    </Box>
  );
};

export default PulseCard;
