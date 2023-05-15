import { Grid } from "@mui/material";
import React from "react";

const MessageChatArea = (props) => {
  console.log(props.currentUserUUID);
  console.log(props.selectedCoworkerUUID);
  return (
    <Grid container spacing="0px" direction="column" sx={{ height: "100vh" }}>
      <Grid item xs={11} sx={{ backgroundColor: "white.main" }}>
        hello
      </Grid>
      <Grid item xs={1} sx={{ backgroundColor: "grey.main" }}>
        hello
      </Grid>
    </Grid>
  );
};

export default MessageChatArea;
