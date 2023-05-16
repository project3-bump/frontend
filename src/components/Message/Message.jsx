import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import MessageSelectCoworkers from "./MessageSelectCoworkers";
import MessageChatArea from "./MessageChatArea";

const Message = () => {
  const currentUserID = "645c9534106669bbe242e824"; // now hardcoded, awaiting lian kai to complete login process then we connect this portion!
  const [currentUserUUID, setCurrentUserUUID] = useState(0);
  const [selectedCoworkerUUID, setSelectedCoworkerUUID] = useState(0);
  const [chatData, setChatData] = useState([]);
  const handleCoworkerListItemClick = (idx) => {
    setSelectedCoworkerUUID(idx);
    getCurrentUserSentMessages();
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

  const getCurrentUserSentMessages = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/bump/chats/sender/" + currentUserUUID,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      let checkedChatData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].receiverUUID === selectedCoworkerUUID) {
          checkedChatData.push(data[i]);
        }
      }
      checkedChatData.sort((a, b) => {
        a.timestamp - b.timestamp;
      });
      setChatData(checkedChatData);
    } else {
      alert("an error has occured at POST user sent chats data");
    }
  };

  useEffect(() => {
    getCurrentUserUUID();
    getCurrentUserSentMessages();
  }, []);

  return (
    <>
      {/* use MUI Grid for all our layouts. */}
      <Grid container spacing="0px" direction="row">
        <Grid item xs={4}>
          <MessageSelectCoworkers
            currentUserID={currentUserID}
            selectedCoworkerUUID={selectedCoworkerUUID}
            handleCoworkerListItemClick={handleCoworkerListItemClick}
          />
        </Grid>
        <Grid item xs={8}>
          <MessageChatArea
            currentUserUUID={currentUserUUID}
            selectedCoworkerUUID={selectedCoworkerUUID}
            chatData={chatData}
            setChatData={setChatData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Message;
