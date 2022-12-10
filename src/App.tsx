import { GlobalStyle } from "src/assets/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme/theme";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<h1>Hello world!</h1>
				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}

export default App;
