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
	const [moodValue, setMoodValue] = useState("");
	const didMount = useRef(false);
	const shouldUpdate = useRef(false);

	const handleToggle = async (value) => {
		shouldUpdate.current = moodValue !== value;
		setMoodValue((prevValue) => (prevValue === value ? null : value));
		setMoodValue(value);
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
					<Typography
						variant="h5"
						gutterBottom
					>
						Hi Andrew <br />
						How are you feeling today?
					</Typography>

					<Box sx={{ display: "flex", flexDirection: "row" }}>
						<Box>
							<ToggleButton
								sx={{
									backgroundColor: moodValue === 1 ? "primary.main" : "inherit",
									color: moodValue === 1 ? "white" : "inherit",
									border: "none",
									padding: 0,
								}}
								value={1}
								checked={moodValue === 1}
								onChange={() => handleToggle(1)}
							>
								<SentimentVeryDissatisfiedIcon sx={{ fontSize: iconSize }} />
								<Typography sx={{ fontSize: 12 }}>Very Sad</Typography>
							</ToggleButton>
						</Box>
						<Box>
							<ToggleButton
								sx={{
									backgroundColor: moodValue === 2 ? "primary.main" : "inherit",
									color: moodValue === 1 ? "white" : "inherit",
									border: "none",
									padding: 0,
								}}
								value={2}
								checked={moodValue === 2}
								onChange={() => handleToggle(2)}
							>
								<SentimentDissatisfiedIcon sx={{ fontSize: iconSize }} />
							</ToggleButton>
							<ToggleButton
								sx={{
									backgroundColor: moodValue === 3 ? "primary.main" : "inherit",
									color: moodValue === 1 ? "white" : "inherit",
									border: "none",
									padding: 0,
								}}
								value={3}
								checked={moodValue === 3}
								onChange={() => handleToggle(3)}
							>
								<SentimentNeutralIcon sx={{ fontSize: iconSize }} />
							</ToggleButton>
							<ToggleButton
								sx={{
									backgroundColor: moodValue === 4 ? "primary.main" : "inherit",
									color: moodValue === 1 ? "white" : "inherit",
									border: "none",
									padding: 0,
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
									backgroundColor: moodValue === 5 ? "primary.main" : "inherit",
									color: moodValue === 1 ? "white" : "inherit",
									border: "none",
									padding: 0,
								}}
								value={5}
								checked={moodValue === 5}
								onChange={() => handleToggle(5)}
							>
								<SentimentSatisfiedAltIcon sx={{ fontSize: iconSize }} />

								<Typography sx={{ fontSize: 12 }}>Very Happy</Typography>
							</ToggleButton>
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
