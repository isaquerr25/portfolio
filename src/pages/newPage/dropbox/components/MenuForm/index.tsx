import React from "react";

import { Container, Navigation, DropboxLogo, Form } from "./styles";

const MenuForm: React.FC = () => {
	function handleToggle() {
		if (window.toggleActiveMenu) window.toggleActiveMenu();
	}

	return (
		<Container>
			<Navigation>
				<h1>
					<DropboxLogo />
					<span>Dropbox</span>
				</h1>
				{/* ✕ chacter in video description */}
				<button className="action--close" onClick={handleToggle}>
					✕
				</button>
			</Navigation>

			<Form className="text-[black]">
				<span className="title text-[black]">Registre-se</span>
				<span className="subtitle text-[black]">
					preencha o formulário abaixo
				</span>

				<input type="text" placeholder="Nome" />
				<input type="text" placeholder="Sobrenome" />
				<input type="email" placeholder="E-mail" />
				<input type="password" placeholder="Senha" />

				<button>Prosseguir</button>

				<span className="terms">
					Esta página está sujeita à Política de privacidade e aos
					Termos de serviço.
				</span>
			</Form>
		</Container>
	);
};

export default MenuForm;
