import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Notifications = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white.main",
          borderRadius: "26px",
          width: "200px",
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            sx={{ fontSize: 14, display: "inline" }}
            color="black"
            gutterBottom
          >
            Notifications
            <NotificationsNoneOutlinedIcon
              sx={{ display: "inline", marginLeft: "50px" }}
            />
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {/* {props.todaysDateState.time} */}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {/* {props.todaysDateState.month} */}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};

export default Notifications;