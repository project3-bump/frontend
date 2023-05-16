import React, { useEffect } from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
} from "@mui/material";

const DateCard = (props) => {
	useEffect(() => {
		console.log(props.todaysDateState);
	}, []);
	return (
		<>
			<Box
				sx={{
					backgroundColor: "white.main",
					borderRadius: "8px",
					border: "2px solid",
					borderColor: "blue",
					padding: "16px",
					width: "200px",
				}}
			>
				<CardContent>
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
						gutterBottom
					>
						Today
					</Typography>
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
						gutterBottom
					>
						{props.todaysDateState.time}
					</Typography>
					<Typography
						sx={{ mb: 1.5 }}
						color="text.secondary"
					>
						{props.todaysDateState.month}
					</Typography>
					<Typography variant="body2">{props.todaysDateState.day}</Typography>
				</CardContent>
			</Box>
		</>
	);
};

export default DateCard;
