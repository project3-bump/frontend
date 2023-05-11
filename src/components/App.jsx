import { Typography, AppBar, Grid } from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";

const App = () => {
	// state for current date and time
	const [todaysDateState, setTodaysDateState] = useState();

	// state for storing user data after retrieval from DB
	const [userState, setUserState] = useState([]);

	// toggled state for manager or direct report view

	const [isManagerState, setIsManagerState] = useState([]);

	return (
		// use MUI Grid for all our layouts.
		<Grid>
			<Grid item>
				<DrawerComp />
			</Grid>

			<Grid item>
				<AppBar color="smiley5">xd</AppBar>
			</Grid>
		</Grid>
	);
};

export default App;
