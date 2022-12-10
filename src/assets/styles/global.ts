import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, "Roboto";
	}

	body {
		font: ${({theme}) => theme.fontBody.regular};
		background: ${({theme}) => theme.colors.base.background};
	}

	button {
		border: none;
		cursor: pointer;
	}

	a {
		text-decoration: none;
      color: inherit;
	}

	ul, li {
		list-style: none;
      padding: 0;
	}
`;
