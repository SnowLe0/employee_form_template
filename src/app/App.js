import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Employees from "../components/employees/Employees";

export default function App() {

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: "#24b26c",
				light: "#3c44b126",
				contrastText: "#fff"
			}
		},
		overrides: {
			MuiInputBase: {
				root: {
					background: "#ededed"
				}
			}
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Employees />
		</ThemeProvider>
	);

}