import { ICartBtnProps } from "./CardBtn.prop";
import * as S from "./styles";

export default function CartBtn({ header = false }: ICartBtnProps) {
	return (
		<S.CartButton header={header}>
			<S.ICart />
		</S.CartButton>
	);
}
