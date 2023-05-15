import { Grid } from "@mui/material";
import DrawerComp from "./DrawerComp";
import DateCard from "./DateCard";
import React, { useState, useEffect } from "react";

import MessageSelectCoworkers from "./MessageSelectCoworkers";
import MessageChatArea from "./MessageChatArea";

const Message = () => {
  const currentUserID = "645c9534106669bbe242e824"; // now hardcoded, awaiting lian kai to complete login process then we connect this portion!
  const [currentUserUUID, setCurrentUserUUID] = useState(0);
  const [selectedCoworkerUUID, setSelectedCoworkerUUID] = useState(0);
  const handleCoworkerListItemClick = (idx) => {
    setSelectedCoworkerUUID(idx);
  };

  const getCurrentUserUUID = async () => {
    const currentUserUUID = await fetch(
      import.meta.env.VITE_SERVER + "/bump/users/uuid/" + currentUserID,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (currentUserUUID.status === 200) {
      const data = await currentUserUUID.json();
      setCurrentUserUUID(data);
    } else {
      alert("an error has occured at POST user data");
    }
  };

  useEffect(() => {
    getCurrentUserUUID();
  }, []);

  return (
    <>
      {/* use MUI Grid for all our layouts. */}

      <Grid item xs={4}>
        <MessageSelectCoworkers
          currentUserID={currentUserID}
          selectedCoworkerUUID={selectedCoworkerUUID}
          handleCoworkerListItemClick={handleCoworkerListItemClick}
        />
      </Grid>
      <Grid item xs={5}>
        <MessageChatArea
          currentUserUUID={currentUserUUID}
          selectedCoworkerUUID={selectedCoworkerUUID}
        />
      </Grid>
    </>
  );
};

export default Message;
