import React from "react";

import {
	Container,
	HeaderWrapper,
	Header,
	DropboxLogo,
	Content,
} from "./styles";
import { Box } from "@chakra-ui/react";

interface Props {
	variant: "blue" | "beige" | "white" | "black";
	title: String;
	description: String;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
	const buttonVariant = Math.round(Math.random());

	function handleToggle() {
		if (window.toggleActiveMenu) window.toggleActiveMenu();
	}

	return (
		<Box className={variant}>
			<HeaderWrapper>
				<Header>
					<h1>
						<DropboxLogo />
						<span>Dropbox</span>
					</h1>

					<button onClick={handleToggle}>
						{buttonVariant === 0 ? "Interagir" : "Acessar"}
					</button>
				</Header>
			</HeaderWrapper>

			<Content>
				<h2>{title}</h2>
				<p>{description}</p>
			</Content>
		</Box>
	);
};

export default Section;
