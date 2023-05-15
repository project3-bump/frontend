import * as React from "react";
import {
	Box,
	Grid,
	Toolbar,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;

const DrawerComp = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Drawer
				sx={{
					width: drawerWidth,
					// flexShrink: 0,

					// use this to customize the CSS of the drawer
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						backgroundColor: "primary.main",
					},
				}}
				variant="permanent"
				// anchor="left"
			>
				<Toolbar>
					<List>
						{["Dashboard", "Message", "Calendar"].map((text, index) => (
							<ListItem
								key={text}
								disablePadding
							>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Toolbar>
			</Drawer>
		</Box>
	);
};

export default DrawerComp;
