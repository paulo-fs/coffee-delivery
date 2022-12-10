import { GlobalStyle } from "src/assets/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme/theme";
import { CssBaseline } from "@mui/material";

import { Main } from "src/pages";
import { Header } from "src/components";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				<Main />
				<GlobalStyle />
				<CssBaseline />
			</ThemeProvider>
		</>
	);
}

export default App;
