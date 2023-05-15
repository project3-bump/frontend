import { Typography, AppBar, Grid, Button, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerComp from "./DrawerComp";
import DateCard from "./DateCard";

const App = () => {
	// state for current date and time
	const [todaysDateState, setTodaysDateState] = useState();

	useEffect(() => {
		const currentDate = new Date();
		setTodaysDateState(currentDate);
		console.log(todaysDateState);
	}, []);

	// const handleDebug =

	// state for storing user data after retrieval from DB
	const [userState, setUserState] = useState([]);

	// toggled state for manager or direct report view

	const [isManagerState, setIsManagerState] = useState([]);

	return (
		<>
			{/* use MUI Grid for all our layouts. */}
			<Grid
				container
				spacing="0px"
				direction="row"
				alignItems="center"
			>
				<Grid
					item
					xs={4}
				>
					<DrawerComp />
				</Grid>
				<Grid
					item
					xs={4}
				>
					{/* <Button>debug refresh</Button> */}
					<DateCard />
				</Grid>
				<Grid
					item
					xs={4}
				>
					<DateCard />
					<DateCard />
					<DateCard />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
