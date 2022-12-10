import { Stack } from "@mui/material";
import * as S from "./styles";

import Logo from "src/assets/images/Logo.svg";
import CartBtn from "../Buttons/CartBtn";

export default function Header() {
	return (
		<S.Container>
			<img src={Logo} alt="" />
			<Stack direction="row" spacing={2}>
				<S.Location>
					<S.IPin />
					Pouso Alegre
				</S.Location>
				<CartBtn header />
			</Stack>
		</S.Container>
	);
}
