import { Typography, AppBar, Grid, Button, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerComp from "./DrawerComp";
import DateCard from "./Dashboard/DateCard";
import Dashboard from "./Dashboard/Dashboard";
import Notifications from "./Dashboard/Notifications";

const App = () => {

	// initializes and sets dateState
	const date = new Date();
	const formattedDate = {
		month: date.toLocaleString("default", { month: "long" }),
		day: date.toLocaleString("default", { weekday: "long" }),
		date: date.getDate(),
		time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
	};

	// state for current date and time
	const [todaysDateState, setTodaysDateState] = useState(formattedDate);

	const handleDateDebug = () => {
		const date = new Date();
		const formattedDate = {
			month: date.toLocaleString("default", { month: "long" }),
			day: date.toLocaleString("default", { weekday: "long" }),
			date: date.getDate(),
			time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
		};
		setTodaysDateState(formattedDate);
		console.log(todaysDateState);
	};

	// state for storing user data after retrieval from DB
	const [userState, setUserState] = useState([]);

	// toggled state for manager or direct report view

	const [isManagerState, setIsManagerState] = useState([]);

	return (
		<>
			<Grid
				container
				spacing="0px"
				direction="row"
				alignItems="center"
				sx={{ backgroundColor: "secondary.main" }}
			>
				{/* this grid item is for the universal drawer which persists on all pages.  */}
				<Grid
					item
					xs={3}
				>
					<DrawerComp />
				</Grid>

				{/* this code block is the start of all items to the right of the drawer */}
				<Grid
					item
					xs={9}
				>
					{/* define the component to be rendered here */}
					<Dashboard todaysDateState={todaysDateState} />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
