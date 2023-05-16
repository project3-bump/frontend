import React, { useState } from "react";
import { Grid } from "@mui/material";
import DateCard from "./DateCard";
import Notifications from "./Notifications";
import MoodSelector from "./MoodSelector";
import PulseOverview from "./PulseOverview";

const Dashboard = (props) => {
	const [userMoods, setUserMoods] = useState([]);

	const getUserMoods = async () => {
		const { ok, data } = await fetchData(
			"/bump/users/oneuser",
			undefined,
			"GET",
			{
				id: props.id,
			}
		);
		console.log(props.id)
		console.log(data);

		if (ok) {
			setUserMoods(data);
		} else {
			console.log(data);
		}
	};

	return (
		<>
			<Grid container>

				{/* this grid item contains moodselector and pulse overview. */}
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
							<PulseOverview
								todaysDateState={props.todaysDateState}
								id={props.id}
							/>
						</Grid>
					</Grid>
				</Grid>

				{/* this grid item contains today's calendar and notiifcations. */}
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
