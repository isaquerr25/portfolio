import { useEffect, useState } from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactPlayer from "react-player";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Divider,
	Flex,
	Icon,
	Image,
	List,
	ListIcon,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Progress,
	Slider,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight, FaRegStar, FaRegSun } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GrStatusWarning } from "react-icons/gr";

import { useSearchParams } from "react-router-dom";

import { RiInstagramLine } from "react-icons/ri";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useWindowDimensions } from "../../projects";

function FirstSeller() {
	const [question, setQuestion] = useState<number>(0);
	useEffect(() => {
		function doSomething() {
			setQuestion(question + 1);
		}
	}, [question]);
	const { height, width } = useWindowDimensions();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const [ref] = useKeenSlider<HTMLDivElement>({
		loop: true,
		mode: "free",
		slides: {
			perView: 3,
			spacing: 15,
		},
	});

	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
		slides: {
			perView: 3,
			spacing: 15,
		},
		loop: true,
	});

	const [sliderRefMin, instanceRefMin] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
		slides: {
			perView: 1,
			spacing: 15,
		},
		loop: true,
	});

	return (
		<Box className="bg-transparent max-w-[100vw] overflow-x-hidden w-[100%]">
			<div
				className="bg-center  w-[100vw] flex flex-col justify-center items-center pt-[19rem] md:pt-0"
				style={{
					border: "1px solid #000",
					backgroundImage:
						(width ?? 10) > 800
							? "url('/asset-19-1.jpeg')"
							: "url('/fristBANNER-MOBILKE3-scaled.jpg')",
					backgroundSize: "115vw, auto, contain",
					backgroundPositionY: "0rem ",
				}}
			>
				<img
					src="/fristasset-0-1.png"
					className="w-[15rem] mt-[4rem]"
					alt=""
				/>
				<text className="text-[white]  text-[1.2rem]  md:text-[2rem] w-[80vw] md:w-[45rem] text-center mt-[1.5rem] leading-[1.5rem] md:leading-0 xl:leading-[2rem]">
					<span className=" font-[800] ">
						DESCUBRA COMO COMEÇAR DO ZERO{" "}
					</span>{" "}
					NO MERCADO DE AFILIADOS E GARANTIR A SUA PRIMEIRA{" "}
					<span className="text-[#EEA528] font-[800]">
						{" "}
						VENDA EM 24 HORAS!
					</span>
				</text>
				<text className="text-[white]  text-[1.2rem]  md:text-[1.8rem] w-[80vw] md:w-[53rem] text-center mt-[1rem] mb-[1rem] leading-[1.5rem] md:leading-0 xl:leading-[2rem]">
					<span className=" font-[600] ">
						{" "}
						MAIS DE 300 MIL INSCRITOS NO YOUTUBE, 8 MIL ALUNOS PELO
						MUNDO,{" "}
					</span>
					PRIMEIRO MILHÃO AOS 18 ANOS… ESSE SOU EU!
				</text>
				<ReactPlayer
					width={(width ?? 10) > 1100 ? "53rem" : "80vw"}
					height={(width ?? 10) > 1100 ? "30rem" : "40vw"}
					url="https://youtu.be/KMPFJt1YFpA"
				/>
				<div className="w-[100vw] flex justify-center items-center mb-[2rem] mt-[2rem] ">
					<button className=" zoom-in-zoom-out font-[800] text-[1.8rem]  md:text-[2rem] px-[2rem]  md:px-[5rem] bg-[#EEA528] shadow-lg  shadow-[#EEA528] rounded-[2rem] ">
						{" "}
						COMECE AGORA{" "}
					</button>
				</div>
			</div>
			<div className="bg-[url('/asset-20-1ssss.jpeg')] bg-center w-[100vw] flex flex-col justify-center items-center pt-[2rem] md:pt-[5rem]">
				<div className=" border-[2px] border-[#EEA528] rounded-[2rem] flex flex-col justify-center items-center mb-[2rem] mb:mb-[5rem]  max-w-[95vw]">
					<text className="text-[1.6rem] md:text-[2.5rem] text-center text-[white] w-[90vw] md:w-[30rem] py-[2rem] ">
						Aqui está tudo o que você vai receber no{" "}
						<span className="text-[#EEA528] text-[800]">P24</span>
					</text>
					<div className="grid  grid-cols-1 md:grid-cols-2 w-[70rem] py-[1rem] px-[1rem] justify-center items-center mx-[ ] ">
						{[
							{
								title: "PRIMEIRA VENDA EM 30 DIAS",
								subTile: `
									Nesse módulo você vai aprender a fazer 
									sua primeira venda em 30 dias, sem precisar aparecer!
									`,
								ina: "adsadasssss.jpeg",
							},
							{
								title: "PRIMEIRA VENDA EM 15 DIAS",
								subTile: `
								Nesse módulo você vai aprender todas as 
								estratégias para fazer a sua primeira venda em 15 dias.
									`,
								ina: "dasdaaaaa.jpeg",
							},
							{
								title: "PRIMEIRA VENDA EM 24 HORAS",
								subTile: `
								E agora você vai aprender tudo o que precisa saber, para fazer a sua primeira venda em menos de 24 horas. (Essas estratégias podem ser usadas até para começar a viver de internet.)
									`,
								ina: "asset-3-1.jpeg",
							},
							{
								title: "CURSO COMPLETO DE TRÁFEGO PAGO (BÔNUS)",
								subTile: `
										Nesse módulo você vai aprender todas as estratégias para fazer a sua primeira venda em 15 dias.
									`,
								ina: "asset-4-1.jpeg",
							},
						].map((item, index) => (
							<div className=" flex flex-col justify-center items-center w-[85vw] md:w-[30rem] mx-[auto] mb-[2rem]  leading-[1.8rem] md:leading-0">
								<img className="" src={item.ina} alt="" />
								<div className="text-center flex flex-col justify-center items-center mt-[1rem] md:mt-0">
									<text className="text-[#EEA528] text-[1.8rem]  md:text-[2rem] font-[600]">
										{item.title}
									</text>

									<text className="text-[white] leading-[1.2rem] md:leading-0  mt-[1rem] md:mt-0">
										{item.subTile}
									</text>
								</div>
							</div>
						))}
					</div>
					<div className="flex justify-center items-center mb-[2rem]  md:mb-[3rem] mx-[auto] mt-[0rem] 2xl:mt-[4rem]">
						<button className=" zoom-in-zoom-out font-[800] text-[1.8rem]  md:text-[2rem] px-[2rem]  md:px-[5rem] bg-[#EEA528] shadow-lg  shadow-[#EEA528] rounded-[2rem] ">
							{" "}
							COMECE AGORA{" "}
						</button>
					</div>
				</div>
			</div>
			<div
				className="  w-[100vw] flex flex-row bg-[#EEA528] justify-center items-center py-[1rem] relative h-[25rem] md:h-[15rem] text-center"
				style={
					(width ?? 10) > 1100
						? {
								border: "1px solid #000",
								backgroundImage: "url('/frist.jpeg')",
								backgroundSize: "110vw, auto, contain",
								backgroundPositionY: "-3rem ",
								backgroundPositionX: "-5vw ",
						  }
						: {
								background: "EFA528",
						  }
				}
			>
				<div className="flex flex-col items-center justify-center">
					<text className="font-[400] text-[1.8rem]  md:text-[2.5rem] leading-[1.8rem] md:leading-0">
						{" "}
						LEIA PARA POUPAR {(width ?? 10) < 1100 && (
							<br />
						)} SEU <span className="font-[800]"> TEMPO.</span>
					</text>
					<text className="z-[2] text-[1.4rem]  md:text-[1.3rem] w-[80vw] md:w-[43rem] text-center mt-[1rem] leading-[1.5rem] md:leading-0">
						{" "}
						<span className="font-[800]">
							{" "}
							Você vai aprender com uma pessoa que já trilhou o
							caminho{" "}
						</span>{" "}
						das pedras e passou pelo processo difícil do início de
						qualquer jornada.
						<span className="font-[800]">
							Nesse processo descobriu o que funciona e o que não
							funciona
						</span>{" "}
						, para ensinar de uma forma que vai e poupar{" "}
						<span className="whitespace-nowrap">
							{" "}
							tempo e dinheiro.
						</span>
					</text>
				</div>
			</div>
			<div
				className="  w-[100vw]  justify-center flex  flex-col md:flex-row items-center gap-[2rem] py-[2rem] md:py-[5rem]"
				style={
					(width ?? 10) > 1100
						? {
								border: "1px solid #000",
								backgroundImage: "url('/asset-20-1ssss.jpeg')",
								backgroundSize: "100vw, auto, contain",
								backgroundPositionY: "50% ",
						  }
						: {
								border: "1px solid #000",
								backgroundImage: "url('/asset-20-1ssss.jpeg')",
								backgroundSize: "100rem, auto, contain",
								backgroundPositionY: "50% ",
								backgroundPositionX: "50% ",
						  }
				}
			>
				<img
					src="/fristasset-5-1.png"
					alt=""
					className="w-[80vw] md:w-[25rem]"
				/>
				<div className="flex flex-col items-center justify-center ">
					<text className="font-[800] text-[2.2rem] text-[#EEA528] mr-[auto]">
						{" "}
						Prazer Caio M.{" "}
					</text>
					<text className="z-[2] text-[white] w-[85vw] md:w-[30rem] text-[1.4rem] md:text-[1.1rem] leading-[1.6rem] md:leading-0 mt-[1rem] md:mt-0">
						{" "}
						Especialista no mercado digital, iniciei como afiliado
						através de grupos pelo Facebook.
						<br />
						<br />
						Atualmente já trabalho com marketing há 3 anos e graças
						a ele, pude morar sozinho com apenas 17 anos!
						<br />
						<br />
						Hoje em dia, já faturo mais de R$150.000,00 por mês com
						vendas pela internet e ajudo meus seguidores a começarem
						a faturar com vendas sem sair de casa!
						<br />
						<br />
						Com mais de 300 mil inscritos no YouTube, atualmente me
						dedico a ajudar todos os que desejam sair da CLT para
						começar a ganhar a vida com a internet.{" "}
					</text>
				</div>
			</div>
			<div className=" flex flex-col md:flex-row bg-[#EEA528] justify-center items-center py-[1rem] relative w-[100vw] xl:w-[auto] px-[0vw] 52xl:px-[28vw] h-[17rem] md:h-[12rem] ">
				<img
					src="/afristsset-6-1.png"
					className=" h-[6rem]  mx-[auto] "
					alt=""
				/>
				<div className="flex flex-col items-center justify-center">
					<text className="font-[800] text-[3.5rem] md:text-[4rem] ">
						{" "}
						+304 MIL{" "}
					</text>
					<text className="z-[2] text-[1.3rem] md:text-[1.4rem]">
						{" "}
						INSCRITOS NO YOUTUBE!{" "}
					</text>
				</div>
				{(width ?? 10) > 940 && (
					<img
						src="/afristsset-6-1.png"
						className=" h-[6rem]  mx-[auto] z-[2] "
						alt=""
					/>
				)}
				<div className="h-[5rem] md:h-[3rem] w-[100vw] absolute bottom-[-1.5rem] bg-[#EEA528] rotate-[4deg] md:rotate-[1deg] pr-[50rem]" />
			</div>
			<div
				className="  w-[100vw] py-[1rem]"
				style={
					(width ?? 10) > 940
						? {
								border: "1px solid #000",
								backgroundImage: "url('/fristasset-23-1.jpeg')",
								backgroundSize:
									(width ?? 10) > 940
										? "100vw, auto, contain"
										: "40rem, auto, contain",
								backgroundPositionY: "50% ",
						  }
						: {
								border: "1px solid #000",
								backgroundImage: "url('/fristasset-23-1.jpeg')",
								backgroundSize:
									(width ?? 10) > 940
										? "100vw, auto, contain"
										: "40rem, auto, contain",
								backgroundPositionY: "50% ",
								backgroundPositionX: "50% ",
								backgroundRepeat: "no-repeat",
								background: "#262626",
						  }
				}
			>
				<div className="flex flex-col  w-[55rem] max-w-[90vw] pb-[1rem] mb:pb-[2rem] text-white mx-[auto] text-center">
					<text className=" text-[2rem] font-[800] mb-[1rem] pt-[3rem] ">
						TUDO FEITO PARA{" "}
						<span className="text-[#EEA528] "> VOCÊ!</span>
					</text>

					<text className=" text-[1.5rem]  md:text-[1.4rem]  mb-[2rem] leading-[1.7rem] leading-0">
						Especialista no mercado digital, iniciei como afiliado
						através de grupos pelo Facebook.
						<br />
						<br />
						Atualmente já trabalho com marketing há 3 anos e graças
						a ele, pude morar sozinho com apenas 17 anos!
						<br />
						<br />
						Hoje em dia, já faturo mais de R$150.000,00 por mês com
						vendas pela internet e ajudo meus seguidores a começarem
						a faturar com vendas sem sair de casa!
						<br />
						<br />
						Com mais de 300 mil inscritos no YouTube, atualmente me
						dedico a ajudar todos os que desejam sair da CLT para
						começar a ganhar a vida com a internet.
						<br />
						<br />
						<span className="font-[600] text-[1.7rem]">
							*RESULTADOS DOS NOSSOS ALUNOS*
						</span>
					</text>
				</div>

				<>
					<div className="navigation-wrapper w-[15rem] md:w-[58rem] mx-[auto] relative">
						<div
							ref={(width ?? 10) > 940 ? sliderRef : sliderRefMin}
							className="keen-slider !gap-x-0 justify-start "
						>
							{[
								{
									img: "/fristasset-7-1.jpeg",
								},
								{
									img: "/fristasset-9-1.jpeg",
								},
								{
									img: "/fristasset-10-1.jpeg",
								},
								{
									img: "/fristasset-11-1.jpeg",
								},
							].map(({ img }, index) => (
								<div
									className={`keen-slider__slide  !overflow-visible mx-[auto]`}
								>
									<Image
										key={index}
										loading="lazy"
										className="   h-[27rem] md:h-[35rem] w-[auto] !m-0 !min-w-0 !max-w-[100000rem]  "
										src={img}
										scrollSnapAlign={"center"}
									/>
								</div>
							))}
						</div>

						{loaded &&
							(instanceRefMin.current || instanceRef.current) && (
								<div className="">
									<Icon
										className="absolute top-[50%] left-[-20%] md:left-[-5%] "
										as={FaAngleLeft}
										color="#EEA528"
										w={{ base: "2.5rem", lg: "2.5rem" }}
										h={{ base: "2.5rem", lg: "2.5rem" }}
										onClick={(e: any) => {
											e.stopPropagation() ||
												instanceRef.current?.prev();
											e.stopPropagation() ||
												instanceRefMin.current?.prev();
										}}
									/>
									<Icon
										className=" absolute top-[50%] right-[-20%] md:right-[-5%]  z-[5] "
										as={FaAngleRight}
										color="#EEA528"
										w={{ base: "2.5rem", lg: "2.5rem" }}
										h={{ base: "2.5rem", lg: "2.5rem" }}
										onClick={(e: any) => {
											e.stopPropagation() ||
												instanceRef.current?.next();
											e.stopPropagation() ||
												instanceRefMin.current?.next();
										}}
									/>
								</div>
							)}
					</div>
				</>
				<div className="w-[100vw] flex justify-center items-center mb-[5rem] mt-[2rem]  md:mt-[5rem]">
					<button className=" zoom-in-zoom-out font-[600] text-[2rem] px-[2rem] bg-[#EEA528]  shadow-[#EEA528] rounded-[2rem] shadow-lg ">
						{" "}
						COMECE AGORA{" "}
					</button>
				</div>
			</div>
			<div className=" flex flex-col md:flex-row bg-[#EEA528] justify-center items-center py-[1rem] relative md:px-[25vw] h-[22rem] md:h-[11rem]">
				<div className="h-[3rem] w-[100vw] absolute top-[-1.5rem] bg-[#EEA528] rotate-[1deg]" />
				<img
					src="/fristasset-12-1.png"
					className=" h-[8rem]  mx-[auto] z-[2]"
					alt=""
				/>
				<div className="flex flex-col items-center justify-center">
					<text className="font-[800] text-[4rem]"> +8 MIL </text>
					<text className="text-[1.3rem] mdtext-[1rem]">
						{" "}
						ALUNOS!{" "}
					</text>
				</div>
				{(width ?? 10) > 1100 && (
					<img
						src="/fristasset-12-1.png"
						className=" h-[8rem]  mx-[auto] z-[2] "
						alt=""
					/>
				)}
			</div>
			<div className=" bg-[#121414] pt-[2rem] md:pt-[5rem]">
				<img
					src="/asset-13-1fitasd.png"
					className=" h-[5rem] md:h-[9rem]  mx-[auto] mb-[2rem] md:mb-[3rem]"
					alt=""
				/>
				<div className="text-center mx-[auto] flex flex-col justify-center items-center border-[#EEA528] border-[2px] rounded-t-lg rounded-b-[2rem] w-[85vw] md:w-[40rem] gap-y-[1rem]">
					<text className="text-[white] text-[1.7rem] md:text-[2.1rem] font-[800] mt-[0.7rem] leading-[1.7rem] md:leading-0">
						{" "}
						<span className="text-[#FFAA00]">
							{" "}
							TRÁFEGO PAGO -
						</span>{" "}
						COMPLETO
					</text>
					<text className="text-[white] text-[1rem] text-center px-[1rem] leading-[1.2rem] md:leading-0">
						Especialista no mercado digital, iniciei como afiliado
						através de
						<span className="whitespace-nowrap">
							{" "}
							grupos pelo Facebook.
						</span>
					</text>
					<div className=" bg-[#FFAA00] text-[1.5rem] font-[600] text-[black] rounded-2xl px-[1.2rem] md:px-[1rem] mb-[1.2rem]">
						Valor Imensurável
					</div>
				</div>
			</div>
			<div className="bg-[#121414] pt-[2rem] md:pt-[5rem]  pb-[4rem] md:pb-[5rem]">
				<Box
					color={"transparent"}
					className=" mx-[auto] "
					h="0.3rem"
					w={(width ?? 10) > 1100 ? "50rem" : "90vw"}
					bgGradient="linear(to-l, transparent, yellow.400, transparent)"
				/>
			</div>
			<div className="flex flex-col justify-center items-center text-[#121414] py-[3rem] bg-[#121414]">
				<div className="flex flex-col  items-center justify-center mb-[5rem] ">
					<div
						className="w-[90vw] md:w-[40rem] bg-[white] rounded-2xl flex flex-col  py-[1rem] justify-end items-center mt-[-4rem] shadow-lg pt-[3rem]"
						style={{
							boxShadow: `
							0px -7px 1px #FEA900							`,
						}}
					>
						<div className="bg-[white] px-[1.5rem] py-[0.5rem] rounded-[4rem] mt-[-4.5rem] shadow-xl mb-[3rem]">
							<text className="font-[600] text-[1.5rem] font-sans">
								VAGAS LIMITADAS!
							</text>
						</div>
						<img
							src="/assetfirsti-15-1.png"
							alt=""
							className="w-[auto] h-[3rem] md:h-[4rem]"
						/>
						<div className="w-[100%] bg-[#AFAFAF] text-center my-[2rem] py-[0.5rem] ">
							<text className=" font-[600] text-[1.2rem] md:text-[1.5rem]  ">
								PRIMEIRA VENDA EM 24HRS (COMPLETO) + BÔNUS
								EXCLUSIVO
							</text>
						</div>
						<div className="flex flex-col text-center px-[1rem]">
							<text className=" text-[1.5rem] ">
								NÃO,{" "}
								<span className="font-[600] ">
									{" "}
									NÃO SÃO 12 VEZES{" "}
								</span>{" "}
								DE R$19,00!
							</text>
							<text className="text-[#FFAA00] text-[4rem] md:text-[6rem] font-[600] md:font-[600] font-sans">
								R$ 19,90
							</text>
							<text className=" text-[1.5rem] md:text-[2rem] font-[600]  font-sans ">
								OU 4X DE 5,34!
							</text>
						</div>
						<div className="flex flex-col  text-center pb-[1rem] md:pb-[3rem] gap-y-[0.3rem] ">
							<text className=" text-[1.4rem] px-[2rem] mt-[1rem]">
								Acompanhamento Pessoal Por 1 Ano
							</text>
							<text className=" text-[1.4rem]  px-[2rem] mt-[0.5rem] md:mt-[0rem]">
								Aulas Práticas, Assistiu Aplicou!
							</text>
							<text className=" text-[1.4rem] px-[2rem] mt-[0.5rem] md:mt-[0rem] ">
								Grupo de Networking
							</text>
							<text className=" text-[1.4rem] px-[2rem] mt-[0.5rem] md:mt-[0rem] ">
								Bônus Incríveis
							</text>
							<text className=" text-[1.4rem] px-[2rem] mt-[0.5rem] md:mt-[0rem] ">
								Do Zero Ao Avançado
							</text>
							<text className=" text-[1.4rem] px-[2rem] mt-[0.5rem] md:mt-[0rem] ">
								Em Até 12x No Cartão
							</text>
						</div>
						<button className="leading-[1.5rem] md:leading-0 zoom-in-zoom-out w-[90vw] md:w-[39rem] bg-[#00FF52] h-[6rem] md:h-[5rem] shadow-lg shadow-[green] font-[600] text-[black] text-[2rem] rounded-[1.7rem] mb-[-2rem]">
							GARANTIR {(width ?? 10) < 1100 && <br />} MINHA
							VAGA!
						</button>
					</div>
					<img
						src="/first-asset-16-1.png"
						alt=""
						className="w-[auto] h-[1.8rem] md:h-[3.2rem] mt-[2rem]"
					/>
				</div>
				<div className="w-[90vw] md:w-[40rem] bg-[#1B1D1E] rounded-2xl flex flex-col  md:flex-row px-[1rem] py-[1rem] mb-[2rem] justify-center items-center">
					<img
						src="/fristasset-17.png"
						alt=""
						className="w-[11rem] h-[11rem]"
					/>
					<div className=" flex flex-col justify-between pl-[1rem] text-center ">
						<text className=" text-[1.8rem] text-[white]  ">
							ENTRE SEM RISCOS
						</text>
						<text className=" text-[1.15rem] text-[#C7C3C3] text-left mt-[1rem] mb:mt-[1rem]">
							Fique tranquilo, seu investimento é totalmente
							seguro, possuímos uma garantia incondicional de 7
							dias. Caso veja que o produto não atendeu às suas
							expectativas, você poderá solicitar a devolução de
							todo valor investido.
						</text>
					</div>
				</div>
				<div className="w-[90vw] md:w-[40rem] bg-[#1B1D1E] rounded-2xl flex flex-col  md:flex-row px-[1rem] py-[1rem] justify-center items-center">
					<img
						src="/fristasset-18.png"
						alt=""
						className="w-[11rem] h-[12rem] md:h-[11rem]"
					/>
					<div className=" flex flex-col justify-between pl-[1rem]">
						<text className="text-[1.8rem] md:text-[1.8rem] text-[white] text-center ">
							MELHOR SUPORTE DO MERCADO
						</text>
						<text className=" text-[1.15rem] text-[#C7C3C3] mt-[1rem] mb:mt-[1rem]">
							Além do acompanhamento pessoal, sempre que sentir
							qualquer dificuldade você terá acesso liberado para
							nos enviar uma mensagem. Temos uma equipe
							especializada e pronta para te atender pelo
							WhatsApp!
						</text>
					</div>
				</div>
			</div>

			<Flex
				align={"center"}
				justify={"flex-start"}
				backgroundPosition="center"
				backgroundSize="cover"
				width="100%"
				flexDirection={"column"}
				gap="1rem"
				className="bg-[#EEA528]  pb-[2rem] xl:pb-[5rem]"
			>
				<Text
					className=" text-2xl xl:text-[2rem] text-[black]"
					fontWeight="bold"
					justifySelf={"flex-start"}
					mt="2rem"
				>
					PERGUNTAS FREQUENTES
				</Text>

				<Flex
					w="100vw"
					className="sss px-[0.5rem] xl:px-[2rem] lg:px-[10rem] mt-[0.5rem] xl:mt-[2rem]"
					flexDirection={"column"}
					gap="1rem"
					justify={"space-between"}
				>
					<Accordion
						allowToggle
						className="gap-y-[7rem] lg:gap-y-[2rem] w-[50rem] mx-[auto] max-w-[95vw]"
					>
						{[
							{
								id: 1,
								title: "Quais são as formas de pagamento?",
								subTitle:
									"Você poderá fazer o pagamento através do seu cartão de crédito, boleto ou pix.",
							},
							{
								id: 2,
								title: "Como terei acesso às aulas?",
								subTitle:
									"Após efetuado o pagamento, você receberá no e-mail cadastrado os dados de login para acessar a plataforma e começar a consumir o conteúdo.",
							},
							{
								id: 3,
								title: "Como posso tirar minhas dúvidas?",
								subTitle:
									"Você poderá esclarecer as suas dúvidas através do suporte em um grupo vip e um suporte exclusivo para meninas afiliadas, além das mentorias ao vivo que será um espaço aberto para troca de ideias",
							},
							{
								id: 4,
								title: "Por quanto tempo terei acesso às aulas?",
								subTitle:
									"Você terá acesso vitalício aos conteúdos.",
							},
						].map((item) => (
							<AccordionItem key={item.id} my="1rem">
								<Text className=" text-[1rem] xl:text-[1rem] text-[black]">
									<AccordionButton>
										<Box
											className=" text-[1rem] xl:text-[1.4rem] text-[black] font-[600]"
											flex="1"
											textAlign="left"
										>
											{item.title}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</Text>
								<AccordionPanel pb={4}>
									<Text className=" text-[1rem] xl:text-[1.1rem] text-[black]">
										{item.subTitle}
									</Text>
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</Flex>
			</Flex>
			<Flex
				color={"#121414"}
				p={{ base: "2rem", xl: "4rem" }}
				flexDirection="column"
				justify="space-between"
				alignItems="center"
				bg={"black"}
				minW="100vw"
				gap={"1rem"}
			>
				<text
					fontSize="1rem"
					className=" w-[90vw] md:w-[70vw] text-[#91897E] text-justify md:text-center"
				>
					O Primeira Venda em 24hrs é uma empresa com o objetivo de
					ajudar pessoas a obterem resultados financeiros utilizando o
					poder da internet através de cursos digitais. Não
					reivindicamos ou declaramos que ao usar o método, você
					ganhará dinheiro ou recuperará seu dinheiro. Os depoimentos
					mostrados são negócios e vão variar com base no seu esforço,
					no conhecimento que você adquirir e nas forças do mercado
					que estão além do{" "}
					<span className="whitespace-nowrap">
						{" "}
						controle de qualquer pessoa.
					</span>
				</text>

				<Text fontSize=".8rem" className="text-[#91897E]">
					COPYRIGHT © Primeira Venda em 24hrs 2022
				</Text>
				<div className="flex  text-[#91897E]  w-[20rem] justify-between">
					<div>Política de Privacidade</div>
					<div>Termos de Uso</div>
				</div>
			</Flex>

			<div
				dangerouslySetInnerHTML={{
					__html: `
			<!-- Hotjar Tracking Code for https://fitvida.site/seller/proFitness -->
			<script>
				(function(h,o,t,j,a,r){
					h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					h._hjSettings={hjid:3230202,hjsv:6};
					a=o.getElementsByTagName('head')[0];
					r=o.createElement('script');r.async=1;
					r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					a.appendChild(r);
				})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
			</script>
			`,
				}}
			/>
		</Box>
	);
}

export default FirstSeller;

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabeld = props.disabled ? " arrow--disabled" : "";
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? "arrow--left" : "arrow--right"
			} ${disabeld}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}
