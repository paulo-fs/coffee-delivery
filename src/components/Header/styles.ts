import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { ShoppingCart, MapPin } from 'phosphor-react'

export const Container = styled(Box).attrs({
	sx: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginInline: 20,
		marginBlock: 4,
	}
})``;

export const Location = styled(Typography).attrs({
	sx: {
		display: 'flex',
		alignItems: 'center',
		gap: 1,
		paddingInline: 2,
		paddingBlock: 1,
		borderRadius: 1
	}
})`
	font: ${({theme}) => theme.fontBody.regular};
	color: ${({theme}) => theme.colors.product.purpleDark};
	font-size: ${({theme}) => theme.fontBody.sizes.font14};
	background: ${({theme}) => theme.colors.product.purpleLight};
`;

export const ICart = styled(ShoppingCart).attrs({
	weight: 'fill',
})``;

export const IPin = styled(MapPin).attrs({
	weight: 'fill',
})`
	color: ${({theme}) => theme.colors.product.purple};
	font-size: ${({theme}) => theme.fontBody.sizes.font20};
`;
