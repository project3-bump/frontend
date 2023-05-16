import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState } from "react";
import MessageChatConversation from "./MessageChatConversation";
import MessageNewBumpButton from "./MessageNewBumpButton";

const MessageChatArea = (props) => {
  console.log(props.contentBankData);
  const senderUUID = props.currentUserUUID;
  const receiverUUID = props.selectedCoworkerUUID;
  const [topicChosen, setTopicChosen] = useState(-1);
  const [subTopicChosen, setSubTopicChosen] = useState(-1);

  const handleButtonClick = () => {
    if (props.buttonState === 0) {
      props.setButtonState(1);
      props.setFormState(1);
    } else {
      props.setFormState(props.formState + 1);
    }
  };

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
        {props.selectedCoworkerUUID !== 0 &&
          props.filteredChatData.length === 0 &&
          props.formState === 0 && (
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

        {props.formState !== 0 && (
          <IconButton
            sx={{ position: "fixed", top: "0" }}
            onClick={() => props.setFormState(props.formState - 1)}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {props.formState === 1 && (
          <Container sx={{ textAlign: "center" }}>
            <Typography>What would you like to talk about?</Typography>
            <List>
              {props.contentBankData.map((item) => {
                return (
                  <ListItemButton
                    key={item.topicID}
                    selected={topicChosen === item.topicID}
                    onClick={() => setTopicChosen(item.topicID)}
                    sx={{
                      borderRadius: "10px",
                      borderColor: "black",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      width: "fit-content",
                      m: "auto",
                      mt: "10px",
                    }}
                  >
                    <ListItemText primary={item.topic}></ListItemText>
                  </ListItemButton>
                );
              })}
            </List>
            <Typography>Choose the topic you want to discuss.</Typography>
          </Container>
        )}

        {props.formState === 2 && (
          <Container sx={{ textAlign: "center" }}>
            <Typography sx={{ display: "flex" }}>
              What about
              <Typography
                sx={{
                  display: "flex",
                  width: "fit-content",
                  backgroundColor: "primary.main",
                  color: "white.main",
                  borderRadius: "7px",
                  ml: "5px",
                  mr: "5px",
                  pl: "5px",
                  pr: "5px",
                }}
              >
                {props.contentBankData[topicChosen].topic}
              </Typography>
              would you like to talk about?
            </Typography>
            <List>
              {props.contentBankData[topicChosen].topicPrompts.map((item) => {
                return (
                  <ListItemButton
                    key={item[0]}
                    selected={subTopicChosen === item[0]}
                    onClick={() => setSubTopicChosen(item[0])}
                    sx={{
                      borderRadius: "10px",
                      borderColor: "black",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      width: "fit-content",
                      m: "auto",
                      mt: "10px",
                    }}
                  >
                    <ListItemText primary={item[1]}></ListItemText>
                  </ListItemButton>
                );
              })}
            </List>
            <Typography>Choose the sub-topic you want to discuss.</Typography>
          </Container>
        )}

        {props.formState === 3 && (
          <Container>
            <Typography
              sx={{
                // position: "fixed",
                top: "0",
                mt: "2px",
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Message
            </Typography>
            <Container
              sx={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black",
                borderRadius: "8px",
                // height: 0.9,
              }}
            >
              <FormControl>
                <Typography>Title</Typography>
                <Input
                  defaultValue={"titleeeee"}
                  sx={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: "8px",
                    pl: "5px",
                    // width: "340%",
                  }}
                  disableUnderline="true"
                  fullWidth="true"
                />
                <br />
                <Typography>Message</Typography>
                <Container
                  sx={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: "8px",
                    // width: "340%",
                    overflow: "hidden",
                    overflowY: "scroll",
                  }}
                >
                  {props.contentBankData[topicChosen].topicPrompts[
                    subTopicChosen
                  ]
                    .slice(2)
                    .map((item) => {
                      if (item.length > 1) {
                        return (
                          <>
                            <br />
                            <Typography>{item}</Typography>
                            <Input
                              sx={{
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "black",
                                borderRadius: "8px",
                                pl: "5px",

                                // width: "340%",
                              }}
                              disableUnderline="true"
                              fullWidth="true"
                              multiline="true"
                              rows={3}
                            ></Input>
                            <br />
                          </>
                        );
                      }
                    })}
                </Container>
              </FormControl>
            </Container>
          </Container>
        )}

        {props.selectedCoworkerUUID !== 0 &&
          props.filteredChatData.length !== 0 &&
          props.formState === 0 && (
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
        {props.selectedCoworkerUUID !== 0 && props.buttonState === 0 && (
          <Button
            sx={{
              color: "white.main",
              backgroundColor: "primary.main",
              width: "75vh",
              borderRadius: "20px",
            }}
            onClick={handleButtonClick}
          >
            New bump
          </Button>
        )}

        {props.selectedCoworkerUUID !== 0 && props.buttonState === 1 && (
          <Button
            sx={{
              color: "white.main",
              backgroundColor: "primary.main",
              width: "75vh",
              borderRadius: "20px",
            }}
            onClick={handleButtonClick}
          >
            Next
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default MessageChatArea;
