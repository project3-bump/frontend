import React, { useEffect } from "react";
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

const PulseOverview = (props) => {
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
						<Typography
							variant="h5"
							gutterBottom
							sx={{ marginRight: "auto" }}
						>
							Pulse Overview
						</Typography>
						<Box sx={{ display: "flex", position: "relative" }}>
							<Button
								variant="contained"
								sx={{ borderRadius: "20px", width: "200px" }}
							>
								Manager View
							</Button>
							<Button
								variant="contained"
								sx={{
									borderRadius: "20px",
									width: "150px",
									marginLeft: "-50px",
									position: "relative",
									zIndex: 1,
								}}
							>
								Personal View
							</Button>
						</Box>
					</Box>

					{/* date */}
					<Typography
						sx={{ fontSize: 14 }}
						color="text.secondary"
					>
						{`${props.todaysDateState.date - 4} - ${
							props.todaysDateState.date
						} ${props.todaysDateState.month} ${new Date().getFullYear()}
						`}
					</Typography>

					{/* container for today's mood */}
					<Box
						sx={{
							backgroundColor: "smiley5Backing.main",
							borderRadius: "8px",

							padding: "16px",
							width: "100%",
							display: "flex",
							flexDirection: "row",
						}}
					>
						<Box>
							<Typography>{props.todaysDateState.day}</Typography>
							<Typography>{`${props.todaysDateState.date} ${
								props.todaysDateState.month
							} ${new Date().getFullYear()}`}</Typography>
							<Typography>
								placeholder you're feeling very happy placeholder
							</Typography>
						</Box>
						<Box>
							<SentimentSatisfiedIcon sx={{ fontSize: 80 }} />
						</Box>
					</Box>

					<Box>
						<Typography>Previous Pulses</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Fab
								color="grey.main"
								aria-label="add"
							>
								<ArrowBackIosIcon />
							</Fab>
							<PulseCard todaysDateState={props.todaysDateState} />
							<Fab
								color="grey.main"
								aria-label="add"
							>
								<ArrowForwardIosIcon />
							</Fab>
						</Box>
					</Box>
				</CardContent>
			</Box>
		</>
	);
};

export default PulseOverview;
