import { Grid } from "@mui/material";
import React from "react";

const Message = () => {
  return (
    <Grid>
      <Grid item xs={4}>
        grid item 1
      </Grid>
      <Grid item xs={4}>
        griditem 2
      </Grid>
    </Grid>
  );
};

export default Message;
