import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  TextField,
  ToggleButton,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const iconSize = 80;

const MoodSelector = (props) => {
  const [userID, setUserID] = useState(props.id);
  const [moodValue, setMoodValue] = useState([]);
  const didMount = useRef(false);
  const shouldUpdate = useRef(false);

  const handleToggle = async (value) => {
    shouldUpdate.current = moodValue !== value;
    setMoodValue((prevValue) => (prevValue === value ? null : value));
    setMoodValue(value);
    props.setMoodSelected(true);
    await props.getUserMoods();
  };

  const updateMood = async () => {
    if (!shouldUpdate.current) return;
    const res = await fetch(
      import.meta.env.VITE_SERVER + `/bump/users/${userID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: moodValue,
        }),
      }
    );

    if (res.status === 200) {
      console.log("Registers");
    } else {
      alert("an error has occured");
    }
  };

  useEffect(() => {
    // check if this is the first render; don't run the updateMood function if so
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    console.log(moodValue);
    updateMood();
  }, [moodValue]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white.main",
          borderRadius: "8px",

          padding: "16px",
          width: "600px",
          height: "30%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Hi Andrew <br />
            How are you feeling today?
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <ToggleButton
                sx={{
                  backgroundColor: moodValue === 1 ? "smiley1.main" : "inherit",
                  color: moodValue === 1 ? "white" : "inherit",
                  border: "none",
                  padding: 0,
                  borderRadius: "50%",
                }}
                value={1}
                checked={moodValue === 1}
                onChange={() => handleToggle(1)}
              >
                <SentimentVeryDissatisfiedIcon sx={{ fontSize: iconSize }} />
              </ToggleButton>
              <Typography sx={{ fontSize: 12, textAlign: "center" }}>
                Very Sad
              </Typography>
            </Box>
            <Box>
              <ToggleButton
                sx={{
                  backgroundColor: moodValue === 2 ? "smiley2.main" : "inherit",
                  color: moodValue === 2 ? "white" : "inherit",
                  border: "none",
                  padding: 0,
                  borderRadius: "50%",
                }}
                value={2}
                checked={moodValue === 2}
                onChange={() => handleToggle(2)}
              >
                <SentimentDissatisfiedIcon sx={{ fontSize: iconSize }} />
              </ToggleButton>
            </Box>
            <Box>
              <ToggleButton
                sx={{
                  backgroundColor: moodValue === 3 ? "smiley3.main" : "inherit",
                  color: moodValue === 3 ? "white" : "inherit",
                  border: "none",
                  padding: 0,
                  borderRadius: "50%",
                }}
                value={3}
                checked={moodValue === 3}
                onChange={() => handleToggle(3)}
              >
                <SentimentNeutralIcon sx={{ fontSize: iconSize }} />
              </ToggleButton>
            </Box>
            <Box>
              <ToggleButton
                sx={{
                  backgroundColor: moodValue === 4 ? "smiley4.main" : "inherit",
                  color: moodValue === 4 ? "white" : "inherit",
                  border: "none",
                  padding: 0,
                  borderRadius: "50%",
                }}
                value={4}
                checked={moodValue === 4}
                onChange={() => handleToggle(4)}
              >
                <SentimentSatisfiedIcon sx={{ fontSize: iconSize }} />
              </ToggleButton>
            </Box>
            <Box>
              <ToggleButton
                sx={{
                  backgroundColor: moodValue === 5 ? "smiley5.main" : "inherit",
                  color: moodValue === 5 ? "white" : "inherit",
                  border: "none",
                  padding: 0,
                  borderRadius: "50%",
                }}
                value={5}
                checked={moodValue === 5}
                onChange={() => handleToggle(5)}
              >
                <SentimentSatisfiedAltIcon sx={{ fontSize: iconSize }} />
              </ToggleButton>
              <Typography sx={{ fontSize: 12, textAlign: "center" }}>
                Very Happy
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "grey.main",
              borderRadius: "8px",

              padding: "16px",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              Describe how you're feeling today.
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" variant="standard" />
            </Box>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};

export default MoodSelector;
