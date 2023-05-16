import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
	Grid,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const PulseCard = (props) => {
	return (
		<Box
			sx={{
				backgroundColor: "smiley5Backing.main",
				borderRadius: "8px",

				padding: "16px",
				width: "33%",
			}}
		>
			<SentimentSatisfiedIcon sx={{ fontSize: 80, marginLeft: "auto" }} />
			{props.todaysDateState.day}
			<br />
			{`${props.todaysDateState.date} ${
				props.todaysDateState.month
			} ${new Date().getFullYear()}
						`}
		</Box>
	);
};

export default PulseCard;
