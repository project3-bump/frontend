import React from "react";
import { Grid } from "@mui/material";
import DateCard from "./DateCard";
import Notifications from "./Notifications";
import MoodSelector from "./MoodSelector";
import PulseOverview from "./PulseOverview";

const Dashboard = (props) => {
	return (
		<>
			<Grid container>
				<Grid
					item
					xs={9}
				>
					<Grid
						container
						spacing="5px"
						direction="column"
						alignItems="center"
					>
						<Grid item>
							<MoodSelector />
						</Grid>
						<Grid item>
							<PulseOverview />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					xs={3}
				>
					<Grid
						container
						spacing="5px"
						direction="column"
						alignItems="center"
					>
						<Grid item>
							<DateCard todaysDateState={props.todaysDateState} />
						</Grid>
						<Grid item>
							<Notifications />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
