import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import DateCard from "./DateCard";
import Notifications from "./Notifications";
import MoodSelector from "./MoodSelector/MoodSelector";
import PulseOverview from "./PulseOverview/PulseOverview";
import { fetchData } from "../../helpers/common";

const Dashboard = (props) => {
  const [userMoods, setUserMoods] = useState([]);
  const [moodSelected, setMoodSelected] = useState(false);

  const getUserMoods = async () => {
    const { ok, data } = await fetchData(
      "/bump/users/oneuser",
      undefined,
      "PUT",
      {
        id: props.id,
      }
    );

    if (ok) {
      setUserMoods(data);
      console.log("user mood set");
      console.log(data);
    } else {
      console.log("get user moods failed");
    }
  };

  useEffect(() => {
    getUserMoods();
  }, []);

  useEffect(() => {
    getUserMoods();
    setMoodSelected(false);
  }, [moodSelected]);

  return (
    <>
      <Grid container justifyContent="flex-start">
        {/* this grid item contains moodselector and pulse overview. */}
        <Grid item xs={7}>
          <Grid container spacing="5px" direction="column" alignItems="left">
            <Grid item>
              <MoodSelector
                id={props.id}
                getUserMoods={getUserMoods}
                setMoodSelected={setMoodSelected}
              />
            </Grid>
            <Grid item>
              <PulseOverview
                todaysDateState={props.todaysDateState}
                id={props.id}
                userMoods={userMoods}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* this grid item contains today's calendar and notiifcations. */}
        <Grid item xs={5}>
          <Grid container spacing="5px" direction="column" alignItems="center">
            <Grid item>
              <DateCard todaysDateState={props.todaysDateState} />
            </Grid>
            <Grid item>
              <Notifications />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
