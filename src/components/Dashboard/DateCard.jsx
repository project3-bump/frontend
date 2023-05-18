import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

const DateCard = (props) => {
  useEffect(() => {
    console.log(props.todaysDateState);
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white.main",
          borderRadius: "26px",
          padding: "8px",
          width: "200px",
          height: "200px",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, display: "inline" }}
            color="text.secondary"
            gutterBottom
          >
            Today
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              display: "inline",
              marginLeft: "40px",
            }}
            color="text.secondary"
            gutterBottom
          >
            {props.todaysDateState.time}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "32px" }} color="primary">
            {props.todaysDateState.month}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: "65px", textAlign: "right" }}
            color="primary.main"
          >
            {props.todaysDateState.date}
          </Typography>
          <Typography
            sx={{ textAlign: "right", marginBottom: "20px" }}
            variant="subtitle2"
          >
            {props.todaysDateState.day}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};

export default DateCard;
