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
    1: "#FF0000",
    2: "#FF9900",
    3: "#F2CB00",
    4: "#87C860",
    5: "#149200",
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
      {props.dateInfo.day}
      {`${props.dateInfo.date} ${
        props.dateInfo.month
      } ${new Date().getFullYear()}
						MOOD ${props.userMood}`}
    </Box>
  );
};

export default PulseCard;
