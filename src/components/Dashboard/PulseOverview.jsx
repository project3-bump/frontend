import React, { useEffect } from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
	Grid,
} from "@mui/material";

const PulseOverview = (props) => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "white.main",
					borderRadius: "8px",
					border: "2px solid",
					borderColor: "blue",
					padding: "16px",
					width: "500px",
				}}
			>
				<CardContent>
					<Box sx={{ display: "flex", flexDirection: "row" }}>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Pulse Overview
						</Typography>
						<Button
							variant="contained"
							sx={{
								borderRadius: "20px",
								width: "200px",
								justifyContent: "flex-start",
								// position: "absolute",
								// top: 0,
								// left: 0,
							}}
						>
							Manager View
						</Button>
						<Button
							variant="contained"
							sx={{
								borderRadius: "20px",
								width: "150px",
								justifyContent: "flex-start",
								position: "relative",
								// top: 0,
								right: "50px",
							}}
						>
							Personal View
						</Button>
					</Box>

					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
					>
						{`${props.todaysDateState.date - 4} - ${
							props.todaysDateState.date
						} ${props.todaysDateState.month} ${new Date().getFullYear()}
						`}
					</Typography>
				</CardContent>
			</Box>
		</>
	);
};

export default PulseOverview;
