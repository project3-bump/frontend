import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid,
  Fab,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PulseCard from "./PulseCard";
import ReportCard from "./ReportCard";
import { fetchData } from "../../../helpers/common";
import ManagerView from "./ManagerView";
import IndividualView from "./IndividualView";
import ToggleView from "./ToggleView";

const PulseOverview = (props) => {
  const [isManagerView, setIsManagerView] = useState(true);
  const handleToggle = (event, value) => {
    if (value !== isManagerView) {
      setIsManagerView(value);
    }
  };

  const [firstSliceIndex, setFirstSliceIndex] = useState(-4);
  const [lastSliceIndex, setLastSliceIndex] = useState(-1);

  const [badMoodReportsData, setBadMoodReportsData] = useState([]);
  const [notBadMoodReportsData, setNotBadMoodReportsData] = useState([]);

  const getBadMoodsReportsData = async () => {
    const { ok, data } = await fetchData("/bump/users/pulse", undefined, "GET");

    if (ok) {
      setBadMoodReportsData(data);
    } else {
      console.log("get bad mood reportsfailed");
    }
  };

  const getNotBadMoodsReportsData = async () => {
    const { ok, data } = await fetchData(
      "/bump/users/pulse/all",
      undefined,
      "GET"
    );

    if (ok) {
      const sortedData = data.sort((a, b) => {
        // Calculate the average of the moodData values for each object
        const averageA =
          a.moodData.reduce((sum, entry) => sum + entry.mood, 0) /
          a.moodData.length;
        const averageB =
          b.moodData.reduce((sum, entry) => sum + entry.mood, 0) /
          b.moodData.length;

        // Compare the average values to determine the sort order
        if (averageA < averageB) {
          return -1; // a should come before b
        } else if (averageA > averageB) {
          return 1; // b should come before a
        } else {
          return 0; // a and b are equal in terms of average, maintain their original order
        }
      });
      setNotBadMoodReportsData(sortedData);
    } else {
      console.log("get not bad moods reports failed");
    }
  };

  useEffect(() => {
    getBadMoodsReportsData();
    getNotBadMoodsReportsData();
  }, []);

  const prevMoods = props.userMoods.slice(firstSliceIndex, lastSliceIndex);
  if (prevMoods) {
    for (const i of prevMoods) {
      const dateObj = new Date(i.date);
      const day = dateObj.toLocaleString("default", { weekday: "long" });
      const date = dateObj.getDate();
      const month = dateObj.toLocaleString("default", { month: "long" });
      const year = dateObj.getFullYear();

      i.dateObj = {
        day,
        date,
        month,
        year,
      };
    }
  }

  const handlePrevMoodsChange = () => {
    if (!(firstSliceIndex <= props.userMoods.length * -1)) {
      setFirstSliceIndex(firstSliceIndex - 1);
      setLastSliceIndex(lastSliceIndex - 1);
    } else console.log("length exceeded");
  };

  const handleNextMoodsChange = () => {
    if (!(lastSliceIndex >= -1)) {
      setFirstSliceIndex(firstSliceIndex + 1);
      setLastSliceIndex(lastSliceIndex + 1);
      console.log(firstSliceIndex, lastSliceIndex);
    } else console.log("length exceeded");
  };

  return (
    <>
      {/* parent container */}
      <Box
        sx={{
          backgroundColor: "white.main",
          borderRadius: "8px",

          padding: "16px",
          width: "600px",
        }}
      >
        <CardContent>
          {/* container for title row */}
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography variant="h5" gutterBottom sx={{ marginRight: "auto" }}>
              Pulse Overview
            </Typography>
            <ToggleView
              isManagerView={isManagerView}
              setIsManagerView={setIsManagerView}
              handleToggle={handleToggle}
            />
          </Box>

          {/* date */}
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {`${props.todaysDateState.date - 4} - ${
              props.todaysDateState.date
            } ${props.todaysDateState.month} ${new Date().getFullYear()}
						`}
          </Typography>

          {/* container for today's mood */}

          {/* container for conditionally rendering manager / individual view */}
          <Box>
            {isManagerView && (
              <ManagerView
                badMoodReportsData={badMoodReportsData}
                notBadMoodReportsData={notBadMoodReportsData}
              />
            )}

            {!isManagerView && (
              <IndividualView
                handleNextMoodsChange={handleNextMoodsChange}
                handlePrevMoodsChange={handlePrevMoodsChange}
                prevMoods={prevMoods}
                userMoods={props.userMoods}
                todaysDateState={props.todaysDateState}
              />
            )}
          </Box>
        </CardContent>
      </Box>
    </>
  );
};

export default PulseOverview;
