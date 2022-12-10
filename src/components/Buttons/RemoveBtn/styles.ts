import styled from "styled-components";
import { Trash } from 'phosphor-react'

export const RemoveButton = styled.button`
	padding: 8px;
	display: flex;
	align-items: center;
	gap: 8px;
	text-transform: uppercase;
	color: ${({theme}) => theme.colors.base.title};
`;

export const ITrash = styled(Trash).attrs({
	size: 16
})`
	color: ${({theme}) => theme.colors.product.purple};
`;
