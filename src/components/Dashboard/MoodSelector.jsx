import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
	TextField,
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
					<Typography
						variant="h5"
						gutterBottom
					>
						Hi Andrew <br />
						How are you feeling today?
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
							<TextField
								id="standard-basic"
								variant="standard"
							/>
						</Box>
					</Box>
				</CardContent>
			</Box>
		</>
	);
};

export default MoodSelector;
