import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/theme";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
