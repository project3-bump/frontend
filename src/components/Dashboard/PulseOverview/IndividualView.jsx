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
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PulseCard from "./PulseCard";
import ReportCard from "./ReportCard";
import { fetchData } from "../../../helpers/common";
import ManagerView from "./ManagerView";

const IndividualView = (props) => {
  const moodColors = {
    1: "#FF0000",
    2: "#FF9900",
    3: "#F2CB00",
    4: "#87C860",
    5: "#149200",
  };
  const backgroundColor =
    moodColors[props.userMoods[props.userMoods.length - 1]?.mood] || "#C7C7C7";

  const moodStrings = ["", "very sad", "sad", "neutral", "happy", "very happy"];

  return (
    <Box
      sx={{
        backgroundColor: "white.main",
        borderRadius: "8px",
        margin: "10px",
        padding: "16px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: backgroundColor,
          borderRadius: "8px",
          padding: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>{props.todaysDateState.day}</Typography>
        <Typography>{`${props.todaysDateState.date} ${
          props.todaysDateState.month
        } ${new Date().getFullYear()}`}</Typography>
        <Typography>
          {`you are feeling ${
            moodStrings[props.userMoods[props.userMoods.length - 1]?.mood]
          }`}
        </Typography>
        {props.userMoods[props.userMoods.length - 1]?.mood === 1 && (
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80 }} />
        )}
        {props.userMoods[props.userMoods.length - 1]?.mood === 2 && (
          <SentimentDissatisfiedIcon sx={{ fontSize: 80 }} />
        )}
        {props.userMoods[props.userMoods.length - 1]?.mood === 3 && (
          <SentimentNeutralIcon sx={{ fontSize: 80 }} />
        )}
        {props.userMoods[props.userMoods.length - 1]?.mood === 4 && (
          <SentimentSatisfiedIcon sx={{ fontSize: 80 }} />
        )}
        {props.userMoods[props.userMoods.length - 1]?.mood === 5 && (
          <SentimentSatisfiedAltIcon sx={{ fontSize: 80 }} />
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: "white.main",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography>Previous Pulses</Typography>

        <Box
          sx={{
            backgroundColor: "white.main",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Fab
            color="grey.main"
            aria-label="add"
            onClick={props.handlePrevMoodsChange}
          >
            <ArrowBackIosIcon />
          </Fab>

          <Box
            sx={{
              // margin: "50px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {props.prevMoods &&
              props.prevMoods.map((el) => (
                <PulseCard
                  key={el.date}
                  dateInfo={{
                    day: el.dateObj.day,
                    date: el.dateObj.date,
                    month: el.dateObj.month,
                  }}
                  userMood={el.mood}
                />
              ))}
          </Box>

          <Fab
            color="grey.main"
            aria-label="add"
            onClick={props.handleNextMoodsChange}
          >
            <ArrowForwardIosIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default IndividualView;
