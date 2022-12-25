import { useEffect, useState } from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import React from "react";
import ReactDOM from "react-dom/client";
import StarRatings from "react-star-ratings";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Icon,
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
	useDisclosure,
} from "@chakra-ui/react";
import { FaRegStar, FaRegSun } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GrStatusWarning } from "react-icons/gr";
import { useSearchParams } from "react-router-dom";
import { useWindowDimensions } from "../../projects";
import TimerCircleElement from "../group/components/utils/timerConter";
import ReactPlayer from "react-player";
import { VerticallyCenter } from "../group/components/utils/all";

function ProFitness() {
	const [question, setQuestion] = useState<number>(0);
	useEffect(() => {
		function doSomething() {
			setQuestion(question + 1);
		}
	}, [question]);
	const { height, width } = useWindowDimensions();

	return (
		<Box className="text-[black] bg-transparent max-w-[100vw] overflow-x-hidden w-[100%]">
			<Box
				flexDirection="column"
				minH="100vh"
				alignItems="center"
				className="flex justify-between flex-col min-h-[100vh] relative bg-transparent "
			>
				<div className="relative flex flex-col xl:min-h-[100vh] items-center justify-center md:justify-start  pb-[28rem] md:pb-[5.5rem] bg-[#30302E] ">
					<img
						className={` absolute overflow-x-hidden ${
							(width ?? 10) > 800
								? "top-0 right-[-8rem] xl:right-0 w-[50rem] xl:w-[58rem]  z-[1] "
								: "z-[-0] bottom-[-10rem]  right-[0rem] w-[130vw]  max-w-[10000000000000000rem]  max-h-[110000000000rem]"
						}`}
						loading="lazy"
						src={
							(width ?? 10) > 800
								? "/dasd.png"
								: "/dasdasdasd.png"
						}
						alt=""
					/>
					<Box
						className=" flex flex-col z-[5]  mt-[2rem] justify-between"
						alignItems="center"
						minW="100vw"
					>
						<text className="text-center text-[white] font-[600]   text-[1.4rem] md:text-[2.5rem] mx-[2rem]">
							MÉTODO MAIS EFICAZ PARA EMAGRECER ATÉ 10KG ,
						</text>
						<text className="text-[white] pb-[2rem] text-center font-[600]   text-[1.4rem]  md:text-2xl mt-[1rem] md:mt-[0]">
							100% NATURAL EM{" "}
							<span className="whitespace-nowrap">
								POUCOS PASSOS
							</span>
						</text>
					</Box>
					<div className=" z-[1] flex flex-col justify-center items-center">
						<text className="text-[white] text-center font-[200] xl:font-[600]  text-[1.2rem] xl:text-2xl uppercase pb-[0.5rem] xl:pb-[2rem] ">
							OFERTA COM TEMPO LIMITADO
						</text>
						<text className="text-[white] text-center font-[200] xl:font-[600] text-[1.1rem] xl:text-2xl uppercase  mx-[1rem] xl:pb-[2rem] ">
							Reservamos seu plano{" "}
							<span className="whitespace-nowrap">
								exclusivo até
							</span>
						</text>
						<div className="max-w-[80vw]">
							<TimerCircleElement
								startTimeInSecond={60 * 20}
								secondEnable
								minutesEnable
								hoursEnable
							/>
						</div>
					</div>

					<div className="pt-[2rem] z-[1]">
						<a href="http://mon.net.br/29l77c">
							<button className="font-[600] text-white rounded-[1rem] bg-[#53BC52] w-[80vw] xl:w-[auto] px-[2rem] xl:px-[4rem] py-[1rem] text-lg xl:text-xl">
								QUERO VENCER A LUTA CONTRA A BALANÇA
							</button>
						</a>
					</div>

					<div className="flex gap-x-[0.5rem] justify-center items-center text-center mt-[2rem] z-[1]">
						<StarRatings
							rating={5}
							starRatedColor="yellow"
							numberOfStars={5}
							name="rating"
							starDimension={
								(width ?? 10) > 1100 ? "2rem" : "1.5rem"
							}
							starSpacing="0.01rem"
						/>
						<text className="text-[white] text-center font-[600] text-sm xl:text-lg uppercase ">
							2756 comentários de clientes
						</text>
					</div>
				</div>
				<div className="flex flex-col xl:min-h-[100vh] items-center justify-center w-[100vw] bg-white max-w-[100vw] z-[2] pb-[2rem] xl:pb-0">
					<div className=" flex flex-col xl:flex-row  justify-center items-center xl:items-start gap-x-[4rem]  ">
						<img
							className=" h-[95vw] xl:h-[55rem] xl:ml-[-15rem] mt-[-3rem] md:mt-[-4rem] xl:mt-[-0rem] z-[7]"
							loading="lazy"
							src="/prato-vazio.png"
							alt=""
						/>
						<div className="mx-[2rem] xl:mx-0 xl:w-[40rem] xl:mt-[8rem]">
							<text className=" font-[600] text-lg xl:text-2xl">
								Por que outras pessoas conseguem emagrecer, mas
								eu não consigo?
							</text>

							<text className=" font-[600] text-[1rem]  mt-[2rem]">
								Enquanto uma simples dieta parece ser o
								suficiente para fazer alguns emagrecerem, nenhum
								método de emagrecimento parece funcionar para
								outras pessoas.
								<br />
								<br />
								Elas não conseguem perder peso mesmo depois de
								tentar fazer dieta ou seguir qualquer outro
								método de emagrecimento.
								<br />
								<br />
								Se você também está nessa situação, talvez você
								já tenha feito a seguinte pergunta: "Por que eu
								não consigo emagrecer?"
							</text>
						</div>
					</div>
				</div>
				<div className="flex flex-col xl:min-h-[100vh] items-center justify-center w-[100vw] bg-white max-w-[100vw] ">
					<div className=" flex flex-col justify-center items-center gap-x-[4rem]  ">
						<div className="flex flex-col items-center justify-center">
							<Box
								className="flex justify-center items-center py-[2rem] xl:py-[5rem]"
								w="100vw"
								bgGradient="linear(to-r, white,green.200, green.200, white)"
							>
								<text className=" font-[600] text-center px-[2rem]  text-2xl xl:text-[3rem]">
									Mas essa não é a{" "}
									<span className="whitespace-nowrap">
										{" "}
										pergunta certa.
									</span>
								</text>
							</Box>

							<text className=" font-[600] text-[0.95rem] xl:text-[1.2rem]  mt-[2rem] text-center xl:w-[40rem] px-[2rem] xl:px-0">
								Muitas pessoas querem e tentam emagrecer, mas
								não conseguem eliminar o excesso{" "}
								<span className="whitespace-nowrap">
									{" "}
									de peso.
								</span>
								<br />
								<br />
								Isso acontece por um motivo. Elas não conseguem
								perder peso de forma definitiva porque elas não
								<span className="whitespace-nowrap">
									{" "}
									podem emagrecer.
								</span>
								<br />
							</text>
						</div>
						<img
							className=" w-[80vw] md:w-[auto] xl:h-[10rem] my-[2rem] px-[3rem] mt-[3rem] xl:mt-[5rem]"
							loading="lazy"
							src={
								(width ?? 10) > 800
									? "/barrars.png"
									: "/2022-10-31_09-09.png"
							}
							alt=""
						/>
						<text className=" font-[600] text-center pt-[1rem] md:pt-[0rem] pb-[2rem] md:pb-[4rem] text-xl  xl:text-[2rem]">
							A pergunta correta é outra:
							<br />
							"Por que eu não posso emagrecer?"
						</text>
					</div>
				</div>
				<div
					className={`
				flex flex-col xl:in-h-[100vh] items-center justify-center w-[100vw] bg-[#2C2C2A] max-w-[100vw]  relative z-[1]
				pt-[15rem] xl:pt-[0rem]
				`}
				>
					<img
						className="w-[120vw] xl:w-[80vw] max-w-[10000000rem] absolute right-0 top-0 z-[-2]"
						loading="lazy"
						src={
							(width ?? 10) > 1100
								? "/dfgdfgdf.png"
								: "/dfgdfgdf.png"
						}
						alt=""
					/>
					<div className=" flex flex-col justify-center items-center gap-x-[4rem]  relative w-[100%]">
						<div className="xl:w-[40rem] mr-[auto] ml-[1.5rem] md:ml-[3rem] xl:ml-[7rem] ">
							<text className=" font-[600] text-[white] xl:mt-[5rem] text-xl xl:text-[2rem] xl:leading-[2.5rem]">
								Você não pode emagrecer porque o peso é seu
								aliado na guerra da sobrevivência.
							</text>

							<text className=" font-[600] text-[1.01rem]  mt-[2rem] text-[white]">
								"Mas como assim? Como o peso pode ser um
								aliado?"
								<br />
								<br />
								É isso mesmo...
								<br />
								Ao contrário do que você pensa, o excesso de
								peso não é seu inimigo.
								<br />
								Na verdade, ele pode estar sendo seu aliado para
								te ajudar a enfrentar seus conflitos e a lidar
								com seus problemas.
								<br />
								<br />
								O sobrepeso não surge só por causa da relação
								entre corpo e comida.
								<br />
								Ele pode estar relacionado aos seus sentimentos
								e às suas emoções.
								<br />
								O excesso de peso está ali para atender às suas
								necessidades emocionais.
								<br />
								Nesse caso, não adianta fazer a dieta da moda
								que alguma influencer recomendou no Instagram.
								<br />
								<br />
								O sobrepeso está cumprindo uma função emocional
								na sua vida.
								<br />
							</text>
						</div>
					</div>
				</div>

				<div className="flex flex-col min-h-[100vh] items-center justify-center w-[100vw] pb-[4rem] pt-[2rem]  bg-[#2C2C2A] ">
					<Box
						bgGradient="linear(white 70%, #FCF9ED 90%)"
						className=" flex flex-col  justify-center items-center gap-x-[4rem] w-[90vw] xl:w-[40rem]  bg-[white] z-[2] gap-y-[1rem] rounded-lg z-2"
					>
						<text className=" font-[600] text-[1.2rem]   text-center mx-[3rem] mt-[3rem]">
							Você não consegue perder o excesso de peso porque
							ele pode cumprir 3 funções na sua vida:
						</text>
						<div className="flex flex-col md:flex-row gap-5 items-center justify-center xl:justify-around w-[100%] mx-[3rem] py-[1rem] ">
							<text className=" font-[800] text-2xl xl:text-[1.5rem] text-green-700">
								PROTEÇÃO
							</text>
							<text className=" font-[800] text-2xl xl:text-[1.5rem] text-green-700">
								DESTAQUE
							</text>
							<text className=" font-[800] text-2xl xl:text-[1.5rem] text-green-700">
								FORÇA
							</text>
						</div>
						<text className=" font-[200] text-[1.01rem] text-center mx-[1rem] xl:mx-[3rem]">
							Ali no seu inconsciente, você precisa desses quilos
							a mais para se sentir protegida, vista ou forte.
						</text>
						<text className=" font-[200] text-center mx-[1rem] xl:mx-[3rem]">
							Você quer perder esse peso, mas no fundo você não
							pode.
						</text>
						<text className=" font-[800]  text-center mx-[1rem] xl:mx-[3rem]">
							Você precisa dele para sobreviver.
						</text>
						<text className=" font-[200]  text-center mx-[1rem] xl:mx-[3rem]">
							Imagina só o que vai acontecer se esses quilos
							desaparecerem.
						</text>
						<text className=" font-[200]  text-center mx-[1rem] xl:mx-[3rem]">
							Você pode se sentir desprotegida, ignorada ou fraca
							para enfrentar seus conflitos e problemas.
						</text>
						<text className=" font-[200]  text-center mx-[3rem]">
							Não pode porque você precisa dele pra sobreviver.
						</text>
						<text className=" font-[200]  text-center mx-[3rem]">
							E eu sei que isso pode tá parecendo um pouco louco
							pra você, mas é exatamente pelas pessoas não olharem
							pra causa real do problema que a estatística abaixo
							só cresce ano após ano.
						</text>
						<img
							className=" w-[95%] xl:w-[auto] xl:h-[55rem] pv-[3rem] xl:py-[4rem]"
							loading="lazy"
							src="/newObesidade.png"
							alt=""
						/>

						<text className=" font-[600] text-center mx-[3rem] ">
							"Então é por isso que as dietas não funcionaram?"
						</text>
						<text className=" font-[600] text-center mx-[3rem] ">
							É isso mesmo.
						</text>
						<text className=" font-[600] text-center mx-[3rem] ">
							Se o peso é seu aliado e cumpre uma função na sua
							vida, não adianta recorrer às dietas ou a outros
							métodos tradicionais de emagrecimento.
						</text>

						<div className="flex flex-col md:flex-row gap-5 items-center justify-center xl:justify-around w-[100%] mx-[3rem] py-[1rem] ">
							<text className=" font-[800] text-2xl xl:text-[1.5rem] text-[red] line-through">
								DIETAS
							</text>
							<text className=" font-[800] text-2xl xl:text-[1.5rem] text-[red] line-through">
								REMÉDIOS
							</text>
							<text className=" font-[800] text-2xl xl:text-[1.5rem] text-[red] line-through">
								CIRURGIAS
							</text>
						</div>

						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							Esses métodos de emagrecimento não atendem às
							necessidades emocionais.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							“Não gosta do seu corpo? Corte e costure um novo.”
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							Mas sabe os motivos que te levaram a engordar?
							Então…eles não cortam isso durante a cirurgia.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							Todos esses métodos podem até levar alguns quilos
							embora. Mas esses quilos acabam voltando porque eles
							são seus aliados na sua luta pela sobrevivência.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							É por isso que você não pode continuar lutando essa
							mesma guerra.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							Se você continuar lutando a guerra errada, você não
							vai emagrecer.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							O problema não é o que está dentro do prato de
							comida, mas tudo aquilo que está ao seu redor.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem] ">
							Para emagrecer, é preciso ajustar seu cardápio
							emocional para lidar com os ambientes em que você
							vive e com as relações que você tem no seu dia a
							dia.
						</text>
						<text className=" font-[600] text-center mx-[1rem] xl:mx-[3rem]  mb-[4rem] ">
							"Mas como é possível fazer isso?"
						</text>
					</Box>
				</div>
				<div className="flex flex-col xl:min-h-[100vh] items-center justify-center w-[100vw] bg-white max-w-[100vw] gap-[2rem] ">
					<Box
						bgGradient="linear(to-r, white,green.200, green.200, white)"
						className=" flex  justify-center items-center gap-x-[4rem] w-[100vw] py-[1.5rem] xl:py-[2.5rem]"
					>
						<text className=" font-[600] text-[0.95rem] md:text-[1.2rem] xl:text-[1.5rem] text-center mx-[3rem] xl:mx-0 md:w-[30rem] xl:w-[70vw] ">
							Veja só como elas conseguiram atender às suas
							necessidades emocionais e eliminar o excesso de peso
							depois de fazerem o acompanhamento no nosso grupo
							privado.
						</text>
					</Box>
					<div className="grid grid-cols-2 md:flex  gap-[2rem] justify-center items-center">
						<img
							className="h-[16rem] md:h-[22rem] xl:h-[25rem] "
							loading="lazy"
							src="/karina-whatsapp.jpeg"
							alt=""
						/>
						<img
							className="h-[16rem] md:h-[22rem] xl:h-[25rem] "
							loading="lazy"
							src="/1607c051-whatsapp-image-2020-05-27-at-08-25-33_107m0dj07m0by00000m01o.jpeg"
							alt=""
						/>
						<img
							className="h-[16rem] md:h-[22rem] xl:h-[25rem] "
							loading="lazy"
							src="/1_nlMVSEtyrjpVTIU1hA2Q_Q.jpeg"
							alt=""
						/>
						<img
							className="h-[16rem] md:h-[22rem] xl:h-[25rem] "
							loading="lazy"
							src="/images.jpg"
							alt=""
						/>
					</div>
					<div className="pt-[2rem] mb-[2rem]">
						<a href="http://mon.net.br/29l77c">
							<button className="font-[600] text-white rounded-[1rem] bg-[#53BC52] w-[80vw] xl:w-[auto] px-[2rem] xl:px-[4rem] py-[1rem] text-lg xl:text-xl">
								QUERO VENCER A LUTA CONTRA A BALANÇA
							</button>
						</a>
					</div>
				</div>

				<div className="flex flex-col xl:min-h-[100vh] items-center justify-center w-[100vw] bg-white max-w-[100vw] ">
					<div className=" flex  justify-center items-center gap-x-[4rem] py-[1rem] xl:py-[2rem]">
						<text className=" font-[600] text-xl xl:text-[2.3rem] w-[70vw] text-center leading-[3rem]">
							COM O NOSSO MÉTODO, VOCÊ NÃO VAI MAIS LUTAR A GUERRA
							ERRADA.
						</text>
					</div>
					<img
						className=" w-[80vw] md:w-[auto] xl:h-[10rem] my-[2rem] px-[3rem]"
						loading="lazy"
						src={
							(width ?? 10) > 800
								? "/2022-10-31_09-06.png"
								: "/barrarsVertical.png"
						}
						alt=""
					/>
					<ul className=" gap-[3rem] py-[1rem] xl:py-[2rem] text-lg xl:text-[1.5rem] ml-[1.5rem] xl:ml-0 mr-[1rem] xl:mr-[7rem]">
						<li>
							<Icon as={MdCheckCircle} color="green.500" />
							Perda de peso rápido e sustentável a longo prazo
						</li>
						<li>
							<Icon as={MdCheckCircle} color="green.500" />
							Redução da inflamação e melhora da saúde intestinal
						</li>
						<li>
							<Icon as={MdCheckCircle} color="green.500" />
							Melhor clareza mental, fazendo você se sentir mais
							nítido,focado e mais alerta
						</li>
						{/* You can also use custom icons from react-icons */}
						<li>
							<Icon as={MdCheckCircle} color="green.500" />
							Melhora no sono e nos tempos de recuperação
						</li>
						<li>
							<Icon as={MdSettings} color="green.500" />
							Aumento de energia e humor durante todo o dia
						</li>
					</ul>
					<div className="flex flex-col justify-center items-center mx-[1rem] xl:mx-0  px-[0.5rem] xl:px-[3rem] bg-[#37B48B] py-[2rem] rounded-xl mb-[2rem]">
						<text className="font-[700] xl:font-[600] text-center text-[1.8rem] xl:text-[2rem]">
							<span className=" font-[600]  text-lg xl:text-[1.5rem]">
								{" "}
								FAÇA O NOSSO MÉTODO COM{" "}
							</span>
							<br /> R$100 DE DESCONTO
						</text>
						<text className="mt-[2rem] xl:mt-0 font-[700] xl:font-[600] text-center text-[white] text-[1.5rem] xl:text-[2rem]">
							DE{" "}
							<span className="font-[400] xl:font-[400] line-through">
								{" "}
								R$ 197,00
							</span>{" "}
							POR
							<br />
							12x{" "}
							<span className=" text-[3rem] xl:text-[5rem]">
								R$ 9,74
							</span>
							<br />
							ou R$97 à vista
						</text>
						<div className="pt-[2rem]">
							<a href="http://mon.net.br/29l77c">
								<button className="text-white rounded-[1rem] bg-[#53BC52] shadow-[rgba(87,83,78,0.5)] shadow-xl px-[1rem] xl:px-[4rem] py-[1rem] text-xl mx-[1rem] xl:mx-0">
									QUERO VENCER A LUTA CONTRA A BALANÇA
								</button>
							</a>
						</div>
						<text className=" font-[600] text-center text-[1.2rem] mt-[0.5rem]">
							VAGAS LIMITADAS!
						</text>
					</div>
				</div>
				<div className=" bg-[white] w-[100vw] xl:w-[100vw]  grid grid-cols-2 md:flex flex-row justify-around items-center py-[1rem] xl:py-[4rem] gap-[2rem] xl:gap-0 ">
					{[
						{
							title: "Garantia de 7 dias",
							img: FaRegSun,
						},
						{
							title: "Pagamento 100% seguro",
							img: BsShieldFillCheck,
						},
						{
							title: "Suporte especializado",
							img: BiSupport,
						},
						{
							title: "Resultados comprovados",
							img: FaRegStar,
						},
					].map((item, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-3"
						>
							<Icon
								color={"#37B48B"}
								as={item.img}
								w={(width ?? 10) > 1100 ? "3rem" : "3rem"}
								h={(width ?? 10) > 1100 ? "3rem" : "3rem"}
							/>
							<text className=" font-[600] text-lg xl:text-[1rem] text-center">
								{item.title}
							</text>
						</div>
					))}
				</div>
				<Box
					bgGradient="linear(to-r, white,green.200, green.200, white)"
					className=" bg-[white] w-[100vw] flex flex-col justify-center items-center py-[2rem]"
				>
					<Icon as={GrStatusWarning} w={"5rem"} h={"5rem"} />
					<text className=" font-[600] text-[1.5rem]">AVISO!</text>
					<text className=" font-[600] text-[1.1rem] text-center mx-[2rem]">
						Não perca esta oportunidade. As vagas são limitadas pois
						as análises são individuais.
					</text>
				</Box>
				<div className=" bg-[white] w-[100vw] flex flex-col justify-center items-center">
					<text className=" font-[600] text-lg xl:text-[1.7rem] py-[2rem] mx-[2rem] text-center">
						ATENÇÃO! COMPRE HOJE E GANHE ESSES BÔNUS EXCLUSIVOS:
					</text>
					<div className="flex flex-col xl:flex-row justify-around w-[100%] px-[0.5rem] xl:px-[5rem] pb-[1rem] xl:pb-[4rem]">
						<div className="flex flex-row xl:flex-col justify-center items-center xl:w-[20rem]">
							<img
								className=" mx-[-1rem] xl:mx- w-[50vw] xl:w-[auto] xl:h-[20rem] "
								loading="lazy"
								src="/20220128_194529_0000.png"
								alt=""
							/>
							<div>
								<text className=" font-[600] text-center text-[1.1rem]">
									800 Receitas Fit e Low Carb
								</text>
								<text className=" font-[400] xl:font-[600] text-center text-xs xl:text-[0.8rem]">
									Opções completas para sua alimentação do dia
									para você diversificar o seu cardápio e
									ainda assim perder peso rápido.
								</text>
							</div>
						</div>

						<div className="flex flex-row xl:flex-col justify-center items-center xl:w-[20rem]">
							<img
								className="mx-[-1rem] xl:mx- w-[50vw] xl:w-[auto] xl:h-[20rem]  "
								loading="lazy"
								src="/20220128_194451_0000.png"
								alt=""
							/>
							<div>
								<text className=" font-[600] text-center text-[1.1rem]">
									BumBum dos Sonhos <br />
								</text>
								<text className=" font-[400] xl:font-[600] text-center text-xs xl:text-[0.8rem]">
									Um guia definitivo para você aumentar o seu
									bumbum no conforto da sua casa, com dicas de
									alimentação, exercícios, suplementos e muito
									mais
								</text>
							</div>
						</div>
						<div className="flex flex-row xl:flex-col justify-center items-center xl:w-[20rem] md:ml-[-9rem] xl:ml-0">
							<img
								className="mx-[-1rem] xl:mx-0 w-[50vw] xl:w-[auto] xl:h-[20rem]  "
								loading="lazy"
								src="/20220128_194627_0000.png"
								alt=""
							/>
							<div>
								<text className=" font-[600] text-center text-[1.1rem]">
									Celulite Zero em 28Dias <br />
								</text>
								<text className=" font-[400] xl:font-[600] text-center text-xs xl:text-[0.8rem]">
									Um guia de 28 dias Completos para acabar com
									as celulites definitivamente
								</text>
							</div>
						</div>
						<div className="flex flex-row xl:flex-col justify-center items-center xl:w-[20rem]">
							<img
								className="mx-[-1rem] xl:mx- w-[50vw] xl:w-[auto] xl:h-[20rem]  "
								loading="lazy"
								src="/1366_2000.png"
								alt=""
							/>
							<div>
								<text className=" font-[600] text-center text-[1.1rem]">
									Suporte E Motivação No Grupo Vip <br />
								</text>
								<text className=" font-[400] xl:font-[600] text-center text-xs xl:text-[0.8rem]">
									Suporte E Motivação No Grupo Vip Toda a
									ajuda e motivação que você precisa para se
									manter focada no{" "}
									<span className="whitespace-nowrap">
										{" "}
										seu objetivo.
									</span>
								</text>
							</div>
						</div>
					</div>
					<div className="flex flex-col xl:flex-row justify-center items-center pb-[2rem] xl:pb-0">
						<img
							className="h-[25rem]  "
							loading="lazy"
							src="/MOCKUP-IPHONE-E-TABLET-1-1024x1024.png"
							alt=""
						/>
						<div className="flex flex-col  xl:h-[100%] gap-5 xl:mt-[-7rem]">
							<text className=" font-[600] text-center  text-2xl xl:text-[1.7rem]   ">
								Suporte E Motivação No{" "}
								<span className="whitespace-nowrap">
									Grupo Vip <br />
								</span>
							</text>
							<text className=" font-[600] text-center   text-[1.1rem]  xl:w-[35rem] mx-[2rem]">
								Suporte E Motivação No Grupo Vip Toda a ajuda e
								motivação que você precisa para se manter focada
								no seu objetivo.
							</text>
						</div>
					</div>
				</div>
				<div className="  w-[100vw] flex flex-col justify-center items-center gap-[2rem] bg-[#37B48B] pt-[2rem] pb-[3rem] ">
					<text className=" font-[600]  text-xl xl:text-[2rem] text-center">
						ACESSO A UM PROFISSIONAL QUALIFICADO
					</text>
					<div className="flex flex-col xl:flex-row gap-4 xl:gap-[2rem] max-w-[100vw] justify-center items-center xl:items-start xl:mt-[2rem]">
						<ReactPlayer
							width={(width ?? 10) > 1100 ? "42rem" : "80vw"}
							height={(width ?? 10) > 1100 ? "20rem" : "40vw"}
							url="https://youtu.be/QNhGlw2ukYA"
						/>
						<div className="ml-[1rem] xl:ml-0 xl:w-[25rem]">
							<text className=" font-[600] text-lg xl:text-[1.5rem] ">
								Tenha um Acompanhamento Profissional no Nosso
								Grupo Vip
							</text>
							<text className=" font-[400] text-sm xl:text-[1.05rem] mt-[1.5rem] mr-[1rem] xl:mr-0">
								No nosso grupo do VIP do facebook você terá
								acesso ao suporte de uma nutrcionista, tendo
								acesso a lives exclusivas desafios dinâmicos
								<br />
								<br />
								Além de encontrar o caminho para eliminar o
								excesso de peso, você também pode ter uma vida
								mais leve nos seus relacionamentos e na sua
								carreira.
							</text>
						</div>
					</div>

					<div className="pt-[2rem flex flex-col items-center gap-2">
						<text
							className=" font-[600] text-[0.8rem] mx-[2rem] xl:mx-0 text-center"
							fontSize="0.8rem"
						>
							ACESSO VITALÍCIO POR! PAGUE À VISTA OU PARCELE NO
							CARTÃO EM ATÉ 12X.
						</text>
						<a href="http://mon.net.br/29l77c">
							<button className="font-[600] text-white rounded-[1rem] bg-[#53BC52] px-[2rem] xl:px-[4rem] py-[1rem] text-xl  w-[80vw] xl:w-[auto]   shadow-stone-600 shadow-xl">
								QUERO VENCER A LUTA CONTRA A BALANÇA
							</button>
						</a>
					</div>
				</div>
				<div className="flex flex-col py-[5rem] items-center justify-center w-[100vw] bg-white">
					<div className=" flex flex-col-reverse xl:flex-row justify-center items-center gap-x-[4rem] ">
						<div className="w-[auto] xl:w-[40rem] text-center xl:text-left mx-[2rem] xl:mx-0">
							<text className=" font-[800] xl:font-[600] text-2xl xl:text-xl xl:text-[2rem] ">
								EXPERIMENTE POR{" "}
								<span className="whitespace-nowrap">
									{" "}
									7 DIAS
								</span>
							</text>
							<text className="font-[600] text-2xl  mt-[2rem]">
								Nosso método possui uma garantia total de 7
								dias.
							</text>
							<text className=" font-[600] text-sm mt-[1rem] xl:mt-0  ">
								Eu sei que mesmo depois do que te mostramos
								aqui, você pode ainda estar insegura. Mas nós
								vamos facilitar a{" "}
								<span className="whitespace-nowrap">
									sua vida.
								</span>
								<br /> <br />
								Vamos deixar você experimentar o Emagrecimento
								Imediato Por 7 Dias para você ver o resultado
								que vai ter nesse período. <br /> <br />
								Se por qualquer razão você não gostar ou se
								adaptar, nos envie um e-mail dentro desse
								período que simplesmente devolvemos 100% do
								valor que você pagou. Você não corre nenhum um
								risco em testar. <br /> <br /> Mentira! Na
								verdade, corre sim. O risco de daqui a 30 dias,
								finalmente conseguir alcançar o
								<span className="whitespace-nowrap">
									{" "}
									seu objetivo.
								</span>{" "}
								<br /> Porque uma coisa é certa, se você não
								fizer nada, seu corpo vai continuar da mesma
								forma, é isso mesmo que você quer.
							</text>
						</div>
						<img
							className="w-[auto] xl:h-[25rem]"
							loading="lazy"
							src="/sevenDay.png"
							alt=""
						/>
					</div>
				</div>
				<Box
					backgroundPosition="center"
					backgroundSize="cover"
					width="100%"
					flexDirection={"column"}
					gap="1rem"
					className="flex items-center justify-start bg-[#3EBC78] xl:min-h-[80vh] pb-[2rem]"
				>
					<text className="mt-[2rem] font-[800] justify-start text-2xl text-white xl:text-2xl">
						PERGUNTAS FREQUENTES
					</text>

					<Box
						w="100vw"
						h="100%"
						className="flex justify-between px-[0.5rem] xl:px-[2rem] lg:px-[10rem] mt-[0.5rem] xl:mt-[2rem]"
						flexDirection={"column"}
						gap="1rem"
					>
						<Accordion
							allowToggle
							className="gap-y-[7rem] lg:gap-y-[2rem] w-[50rem] mx-[auto] max-w-[95vw]"
						>
							{[
								{
									id: 1,
									title: "Meu dia é corrido e não tenho muito tempo. O programa vai me ajudar?",
									subTitle:
										"Sim. Temos várias clientes que também trabalham o dia inteiro e ainda sim conseguem ter resultados excelentes.",
								},
								{
									id: 2,
									title: "Tenho que pagar todos os meses para continuar participando?",
									subTitle:
										"Não. Você faz apenas um único pagamento e poderá participar pelo tempo que quiser sem cobranças adicionais.",
								},
								{
									id: 3,
									title: "Em quanto tempo eu posso começar a ver resultados?",
									subTitle:
										"Os resultados vem logo nas primeiras semanas se você seguir o nosso passo a passo. Você vai perceber que suas roupas vão começar a ficar mais folgadas e você vai desinchar muito.",
								},
								{
									id: 4,
									title: "Quais os maiores benefícios que o programa irá me proporcionar?",
									subTitle:
										"Mais qualidade de vida, mais disposição, grande melhora na pele, intestino regulado e perca de peso de forma saudável.",
								},
								{
									id: 5,
									title: "Eu ninca fiz uma alteração alimentar ante, será que eu consigo?",
									subTitle:
										"Definitivamente esse é o programa mais indicado para você, pois ele é a forma mais simplificada para ter resultados com saúde. Você vai amar participar e seguir o nosso programa",
								},
							].map((item, index) => (
								<AccordionItem key={item.id} my="1rem">
									<text className=" text-[1rem] xl:text-[1rem] text-white">
										<AccordionButton>
											<Box
												className=" text-[1rem] xl:text-[1rem] text-white"
												flex="1"
												textAlign="left"
											>
												<text>{item.title}</text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</text>
									<AccordionPanel pb={4}>
										<text className=" text-[1rem] xl:text-[1rem] text-white">
											{item.subTitle}
										</text>
									</AccordionPanel>
								</AccordionItem>
							))}
						</Accordion>
					</Box>

					<div className="pt-[0.5rem] xl:pt-[2rem]">
						<a href="http://mon.net.br/29l77c">
							<button className="text-white rounded-[1rem]  w-[80vw] xl:w-[auto] bg-[#FF0000]  font-[600]  px-[2rem] xlpx-[4rem] py-[1rem] text-xl">
								QUERO ELIMINAR O EXCESSO DE PESO
							</button>
						</a>
					</div>
				</Box>
				<Box
					p={{ base: "2rem", xl: "4rem" }}
					flexDirection="column"
					className="flex justify-between"
					alignItems="center"
					bg={"black"}
					minW="100vw"
					gap={"1rem"}
				>
					<text className="text-[white]  text-[0.8rem]">
						® 2022 Copyright | TODOS OS DIREITOS RESERVADOS
					</text>
					<text className="flex text-[white] text-[0.8rem] pb-[2rem] gap-[1rem]">
						<VerticallyCenter
							press={`
							A equipe da Vida Fit criou essa Termo de uso a fim de demonstrar o nosso firme comprometimento sobre como você pode utilizar todas as informações deste Site.

 
							<br/> <br/>
							Termos de Uso
							 
							<br/>
							Este site trata-se de um serviço interativo oferecido em por meio de página eletrônica na internet que oferece informações sobre saúde e alimentação a partir da integração de diversas fontes de informações confiáveis e que estão alinhadas a opinião pessoal do autor.
							<br/>
							O acesso a este site representa a aceitação expressa e irrestrita dos termos de uso abaixo descritos. Se você não concorda com os termos, por favor, não acesse nem utilize este website.
							<br/>
							O visitante poderá usar este site apenas para finalidades lícitas. Este espaço não poderá ser utilizado para para publicar, enviar, distribuir ou divulgar conteúdos ou informação de caráter difamatório, obsceno ou ilícito, inclusive informações de propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem a expressa autorização do detentor desses direitos. Ainda, o visitante não poderá usar este site para obter ou divulgar informações pessoais, inclusive endereços na Internet, sobre os usuários do site.
							<br/>
							A equipe deste site empenha-se em manter a qualidade, atualidade e autenticidade das informações do site, mas seus criadores e colaboradores não se responsabilizam por eventuais falhas nos serviços ou inexatidão das informações oferecidas.
							<br/>
							O usuário não deve ter como pressuposto que tais serviços e informações são isentos de erros ou serão adequados aos seus objetivos particulares. Os criadores e colaboradores tampouco assumem o compromisso de atualizar as informações, e reservam-se o direito de alterar as condições de uso ou preços dos serviços e produtos oferecidos no site a qualquer momento.
							<br/>
							O acesso a este site é gratuito. Este site poderá criar áreas de acesso exclusivo aos seus clientes ou para terceiros especialmente autorizados.
							<br/>
							Os criadores e colaboradores deste site poderão a seu exclusivo critério e em qualquer tempo, modificar ou desativar o site, bem como limitar, cancelar ou suspender seu uso ou o acesso. Também estes Termos de Uso poderão ser alterados a qualquer tempo. Visite regularmente esta página e consulte os Termos então vigentes. Algumas disposições destes Termos podem ser substituídas por termos ou avisos legais expressos localizados em determinadas páginas deste site.
							
							 
							<br/> <br/>
							Informações enviadas pelos usuários e colaboradores
							 
							<br/>
							Qualquer material, informação, artigos ou outras comunicações que forem transmitidas, enviadas ou publicadas neste site serão considerados informação não confidencial, e qualquer violação aos direitos dos seus criadores não será de responsabilidade da equipe deste site. É terminantemente proibido transmitir, trocar ou publicar, através deste website, qualquer material de cunho obsceno, difamatório ou ilegal, bem como textos ou criações de terceiros sem a autorização do autor. A equipe deste site reserva-se o direito de restringir o acesso às informações enviadas por terceiros aos seus usuários.
							<br/>
							Este site poderá, mas não é obrigado, a monitorar, revistar e restringir o acesso a qualquer área no site onde usuários transmitem e trocam informações entre si, incluindo, mas não limitado a, salas de chat, centro de mensagens ou outros fóruns de debates, podendo retirar do ar ou retirar o acesso a qualquer destas informações ou comunicações. Porém, a equipe deste site não é responsável pelo conteúdo de qualquer uma das informações trocadas entre os usuários, sejam elas lícitas ou ilícitas.
							
							 
							<br/> <br/>
							Limitação da Responsabilidade
							 
							<br/>
							Os materiais são fornecidos neste website sem nenhuma garantia explícita ou implícita de comercialização ou adequação a qualquer objetivo específico. Em nenhum caso este site ou os seus colaboradores serão responsabilizados por quaisquer danos, incluindo lucros cessantes, interrupção de negócio, ou perda de informação que resultem do uso ou da incapacidade de usar os materiais. A equipe deste site não garante a precisão ou integridade das informações, textos, gráficos, links e outros itens dos materiais.
							<br/>
							A equipe deste site não é responsável pela violação de direitos autorais decorrente de informações, documentos e materiais publicados neste website, comprometendo-se a retirá-los do ar assim que notificado da infração.
							
							 
							<br/> <br/>
							Erros e falhas
							 
							<br/>
							Os documentos, informações, imagens e gráficos publicados neste site podem conter imprecisões técnicas ou erros tipográficos. Em nenhuma hipótese a equipe deste site e/ou seus respectivos fornecedores serão responsáveis por qualquer dano direto ou indireto decorrente da impossibilidade de uso, perda de dados ou lucros, resultante do acesso e desempenho do site, dos serviços oferecidos ou de informações disponíveis neste site. O acesso aos serviços, materiais, informações e facilidades contidas neste website não garante a sua qualidade.
							
							 
							<br/>
							Links para sites de terceiros
							 
							<br/>
							Os sites apontados não estão sob o controle deste site que não é responsável pelo conteúdo de qualquer outro website indicado ou acessado por meio deste site reserva-se o direito de eliminar qualquer link ou direcionamento a outros sites ou serviços a qualquer momento. Este site não endossa firmas ou produtos indicados, acessados ou divulgados através deste website, tampouco pelos anúncios aqui publicados, reservando-se o direito de publicar este alerta em suas páginas eletrônicas sempre que considerar necessário.
							
							 
							<br/>
							Direitos autorais e propriedade intelectual
							 
							<br/>
							Os documentos, conteúdos e criações contidos neste website pertencem aos seus criadores e colaboradores. A autoria dos conteúdo, material e imagens exibidos no diabetescontrolada.com.br é protegida por leis nacionais e internacionais. Não podem ser copiados, reproduzidos, modificados, publicados, atualizados, postados, transmitidos ou distribuídos de qualquer maneira sem autorização prévia e por escrito do proprietários desse site.
							<br/>
							As imagens contidas neste website são aqui incorporadas apenas para fins de visualização, e, salvo autorização expressa por escrito, não podem ser gravadas ou baixadas via download. A reprodução ou armazenamento de materiais recuperados a partir deste serviço sujeitará os infratores às penas da lei.
							<br/>
							O nome deste site, seu logotipo, o nome de domínio para acesso na Internet, bem como todos os elementos característicos da tecnologia desenvolvida e aqui apresentada, sob a forma da articulação de bases de dados, constituem marcas registradas e propriedades intelectuais privadas e todos os direitos decorrentes de seu registro são assegurados por lei. Alguns direitos de uso podem ser cedidos pelo proprietários do site, em contrato ou licença especial, que pode ser cancelada a qualquer momento se não cumpridos os seus termos.
							<br/>
							As marcas registradas deste site só podem ser usadas publicamente com autorização expressa. O uso destas marcas registradas em publicidade e promoção de produtos deve ser adequadamente informado.
							
							<br/>
							
							Reclamações sobre violação de direitos autorais
							 
							<br/>
							A equipe deste site respeita a propriedade intelectual de outras pessoas ou empresas e solicitamos aos nossos membros que façam o mesmo. Toda e qualquer violação de direitos autorais deverá ser notificada ao contato@VidaFit .com.br e acompanhada dos documentos e informações que confirmam a autoria.
						`}
							title={"Termos de Uso"}
						/>
						<VerticallyCenter
							press={`
								Seu perfil pessoal
								 Quando pedimos informações sobre você, o nosso principal interesse é oferecer serviços mais personalizados. Nós respeitamos a sua privacidade e não a vendemos, nem alugamos, tampouco compartilhamos seu nome e informações pessoais com outras organizações.

								Ao fornecer suas informações pessoais e foto, você compreende e consente à equipe deste site o uso da sua imagem, foto, vídeo e comentários. Essas informações estão disponíveis em seu perfil público e em nossa comunidade, onde você também verá as dos outros membros. Você tem a opção de negar o uso das suas informações ao atualizar suas escolhas em “Privacidade” – “Configurações de Conta”. De tempos em tempos, nós poderemos usar algumas informações de clientes em nossos materiais de marketing. Todavia, nunca faremos isso sem antes entrar em contato com você e receber um consentimento por escrito.
								Medidas de segurança
								A segurança de seus dados pessoais é importante para nós. Seguimos os padrões aceitos no ramo para proteger as suas informações pessoais que nos são enviadas tanto durante a transmissão de dados quanto após o recebimento deles. Quando você digita informações sigilosas (como seu cartão de crédito) em nossos formulários, elas são criptografadas para a transmissão, usando a tecnologia SSL (camada de sockets protegida).
								Se você descobrir uma cobrança fraudulenta em sua fatura, feita em nome da equipe deste site, por favor, contate-nos e reporte o caso imediatamente para a administradora do cartão de acordo com os procedimentos padrões deles. O site faz uso de fóruns, murais e salas de bate-papo. Por favor, lembre-se de que qualquer informação que você expuser por esses meios se torna pública. Sempre tenha cautela com as informações pessoais que você fornece a qualquer pessoa nesses contextos.

								Também insistimos na verificação da senha ao fazer login, para que você e seus dados estejam protegidos contra acessos sem autorização. Se você parar de usar o computador por muito tempo sem encerrar a sua sessão na escola, ela será encerrada automaticamente após certo tempo.

								Apenas funcionários que precisem da informação para realizar certas tarefas (como cobrança ou atendimento ao aluno, por exemplo) têm acesso a informações pessoais. Os servidores nos quais armazenamos suas informações são mantidos em ambiente seguro.

								Apesar das práticas e procedimentos de segurança, como acontece com toda e qualquer rede de computadores na internet, a equipe deste site não pode garantir a segurança de seus dados pessoais ou de quaisquer outros dados passados pela internet e, portanto, não poderá ser responsabilizada por falhas de segurança.

								Nenhum método de transmissão de dados ou armazenamento eletrônico na internet é 100% seguro. Deste modo, não podemos garantir a segurança total de seus dados.

								
								Comunicados do site
								

								Para enviar a você as lições diárias (E-mail), precisamos de seu endereço de e-mail. Como assinante delas, você será adicionado em nossa lista para envio de e-mails eventuais com atualizações de serviços, ofertas especiais e promoções deste site.

								Você pode cancelar a sua inscrição ao receber os e-mails a qualquer momento. Basta clicar no link “Remover e-mail da lista” que aparece no rodapé do e-mail que enviamos. Enviaremos anúncios relacionados a serviços raramente, apenas quando for necessário.

								Por exemplo, se o nosso serviço for temporariamente suspenso para manutenção, é possível que enviemos um e-mail para avisá-lo. Em geral, não é possível optar por não receber este último tipo de comunicação por não serem e-mails promocionais. Se você não quer receber os e-mails de aviso, você pode solicitar o descadastramento.

								Proteção de informação de menores Estamos comprometidos a proteger a privacidade dos menores. Esse e todos nossos sites são voltados ao público em geral e não são feitos para atrair crianças com menos de 13 anos.

								Não coletamos, nem solicitamos informações pessoais de menores de 13 anos, tampouco enviamos e-mails solicitando dados pessoais, a menos que tenhamos a permissão dos pais ou guardiões legais da criança. Inscrição e cadastro para assinatura deste site oferece cursos e produtos voltados para a área de saúde e bem estar.

								Para fazer um desses cursos, aproveitar o período grátis ou tornar-se usuário de nossa comunidade, você precisa se tornar membro deste site. Durante a inscrição, coletamos informações como seu nome e e- mail.

								Também pedimos dados demográficos, como idade e sexo, para criarmos seu perfil. Você também pode ter de fornecer seu cartão de crédito, caso o serviço que pediu seja pago. Essa informação é criptografada em nosso servidor seguro.

								Como membro, você será adicionado à nossa base para receber e- mails eventuais com informações de serviços, ofertas especiais e promoções da site.

								
								Web Beacons
								

								Usamos uma tecnologia chamada clear gifs (também conhecida como web beacons ou web bugs), que ajuda a gerenciar melhor o conteúdo do site, informando qual funciona melhor. Os clear gifs são pequenos gráficos com um identificador único e têm função similar aos cookies – são usados para rastrear os movimentos online de usuários da internet. Porém, ao contrário dos cookies, que ficam no computador do usuário, os clear gifs são incorporados na própria página e são do tamanho de um ponto. Não utilizamos os clear gifs que contêm informações pessoais de nossos clientes. Usamos clear gifs em nossos e-mails com formato HTML para sabermos quais são abertos pelos destinatários. Assim, podemos medir a eficácia de certas comunicações e de nossas campanhas. Em alguns e-mails, colocamos conteúdo com links para clicar e ser redirecionado para o site do Chave do Coração do Homem. Quando os usuários e/ou clientes clicam em um desses links, passam por um servidor à parte antes de chegar à página de destino. Rastreamos os dados de cliques para determinar o interesse por cada assunto e medirmos a eficiência de nossas comunicações com o aluno. Caso prefira não ser rastreado assim, não clique em links de texto ou imagens em seus e-mails.

								

								Com quem compartilhamos suas informações
								

								Compartilhamos seus dados pessoais com site, para que as outras empresas do grupo possam oferecer produtos e serviços a você. Como As únicas informações que compartilhamos com a site são seu nome, faixa etária, e-mail e país. Se não quiser que elas sejam compartilhadas, entre em contato com nosso atendimento pelo e-mail contato@site.com.br

								Podemos fornecer seus dados a empresas que prestem serviços e que nos ajudem em nossas atividades, como o processamento de pagamentos ou a oferta de atendimento. Essas empresas estão autorizadas a usar seus dados apenas se necessário para prestação de serviços a nós. Também podemos passar seus dados:

								– Conforme exigido por lei para atender a intimações ou processos legais similares;

								– Quando acreditarmos, de boa fé, que a quebra de sigilo é necessária para protegermos nossos direitos, proteger sua segurança ou a segurança de outros, investigar fraudes ou atender a um pedido do governo;

								– Caso a site se envolva numa fusão, aquisição, ou seja vendida em termos ou ao todo, você será notificado por e-mail, ou por um aviso bem claro em nosso site, de qualquer mudança nesse sentido, ou no uso de suas informações pessoais, bem como de qualquer nova situação que envolva os seus dados pessoais sendo divulgados a terceiros, a fim de que isso nunca seja feito sem consentimento.

								
								Cookies
								

								“Cookies” são pequenas informações que gravamos no browser que você utiliza para navegar ou no hard drive. Nós e nossos parceiros usamos os cookies para nos lembrarmos de informações pessoais quando você visita nosso site. Por exemplo, caso opte por visualizar nosso site em francês, armazenaremos essa informação nos cookies para que mostremos o site sempre em francês para você. Também usamos os cookies para gravar seu login, a fim de facilitar seu acesso ao site. A maioria dos browsers permite que você opte por não permitir que cookies sejam armazenados em seu computador. Usamos cookies para a sessão e cookies persistentes. O cookie de sessão expira assim que você fecha o browser. O cookie persistente continua em seu computador por um período maior. Além disso, usamos um prestador de serviços para rastrear o comportamento de visitantes em nosso site. Contudo, não temos acesso a seus cookies, tampouco os controlamos. As informações coletadas pela empresa prestadora de serviços são anônimas e usadas para melhorar nossos serviços e campanhas de marketing. Como acontece na maioria dos sites, recolhemos informações automaticamente e as salvamos em arquivos. Nessas informações, estão inclusos o endereço de IP, tipo de browser e idioma, provedor de serviço, páginas de referência, sistema operacional, data/hora e informações de cliques no site. Usamos essas informações para entender e analisar tendências, administrar o site, aprender sobre o comportamento dos usuários e reunir informações demográficas sobre nossa base de usuários como um todo.

								
								Quizzes and Contests
								

								Podemos dar a oportunidade aos clientes e visitantes de participarem de quizzes (testes) ou concursos em nosso site. Caso você participe, pediremos informações e dados pessoais. A participação em quizzes e concursos é completamente voluntária e, portanto, você tem a opção de não fornecer suas informações. As informações pedidas costumam incluir informações de contato (como nome e e-mail) e dados demográficos (como CEP). Usamos essas informações para personalizar os comunicados enviados a você e sugerir produtos e serviços mais relevantes.

								

								Fóruns públicos
								

								Nossos sites oferecem blogs, fóruns e comunidades acessíveis ao público em geral. Esteja ciente de que qualquer dado fornecido por você nessas áreas do site pode ser lido, coletado e usado por outros que as acessem. Para pedir que uma informação pessoal seja retirada de um blog, fórum ou comunidade, entre em contato com a escola através do email contato@site.com.br Em alguns casos, talvez não seja possível remover a informação. Se for o caso, nós avisaremos você e explicaremos o motivo.

								

								Links para outros websites
								

								Este site contém links para outros sites. Por favor, esteja ciente de que site não é responsável pelos sistemas de privacidade de outros sites. Nós incentivamos nossos usuários a serem cautelosos ao saírem do nosso site e recomendamos que leiam os termos de uso de qualquer website que colete informação pessoal identificável. Estas políticas de privacidade se aplicam apenas para informações recebidas pelo website da site.
															
						`}
							title={"Políticas de Privacidade"}
						/>
					</text>
				</Box>
			</Box>
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

export default ProFitness;
