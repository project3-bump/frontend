import React, { useEffect } from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
} from "@mui/material";

const PulseOverview = () => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "white",
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
						Pulse Overview
					</Typography>
				</CardContent>
			</Box>
		</>
	);
};

export default PulseOverview;
