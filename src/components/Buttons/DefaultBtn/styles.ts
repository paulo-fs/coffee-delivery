import styled from "styled-components";

export const DefaultButton = styled.button`
	padding: 0.75rem 2.5rem;
	border-radius: 6px;
	font: ${({theme}) => theme.fontBody.bold};
	font-size: ${({theme}) => theme.fontBody.sizes.font14};
	text-transform: uppercase;
	color: ${({theme}) => theme.colors.base.white};
	background-color: ${({theme}) => theme.colors.product.yellow};

	transition: .2s ease-in;
	&:hover {
		background-color: ${({theme}) => theme.colors.product.yellowDark};
	}
`;
