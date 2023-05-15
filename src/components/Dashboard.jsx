import React from "react";
import { Grid } from "@mui/material";
import DateCard from "./DateCard";

const Dashboard = () => {
	return (
		<>
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
		</>
	);
};

export default Dashboard;
