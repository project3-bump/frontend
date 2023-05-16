import { Button } from "@mui/material";
import React from "react";

const MessageNewBumpButton = (props) => {
  return (
    <>
      {props.receiverUUID !== 0 && (
        <Button
          sx={{
            color: "white.main",
            backgroundColor: "primary.main",
            width: "75vh",
            borderRadius: "20px",
          }}
        >
          New bump
        </Button>
      )}
    </>
  );
};

export default MessageNewBumpButton;
