import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import MessageChatConversation from "./MessageChatConversation";
import MessageNewBumpButton from "./MessageNewBumpButton";

const MessageChatArea = (props) => {
  const senderUUID = props.currentUserUUID;
  const receiverUUID = props.selectedCoworkerUUID;
  return (
    <Grid container spacing="0px" direction="column" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={11}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white.main",
        }}
      >
        {props.selectedCoworkerUUID !== 0 && (
          <MessageChatConversation
            senderUUID={senderUUID}
            receiverUUID={receiverUUID}
            filteredChatData={props.filteredChatData}
          />
        )}
        {props.selectedCoworkerUUID === 0 && (
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey.main",
              width: "80%",
              height: "40%",
              borderRadius: "25px",
            }}
          >
            <Typography>Select a coworker to message!</Typography>
          </Container>
        )}
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: "flex",
          backgroundColor: "grey.main",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MessageNewBumpButton receiverUUID={receiverUUID} />
      </Grid>
    </Grid>
  );
};

export default MessageChatArea;
