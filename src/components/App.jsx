import { Typography, AppBar, Grid, Button, CssBaseline } from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerComp from "./DrawerComp";
import DateCard from "./Dashboard/DateCard";
import Dashboard from "./Dashboard/Dashboard";
import Notifications from "./Dashboard/Notifications";
import { fetchData } from "../helpers/common";
import Message from "./Message/Message";

const App = (props) => {
	const [dashboardView, setDashBoardView] = useState(true);
	const [messagesView, setMessagesView] = useState(false);

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

	const getUserState = async () => {
		const { ok, data } = await fetchData(
			"/bump/users/" + props.id,
			undefined,
			"POST"
		);

		if (ok) {
			setUserState(data);
			console.log("userstate", userState);
		} else {
			console.log("get bad mood reports failed");
		}
	};

	useEffect(() => {
		// Code to run on component mount
		// Add event listeners, fetch data, initialize state, etc.
		getUserState();
	}, []);

	// state for storing user data after retrieval from DB
	const [userState, setUserState] = useState([]);

	// toggled state for manager or direct report view

	const [isManagerState, setIsManagerState] = useState([]);

	return (
		<>
			<Grid
				container
				spacing="5px"
				direction="row"
				alignItems="left"
				sx={{ backgroundColor: "secondary.main" }}
			>
				{/* this grid item is for the universal drawer which persists on all pages.  */}
				<Grid
					item
					xs={2.5}
				>
					<DrawerComp
						userState={userState}
						setDashBoardView={setDashBoardView}
						setMessagesView={setMessagesView}
					/>
				</Grid>

				{/* this code block is the start of all items to the right of the drawer */}
				<Grid
					item
					xs={9.5}
				>
					{/* define the component to be rendered here */}
					{dashboardView ? (
						<Dashboard
							todaysDateState={todaysDateState}
							id={props.id}
							setID={props.setID}
						/>
					) : (
						<Message /> // Or any other component you want to render when the condition is false
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default App;
