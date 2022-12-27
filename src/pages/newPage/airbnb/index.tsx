import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppThemeProvider from "./themes/AppThemeProvider";

export const Airbnb = () => (
	<AppThemeProvider>
		<App />
	</AppThemeProvider>
);
