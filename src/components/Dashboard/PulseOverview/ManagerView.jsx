import { Box } from "@mui/material";
import React from "react";
import ReportCard from "./ReportCard";

const ManagerView = (props) => {
  return (
    <Box>
      {props.badMoodReportsData &&
        props.badMoodReportsData.map((el) => (
          <ReportCard
            key={el.name}
            name={el.name}
            moodData={el.moodData}
            profilePicture={el.profilePicture}
            title={el.title}
          />
        ))}
      {props.notBadMoodReportsData &&
        props.notBadMoodReportsData
          .slice(-2)
          .map((el) => (
            <ReportCard
              key={el.name}
              name={el.name}
              moodData={el.moodData}
              profilePicture={el.profilePicture}
              title={el.title}
            />
          ))}
    </Box>
  );
};

export default ManagerView;
