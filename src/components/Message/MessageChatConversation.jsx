import React, { useState, useEffect } from "react";

const MessageChatConversation = (props) => {
  return (
    <>
      {props.chatData.length === 0 && (
        <div>no chat data, do the prompt new bump thing</div>
      )}
      {props.chatData.length !== 0 && (
        <div>have chat data, populate chat history</div>
      )}
      <div>
        {props.senderUUID}, {props.receiverUUID}
      </div>
    </>
  );
};

export default MessageChatConversation;
