import React from "react";
import ReactDOM from "react-dom/client";
import Primary from "./components/Primary";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/Theme";
import { CssBaseline } from "@mui/material";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssBaseline />
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
