import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const iconSize = 80;

const MoodSelector = () => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "white",
					borderRadius: "8px",
					border: "2px solid",
					borderColor: "blue",
					padding: "16px",
					width: "600px",
					height: "200px",
				}}
			>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
						gutterBottom
					>
						Hi Andrew How are you feeling today?
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "row" }}>
						<Box>
							<SentimentVeryDissatisfiedIcon sx={{ fontSize: iconSize }} />
							<Typography sx={{ fontSize: 12 }}>Very Sad</Typography>
						</Box>

						<Box>
							<SentimentDissatisfiedIcon sx={{ fontSize: iconSize }} />
							<SentimentNeutralIcon sx={{ fontSize: iconSize }} />
							<SentimentSatisfiedIcon sx={{ fontSize: iconSize }} />
						</Box>
						<Box>
							<SentimentSatisfiedAltIcon sx={{ fontSize: iconSize }} />
							<Typography sx={{ fontSize: 12 }}>Very Happy</Typography>
						</Box>
					</Box>
				</CardContent>
			</Box>
		</>
	);
};

export default MoodSelector;
