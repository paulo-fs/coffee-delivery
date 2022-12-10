import { ShoppingCart } from 'phosphor-react'
import styled from 'styled-components'

interface Props {
	header?: boolean
}

export const CartButton = styled.button<Props>`
	padding: 0.5rem 0.7rem;
	border-radius: 4px;
	color: ${({theme, header}) => header ? theme.colors.product.yellowDark : theme.colors.base.white};
	background: ${({theme, header}) => header ? theme.colors.product.yellowLight : theme.colors.product.purpleDark};

	transition: .2s ease-in;
	&:hover {
		color: ${({theme}) => theme.colors.base.white};
		background: ${({theme, header}) => header ? theme.colors.product.yellow : theme.colors.product.purple};
	}
`


export const ICart = styled(ShoppingCart).attrs({
	weight: 'fill',
})`
	font-size: ${({theme}) => theme.fontBody.sizes.font20};
`
