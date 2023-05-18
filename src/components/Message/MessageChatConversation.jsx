import React, { useState, useEffect } from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";

const MessageChatConversation = (props) => {
  const [senderNameAndPic, setSenderNameAndPic] = useState({});
  const [receiverNameAndPic, setReceiverNameAndPic] = useState({});

  const getNameAndPic = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/bump/users/namepiconly/namepiconly",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uuid: props.senderUUID,
        }),
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      setSenderNameAndPic(data);
    } else {
      alert("an error has occured at getting sender name and pic via uuid");
    }

    const res2 = await fetch(
      import.meta.env.VITE_SERVER + "/bump/users/namepiconly/namepiconly",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uuid: props.receiverUUID,
        }),
      }
    );
    if (res2.status === 200) {
      const data = await res2.json();
      setReceiverNameAndPic(data);
    } else {
      alert("an error has occured at getting receiver name and pic via uuid");
    }
  };

  const f = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long", //short gives 05/06/2023
    timeStyle: "short",
    timeZone: "Singapore",
  });

  useEffect(() => {
    getNameAndPic();
  }, []);

  useEffect(() => {
    getNameAndPic();
  }, [props.receiverUUID]);

  return (
    <>
      <Container>
        <Container
          sx={{
            display: "flex",
          }}
        >
          <Avatar
            src={`../../../../pictures/${receiverNameAndPic.profilePicture}`}
          ></Avatar>
          <Typography
            sx={{
              mt: "2px",
              ml: "15px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {receiverNameAndPic.name}
          </Typography>
        </Container>
        <Container
          sx={{
            height: "550px",
            mt: "10px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {props.filteredChatData.map((item) => {
            if (item.senderUUID === props.senderUUID) {
              return (
                <>
                  <Container
                    sx={{
                      pt: "10px",
                      pb: "10px",
                      width: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Container
                      sx={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "black",
                        borderRadius: "8px",
                        mt: "5px",
                        pl: "15px",
                        pr: "15px",
                        ml: "100px",
                        mr: "0px",
                        width: "fit-content",
                      }}
                    >
                      <Typography>{item.message}</Typography>
                      <br />
                      <Typography>{item.bumpDateTime}</Typography>
                    </Container>

                    <Typography
                      sx={{
                        mt: "5px",
                        mr: "0px",
                      }}
                    >
                      {f.format(new Date(item.timesent))}
                    </Typography>
                    <Avatar
                      src={`../../../../pictures/${senderNameAndPic.profilePicture}`}
                      sx={{
                        mt: "5px",
                      }}
                    ></Avatar>
                  </Container>
                </>
              );
            } else {
              return (
                <>
                  <Container
                    sx={{
                      pt: "10px",
                      pb: "10px",
                    }}
                  >
                    <Container
                      sx={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "black",
                        borderRadius: "8px",
                        mt: "5px",
                        pl: "15px",
                        pr: "15px",
                        mr: "100px",
                        width: "fit-content",
                      }}
                    >
                      <Typography>{item.message}</Typography>
                      <br />
                      <Typography>{item.bumpDateTime}</Typography>
                    </Container>

                    <Typography
                      sx={{
                        mt: "5px",
                        mr: "290px",
                      }}
                    >
                      {f.format(new Date(item.timesent))}
                    </Typography>
                    <Avatar
                      src={`../../../../pictures/${receiverNameAndPic.profilePicture}`}
                      sx={{
                        mt: "5px",
                        mr: "380px",
                      }}
                    ></Avatar>
                  </Container>
                </>
              );
            }
          })}
        </Container>
      </Container>
    </>
  );
};

export default MessageChatConversation;
