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
  const senderUUID = props.currentUserUUID;
  const receiverUUID = props.selectedCoworkerUUID;
  const [topicChosen, setTopicChosen] = useState(-1);
  const [subTopicChosen, setSubTopicChosen] = useState(-1);
  const [inputTexts, setInputTexts] = useState({
    name: "",
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const [fullMessage, setFullMessage] = useState("");
  const [bumpDate, setBumpDate] = useState("");
  const [bumpTime, setBumpTime] = useState("");
  const [bumpDateTime, setBumpDateTime] = useState("");

  const handleButtonClick = async () => {
    if (props.buttonState === 0) {
      props.setButtonState(1);
      props.setFormState(1);
    } else if (props.formState === 5) {
      setBumpDateTime(`Scheduled bump timing: ${bumpDate}, ${bumpTime}`);
      props.setFormState(props.formState + 1);
    } else if (props.formState === 6) {
      sendNewMessage();
      props.setFormState(0);
      props.setButtonState(0);
      setTopicChosen(-1);
      setSubTopicChosen(-1);
      setInputTexts({
        name: "",
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
      });
    } else {
      props.setFormState(props.formState + 1);
    }

    if (props.formState === 3) {
      let temp = "";
      let fillers =
        props.contentBankData[topicChosen].contentFillers[subTopicChosen];
      temp += fillers[0];
      temp += inputTexts.name;
      for (let i = 1; i < fillers.length; i++) {
        temp += fillers[i];
        temp += inputTexts[i - 1];
      }
      setFullMessage(temp);
    }
  };

  const sendNewMessage = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/bump/chats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        senderUUID: senderUUID,
        receiverUUID: receiverUUID,
        message: fullMessage,
        bumpDateTime: bumpDateTime,
      }),
    });
    if (res.status === 200) {
      props.getCurrentUserMessages();
    } else {
      alert("an error has occured at sending a new message");
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
        {/* coworker selected, no chat history, form state is blank (new bump button not pressed) */}
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

        {/* new bump button was pressed, back button activated */}
        {props.formState !== 0 && (
          <IconButton
            sx={{ position: "fixed", top: "0" }}
            onClick={() => {
              props.setFormState(props.formState - 1);
              if (props.formState < 4) {
                setInputTexts({
                  name: "",
                  0: "",
                  1: "",
                  2: "",
                  3: "",
                  4: "",
                  5: "",
                  6: "",
                });
              }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {/* form state 1: choosing topic */}
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

        {/* form state 2: choosing sub topic */}
        {props.formState === 2 && (
          <Container
            sx={{
              textAlign: "center",
            }}
          >
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  width: "fit-content",
                }}
              >
                What about
              </Typography>
              <Typography
                sx={{
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
              <Typography
                sx={{
                  width: "fit-content",
                }}
              >
                would you like to talk about?
              </Typography>
            </Container>

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

        {/* form state 3: writing message prompts */}
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
              }}
            >
              <FormControl>
                <Typography>Title</Typography>
                <Input
                  defaultValue={`Feedback on ${props.contentBankData[topicChosen].topic}`}
                  sx={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: "8px",
                    pl: "5px",
                    width: "620px",
                  }}
                  disableUnderline="true"
                />
                <br />
                <Typography>Message</Typography>
                <Container
                  sx={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "black",
                    borderRadius: "8px",
                    height: "450px",
                    overflow: "hidden",
                    overflowY: "scroll",
                    width: "620px",
                    mb: "10px",
                  }}
                >
                  <Typography>Name:</Typography>
                  <Input
                    sx={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "black",
                      borderRadius: "8px",
                      pl: "5px",
                    }}
                    disableUnderline="true"
                    fullWidth="true"
                    name="name"
                    defaultValue={inputTexts.name}
                    onChange={(event) => {
                      setInputTexts({
                        ...inputTexts,
                        [event.target.name]: event.target.value,
                      });
                    }}
                  ></Input>
                  <br />
                  {props.contentBankData[topicChosen].topicPrompts[
                    subTopicChosen
                  ]
                    .slice(2)
                    .map((item, idx) => {
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
                              }}
                              disableUnderline="true"
                              fullWidth="true"
                              multiline="true"
                              rows={3}
                              name={idx}
                              defaultValue={inputTexts[idx]}
                              onChange={(event) => {
                                setInputTexts({
                                  ...inputTexts,
                                  [event.target.name]: event.target.value,
                                });
                              }}
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

        {/* form state 4: suggested message, still can edit */}
        {props.formState === 4 && (
          <>
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
                Here's a suggestion
              </Typography>
              <Container
                sx={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "black",
                  borderRadius: "8px",
                }}
              >
                <FormControl>
                  <Typography>Message</Typography>
                  <Input
                    defaultValue={fullMessage}
                    sx={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "black",
                      borderRadius: "8px",
                      pl: "5px",
                      width: "620px",
                      mb: "10px",
                    }}
                    disableUnderline="true"
                    multiline="true"
                    onChange={(event) => {
                      setFullMessage(event.target.value);
                    }}
                  />
                </FormControl>
              </Container>
            </Container>
          </>
        )}

        {/* form state 5: input bump timing */}
        {props.formState === 5 && (
          <>
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
                Here's a good time to bump
              </Typography>
              <Container
                sx={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "black",
                  borderRadius: "8px",
                }}
              >
                <FormControl>
                  <Typography>Date</Typography>
                  <Input
                    sx={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "black",
                      borderRadius: "8px",
                      pl: "5px",
                      width: "200px",
                      mb: "10px",
                    }}
                    disableUnderline="true"
                    onChange={(event) => {
                      setBumpDate(event.target.value);
                    }}
                  />
                  <Typography>Time</Typography>
                  <Input
                    sx={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "black",
                      borderRadius: "8px",
                      pl: "5px",
                      width: "200px",
                      mb: "10px",
                    }}
                    disableUnderline="true"
                    onChange={(event) => {
                      setBumpTime(event.target.value);
                    }}
                  />
                </FormControl>
              </Container>
            </Container>
          </>
        )}

        {/* form state 6: bump and message submitted, prompt to go back to convo */}
        {props.formState === 6 && (
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
            <Typography>Bump sent!</Typography>
          </Container>
        )}

        {/* coworker chat selected, there is chat history present, form state 0 so no new bump initialised, just show chat history */}
        {props.selectedCoworkerUUID !== 0 &&
          props.filteredChatData.length !== 0 &&
          props.formState === 0 && (
            <MessageChatConversation
              senderUUID={senderUUID}
              receiverUUID={receiverUUID}
              filteredChatData={props.filteredChatData}
            />
          )}

        {/* no coworker chat selected. user is prompted to choose a coworker */}
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
        {/* co worker chat is selected, button is not clicked yet. shows "new bump" */}
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

        {/* co worker chat is selected, we are in new bump state, but not formState 5 or 6, hence button shows "next" */}
        {props.selectedCoworkerUUID !== 0 &&
          props.buttonState === 1 &&
          props.formState !== 5 &&
          props.formState !== 6 && (
            <Button
              sx={{
                color: "white.main",
                backgroundColor: "primary.main",
                width: "75vh",
                borderRadius: "20px",
              }}
              onClick={() => {
                if (props.formState === 1 && topicChosen !== -1) {
                  handleButtonClick();
                } else if (props.formState === 2 && subTopicChosen !== -1) {
                  handleButtonClick();
                } else if (props.formState !== 1 && props.formState !== 2) {
                  handleButtonClick();
                }
              }}
            >
              Next
            </Button>
          )}

        {/* co worker chat is selected, we are in new bump state, and formState 5, hence button shows "send bump" */}
        {props.selectedCoworkerUUID !== 0 &&
          props.buttonState === 1 &&
          props.formState === 5 && (
            <Button
              sx={{
                color: "white.main",
                backgroundColor: "primary.main",
                width: "75vh",
                borderRadius: "20px",
              }}
              onClick={handleButtonClick}
            >
              Send bump
            </Button>
          )}

        {/* co worker chat is selected, we are in new bump state, and formState 6, hence button shows "return to convo" */}
        {props.selectedCoworkerUUID !== 0 &&
          props.buttonState === 1 &&
          props.formState === 6 && (
            <Button
              sx={{
                color: "white.main",
                backgroundColor: "primary.main",
                width: "75vh",
                borderRadius: "20px",
              }}
              onClick={handleButtonClick}
            >
              Return to conversation
            </Button>
          )}
      </Grid>
    </Grid>
  );
};

export default MessageChatArea;
