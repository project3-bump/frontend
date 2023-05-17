import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import MessageSelectIndividualCoworker from "./MessageSelectIndividualCoworker";

const MessageSelectCoworkers = (props) => {
  const [isManager, setIsManager] = useState(false);
  const [directReportData, setDirectReportData] = useState([]);
  const [allUserData, setAllUserData] = useState([]);
  const [managerUUID, setManagerUUID] = useState(0);

  const getAllUserData = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/bump/users");
    if (res.status === 200) {
      const data = await res.json();
      setAllUserData(data);
    } else {
      alert("an error has occured at getting all user data");
    }
  };

  const getCurrentUserData = async () => {
    const currentUserData = await fetch(
      import.meta.env.VITE_SERVER + "/bump/users/" + props.currentUserID,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (currentUserData.status === 200) {
      const data = await currentUserData.json();
      if (data.isManager) {
        setDirectReportData(data.directReports);
        setIsManager(true);
      } else {
        setManagerUUID(data.managerUUID);
      }
    } else {
      alert("an error has occured at POST user data");
    }
  };

  useEffect(() => {
    getCurrentUserData();
    getAllUserData();
  }, []);

  return (
    <List sx={{ backgroundColor: "secondary.main", height: "100vh" }}>
      {directReportData.map((item) => {
        return (
          <MessageSelectIndividualCoworker
            key={item}
            UUID={item}
            allUserData={allUserData}
            selectedCoworkerUUID={props.selectedCoworkerUUID}
            handleCoworkerListItemClick={props.handleCoworkerListItemClick}
          />
        );
      })}
      {!isManager && (
        <MessageSelectIndividualCoworker
          key={managerUUID}
          UUID={managerUUID}
          allUserData={allUserData}
          selectedCoworkerUUID={props.selectedCoworkerUUID}
          handleCoworkerListItemClick={props.handleCoworkerListItemClick}
        />
      )}
    </List>
  );
};

export default MessageSelectCoworkers;
