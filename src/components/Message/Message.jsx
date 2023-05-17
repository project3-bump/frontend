import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import MessageSelectCoworkers from "./MessageSelectCoworkers";
import MessageChatArea from "./MessageChatArea";

const Message = (props) => {
  const currentUserID = props.id;
  const isManager = true; //now hardcoded, need to change to props
  const [currentUserUUID, setCurrentUserUUID] = useState(0);
  const [selectedCoworkerUUID, setSelectedCoworkerUUID] = useState(0);
  const [chatData, setChatData] = useState([]);
  const [filteredChatData, setFilteredChatData] = useState([]);
  const [contentBankData, setContentBankData] = useState([]);
  const [buttonState, setButtonState] = useState(0); // button state: 0 is new bump, 1 is next
  const [formState, setFormState] = useState(0); // form state: 0 is nothing, 1 is main topics, 2 is subtopics, 3 is input forms, 4 is message preview.
  const handleCoworkerListItemClick = (idx) => {
    setSelectedCoworkerUUID(idx);
    getCurrentUserMessages();
    setButtonState(0);
    setFormState(0);
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

  const getCurrentUserMessages = async () => {
    let temp = [];
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/bump/chats/sender/" + currentUserUUID,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      data.map((item) => {
        temp.push(item);
      });
    } else {
      alert("an error has occured at POST user sent chats data");
    }

    const res2 = await fetch(
      import.meta.env.VITE_SERVER + "/bump/chats/receiver/" + currentUserUUID,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res2.status === 200) {
      const data = await res2.json();
      data.map((item) => {
        temp.push(item);
      });
      setChatData(temp);
    } else {
      alert("an error has occured at POST user sent chats data");
    }
  };

  const filterChatData = () => {
    let checkedChatData = [];
    for (let i = 0; i < chatData.length; i++) {
      if (
        chatData[i].receiverUUID === selectedCoworkerUUID ||
        chatData[i].senderUUID === selectedCoworkerUUID
      ) {
        checkedChatData.push(chatData[i]);
      }
    }
    checkedChatData.sort((a, b) => {
      return new Date(a.timesent) - new Date(b.timesent);
    });
    setFilteredChatData(checkedChatData);
  };

  const getContentBank = async () => {
    if (isManager) {
      //get manager content bank
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/bump/contentbank/manager"
      );
      if (res.status === 200) {
        const data = await res.json();
        console.log("fetching manager contentbank");
        console.log(res);
        setContentBankData(
          data.sort((a, b) => {
            return a.topicID - b.topicID;
          })
        );
      } else {
        alert("an error has occured at getting manager content bank data");
      }
    } else {
      //get common content bank
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/bump/contentbank/common"
      );
      if (res.status === 200) {
        const data = await res.json();
        console.log("fetching common employee contentbank");
        console.log(res);
        console.log(data);
        setContentBankData(
          data.sort((a, b) => {
            return a.topicID - b.topicID;
          })
        );
      } else {
        alert("an error has occured at getting common content bank data");
      }
    }
  };

  useEffect(() => {
    getCurrentUserUUID();
    getCurrentUserMessages();
    getContentBank();
  }, []);

  useEffect(() => {
    filterChatData();
  }, [chatData]);

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
            filteredChatData={filteredChatData}
            getCurrentUserMessages={getCurrentUserMessages}
            buttonState={buttonState}
            setButtonState={setButtonState}
            formState={formState}
            setFormState={setFormState}
            contentBankData={contentBankData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Message;
