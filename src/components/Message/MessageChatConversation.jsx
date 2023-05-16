import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";

const MessageChatConversation = (props) => {
  return (
    <>
      {props.filteredChatData.length === 0 && (
        <Container
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "grey.main",
            width: "80%",
            height: "40%",
            borderRadius: "25px",
          }}
        >
          <Typography>
            No messages here yet! <br /> Tap new bump to send a message.
          </Typography>
        </Container>
      )}
      {props.filteredChatData.length !== 0 && (
        <div>have chat data, populate chat history</div>
      )}
    </>
  );
};

export default MessageChatConversation;
