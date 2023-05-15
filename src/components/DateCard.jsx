import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";

const DateCard = () => {
	return (
		<>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom
				>
					Word of the Day
				</Typography>
				<Typography
					variant="h5"
					component="div"
				></Typography>
				<Typography
					sx={{ mb: 1.5 }}
					color="text.secondary"
				>
					adjective
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</>
	);
};

export default DateCard;
