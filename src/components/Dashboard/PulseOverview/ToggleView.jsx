import React, { useState } from "react";
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

const ToggleView = (props) => {
  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Button
          value="manager"
          variant="contained"
          sx={{
            borderRadius: "20px",
            width: "180px",
            marginRight: "10px",
            bgcolor: props.isManagerView === true ? "primary.main" : "inherit",
            color: props.isManagerView === true ? "white.main" : "inherit",
          }}
          onClick={(event) => props.handleToggle(event, true)}
        >
          Manager View
        </Button>
        <Button
          value="personal"
          variant="contained"
          sx={{
            borderRadius: "20px",
            width: "165px",
            marginLeft: "-40px",
            position: "relative",
            zIndex: 1,
            bgcolor: props.isManagerView === false ? "primary.main" : "inherit",
            color: props.isManagerView === false ? "white.main" : "inherit",
          }}
          onClick={(event) => props.handleToggle(event, false)}
        >
          Personal View
        </Button>
      </Box>
    </>
  );
};

export default ToggleView;
