import React from "react";

const MessageNewBumpButton = (props) => {
  return <>{props.receiverUUID !== 0 && <div>new bump</div>}</>;
};

export default MessageNewBumpButton;
