import * as React from "react";
import {
  Box,
  Grid,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import bumpImage from "../../pictures/Bump-Logo.png";
import andrewPic from "../../pictures/andrew.png";

const drawerWidth = 240;

const DrawerComp = (props) => {
  const handleListButtonClick = (index) => {
    if (index === 0) {
      // Handle Dashboard button click
      props.setDashBoardView(true);
      props.setMessagesView(false);
    } else if (index === 1) {
      // Handle Messages button click
      props.setMessagesView(true);
      props.setDashBoardView(false);
    }
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Box>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          // flexShrink: 0,

          // use this to customize the CSS of the drawer
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "primary.main",
          },
        }}
        variant="permanent"
        // anchor="left"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={bumpImage}
            alt="My Image"
            style={{ width: "100%", height: "auto" }}
          />
          <List
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {["Dashboard", "Message"].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "40px",
                  marginBottom: "8px",
                  // color: "white.main",
                  "&.Mui-selected": {
                    backgroundColor: "secondary.main",
                    color: "black",
                  },
                }}
                selected={selectedIndex === index}
                onClick={() => {
                  handleListItemClick(index);
                  handleListButtonClick(index);
                }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // alignItems: "center",

              width: "100%",
            }}
          >
            <Box>
              <img
                src={andrewPic}
                alt="My Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ color: "white.main" }}>
                {props.userState.name}
              </Typography>

              <Typography variant="body1" sx={{ color: "white.main" }}>
                {props.userState.title}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
