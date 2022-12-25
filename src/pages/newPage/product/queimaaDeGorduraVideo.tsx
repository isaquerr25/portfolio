import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { useWindowDimensions } from "../../projects";

function QueimaaDeGorduraVideo() {
	const [question, setQuestion] = useState<number>(0);
	const [openButton, setOpenButton] = useState<boolean>(false);

	const [searchParams] = useSearchParams();
	const { height, width } = useWindowDimensions();

	return (
		<Box
			className="bg-[#F1F5F9] flex flex-col items-center min-h-[100vh]"
			overflowX="hidden"
			w={"100vw"}
		>
			<Flex
				flexDirection="column"
				alignItems="center"
				className="flex-col w-[100vw] md:w-[60rem] max-w-[100vw] bg-[white] "
			>
				<Flex
					flexDirection="column"
					justify="space-between"
					alignItems="center"
					className=" w-[100%]"
				>
					<div className="h-[0.5rem] w-[100%] bg-[red]" />
					<Text
						className="text-center font-[600] text-2xl xl:text-[1.6rem]  w-[50rem]  max-w-[90vw] md:mt-[1rem] mb-[2rem]"
						textColor={"red"}
					>
						Como{" "}
						{searchParams.get("sex") === "man"
							? "Uma Mulher"
							: "Um Homem"}{" "}
						Descobriu o Segredo da Medicina Moderna Para Queimar
						Gordura e Perdeu 32 kg Usando um Método Simples Que
						Garante 100% a Queima de Gordura Diária
					</Text>
				</Flex>
				<ReactPlayer
					bg="white"
					blend="lighten"
					width={(width ?? 10) > 1100 ? "42rem" : "80vw"}
					height={(width ?? 10) > 1100 ? "23.9rem" : "40vw"}
					url="https://youtu.be/aDwhSDeVwds"
					onPlay={() => {
						setTimeout(function () {
							setOpenButton(true);
						}, 31 * 60 * 1000);
					}}
				/>
				<Text className="text-center font-[600] text-sm xl:text-[0.8rem]  w-[50rem]  max-w-[90vw] mt-[1rem]">
					(Certifique-se de que seu som está ligado. Por favor, espere
					até 10 segundos para o vídeo carregar)
				</Text>
				{openButton && (
					<div className={`pt-[2rem] `}>
						<a href={`https://go.hotmart.com/K76634844A?ap=c7a7`}>
							<img
								src="/comprar.jpg"
								alt=""
								className="h-[7rem] md:h-[12rem]"
							/>
						</a>
					</div>
				)}
				<div className="py-[2rem] flex flex-col text-gray-500 w-[40rem] gap-y-[1rem] text-[0.8rem]">
					<div className="text-center ">
						<a
							href="https://receitasmodernas.com/termos-de-uso/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							Termos{" "}
						</a>{" "}
						-{" "}
						<a
							href="https://receitasmodernas.com/aviso-de-responsabilidade/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							Responsabilidade{" "}
						</a>{" "}
						-{" "}
						<a
							href="https://receitasmodernas.com/politica-de-privacidade/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							Privacidade{" "}
						</a>{" "}
						-{" "}
						<a
							href="https://receitasmodernas.com/contato/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							Contato{" "}
						</a>
					</div>

					<Text className="text-center text-[0.8rem]">
						Copyright 2022 D.C. Baggio M.E. Publishing
					</Text>
				</div>
			</Flex>
		</Box>
	);
}

export default QueimaaDeGorduraVideo;
