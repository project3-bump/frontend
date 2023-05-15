import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const MessageSelectIndividualCoworker = (props) => {
  let currentSelectedCoworkerData = {};
  for (let i = 0; i < props.allUserData.length; i++) {
    if (props.allUserData[i].uuid === props.UUID) {
      currentSelectedCoworkerData = props.allUserData[i];
      break;
    }
  }

  return (
    <ListItemButton
      selected={props.selectedCoworkerUUID === props.UUID}
      onClick={() => props.handleCoworkerListItemClick(props.UUID)}
      sx={{ backgroundColor: "white.main", borderRadius: "10px", m: "15px" }}
    >
      <ListItemAvatar>
        <Avatar
          alt={currentSelectedCoworkerData.name}
          src={`../../pictures/${currentSelectedCoworkerData.profilePicture}`}
        />
      </ListItemAvatar>
      <ListItemText primary={currentSelectedCoworkerData.name} />
    </ListItemButton>
  );
};

export default MessageSelectIndividualCoworker;
