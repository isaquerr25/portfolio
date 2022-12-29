import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Circle,
	Divider,
	Flex,
	Grid,
	GridItem,
	Icon,
	Image,
	Input,
	Link,
	ListItem,
	ScaleFade,
	Select,
	Stack,
	Text,
	UnorderedList,
	chakra,
	shouldForwardProp,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ImgProjects from "../../images/projects.png";
import ImgTempest from "../../images/tempestLogo.png";
import ImgSpirit from "../../images/spiritLogo.png";
import ImgHappy from "../../images/happyLogo.png";
import ImgDingo from "../../images/dingoLogo.png";
import ImgLand from "../../images/landLogo.png";
import ImgScreenSpirit from "../../images/screenSpirit.png";
import ImgScreenLand from "../../images/screenLand.png";
import ImgDevelopment from "../../images/development.png";
import LetsWorkTogether from "../../images/LetsWorkTogether.png";
import imgDevelopmentH from "../../images/developmentH.png";
import ImgUnderLine from "../../images/underLine.png";

import { Link as LinkRouter } from "react-router-dom";
import { RiNetflixFill } from "react-icons/ri";
import { IoLogoDropbox } from "react-icons/io5";
import { FaAirbnb } from "react-icons/fa";
import { GiGymBag, GiRun } from "react-icons/gi";
import { SiLamborghini } from "react-icons/si";
import { Md30FpsSelect, MdOutlineCarRental } from "react-icons/md";
import { motion, isValidMotionProp } from "framer-motion";
import { BsSmartwatch } from "react-icons/bs";

export const ChakraBox = chakra(motion.div, {
	/**
	 * Allow motion props and non-Chakra props to be forwarded.
	 */
	shouldForwardProp: (prop) =>
		isValidMotionProp(prop) || shouldForwardProp(prop),
});

function Projects() {
	const { height, width } = useWindowDimensions();

	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box
			className="projects !max-w-[100vw] !overflow-x-hidden flex"
			id="projects"
			flexDirection={"column"}
			overflowX={"hidden"}
			position="relative"
			w="100vw"
			bg="rgba(0, 0, 0, 0.5)"
			py="4rem"
		>
			<div className="w-[100vw] flex flex-col pb-[2rem]">
				<text className="text-center mx-[auto] text-[1.45rem] xl:text-[2rem] pb-[2rem] text-[#00F0FF] font-[600]">
					Diferents Home Pages Styles
				</text>
				<div className="w-[100vw] justify-center items-center flex flex-wrap gap-[0.5rem] xl:gap-[1.5rem]">
					{[
						{
							path: "/appCar",

							icon: MdOutlineCarRental,

							color: "yellow.500",
						},
						{
							icon: GiGymBag,
							path: "/atayOne/homeStayOne",
							color: "#F5CD79",
						},
						{
							path: "/seller/proFitness",
							icon: GiRun,

							color: "#53BC52",
						},
						{
							icon: RiNetflixFill,
							path: "/netflix",
							color: "red.500",
						},
						{
							icon: Md30FpsSelect,

							path: "/firstSeller",

							color: "#EEA528",
						},

						{
							path: "/dropbox",
							icon: IoLogoDropbox,

							color: "blue.500",
						},

						{
							icon: FaAirbnb,

							color: "red.500",
							path: "/airbnb",
						},
					].map((item, index) => (
						<ChakraBox
							animate={{
								scale:
									index % 2 === 0
										? [1, 0.95, 0.95, 1]
										: [0.95, 1, 1, 0.95],
								translateX:
									index % 2 === 0
										? [0, -5, 9, 0]
										: [0, 3, -9, 0],
								borderRadius: [
									"20%",
									"20%",
									"50%",
									"50%",
									"20%",
								],
							}}
							// @ts-ignore no problem in operation, although type error appears.
							transition={{
								duration: 3,
								ease: "easeInOut",
								repeat: Infinity,
								repeatType: "loop",
							}}
							padding="2"
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="100px"
							height="100px"
						>
							<Icon
								key={index}
								onClick={() =>
									(window.location.href = item.path)
								}
								as={item.icon}
								w={{ base: "5rem", xl: "6rem" }}
								h={{ base: "5rem", xl: "6rem" }}
								color={item.color}
								className={"cursor-pointer"}
								animate={{
									scale: [1, 0.9, 0.9, 1],
									rotate: [0, 1, 10, 0],
									borderRadius: [
										"20%",
										"20%",
										"50%",
										"50%",
										"20%",
									],
								}}
								// @ts-ignore no problem in operation, although type error appears.
								transition={{
									duration: 3,
									ease: "easeInOut",
									repeat: Infinity,
									repeatType: "loop",
								}}
							/>
						</ChakraBox>
					))}
				</div>
				<div className=" pt-[2rem] md:pt-[5rem]  pb-[4rem] md:pb-[5rem]">
					<Box
						color={"transparent"}
						className=" mx-[auto] "
						h="0.3rem"
						w={(width ?? 10) > 1100 ? "50rem" : "90vw"}
						bgGradient="linear(to-l, transparent, yellow.400, transparent)"
					/>
				</div>
			</div>

			<div className="w-[100vw] flex flex-col pb-[2rem]">
				<text className="text-center mx-[auto] text-[1.45rem] xl:text-[2rem] pb-[2rem] text-[#00F0FF] font-[600]">
					Example of a great project that I developed
				</text>
				<div className="w-[100vw] justify-center items-center flex flex-wrap gap-[0.5rem] xl:gap-[1.5rem]">
					{[
						{
							path: "https://lusss-watch.vercel.app/",

							icon: BsSmartwatch,

							color: "yellow.500",
						},
					].map((item, index) => (
						<ChakraBox
							animate={{
								scale:
									index % 2 === 0
										? [1, 0.9, 0.9, 1]
										: [0.9, 1, 1, 0.9],
								translateY:
									index % 2 === 0
										? [0, -5, 9, 0]
										: [0, 3, -9, 0],
								borderRadius: [
									"20%",
									"20%",
									"50%",
									"50%",
									"20%",
								],
							}}
							// @ts-ignore no problem in operation, although type error appears.
							transition={{
								duration: 3,
								ease: "easeInOut",
								repeat: Infinity,
								repeatType: "loop",
							}}
							padding="2"
							display="flex"
							justifyContent="center"
							alignItems="center"
							width="9rem"
							height="9rem"
							className="p-[1rem] bg-[white]"
						>
							<Image
								key={index}
								onClick={() =>
									(window.location.href = item.path)
								}
								src="/WMC180.png"
								w={{ base: "5rem", xl: "7rem" }}
								h={{ base: "5rem", xl: "6rem" }}
								className={"cursor-pointer  "}
								animate={{
									scale: [1, 0.9, 0.9, 1],
									rotate: [0, 1, 10, 0],
									borderRadius: [
										"20%",
										"20%",
										"50%",
										"50%",
										"20%",
									],
								}}
								// @ts-ignore no problem in operation, although type error appears.
								transition={{
									duration: 3,
									ease: "easeInOut",
									repeat: Infinity,
									repeatType: "loop",
								}}
								sx={{
									transform: "scale(0.9)",
									color: "teal.500",
									"&:hover": {
										transform: "scale(1.0)",
										filter: "hue-rotate(53deg)",
									},
									transition: "0.2s",
								}}
							/>
						</ChakraBox>
					))}
				</div>
				<div className=" pt-[2rem] md:pt-[5rem]  pb-[4rem] md:pb-[5rem]">
					<Box
						color={"transparent"}
						className=" mx-[auto] "
						h="0.3rem"
						w={(width ?? 10) > 1100 ? "50rem" : "90vw"}
						bgGradient="linear(to-l, transparent, yellow.400, transparent)"
					/>
				</div>
			</div>

			<Flex w={"100%"} justifyContent="space-between">
				<Image
					src={ImgProjects}
					h={["45px", "4.5vw"]}
					mt={"20px"}
					ml={"3rem"}
					alt="Dan Abramov"
					sx={{
						transform: "scale(0.9)",
						"&:hover": {
							transform: "scale(1.0)",
							filter: "hue-rotate(53deg)",
						},
						transition: "0.2s",
					}}
				/>
			</Flex>
			<Flex w="99vw" justifyContent={"center"} mt={["25px", "0px"]}>
				<Text
					as={"span"}
					fontSize={["lg", "2.5vw"]}
					color="#00F0FF"
					fontWeight={"black"}
					sx={{
						transform: "scale(0.9)",
						"&:hover": {
							transform: "scale(1.0)",
							filter: "hue-rotate(53deg)",
						},
						transition: "0.2s",
					}}
				>
					<Text as={"span"} color="#C5EE20">
						#
					</Text>
					Some of the brands I’ve worked with
				</Text>
			</Flex>
			{/* &&
			<Grid
				h={['auto','400px']}
				templateColumns='repeat(5, 1fr)'
				gap={4}
				w={['100%','auto']}
				mx={['5%','10%']}
				mt='20px'
				justifyItems={'center'}
				alignItems='center'
			>	
				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					
					
					<Image src={ImgLand} h={['50px','9.5vw']} w='auto' alt='Land End Studio' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
			
				</GridItem>
				<GridItem rowSpan={2} h={['50px','9.5vw']} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgSpirit} h={['50px','9.5vw']} w='auto' alt='Spirit Gold Forex' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgDingo} h={['50px','9.5vw']} w='auto' alt='Dingo.pt' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} w={'10px'} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgHappy} h={['50px','9.5vw']}  w={'auto'} alt='Happy Code School' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					{ 1 === 0 && <Image src={ImgTempest} h={['50px','9.5vw']}  w='auto' alt='Img Tempest' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />}
				</GridItem>

				<GridItem rowSpan={2} bg='transparent' />
		</Grid>*/}
			<Flex
				w={"100vw"}
				h="auto"
				justifyContent="space-around"
				alignItems="center"
				mt={"5vw"}
			>
				<Image
					src={ImgLand}
					h={["20vw", "17vw", "12vw"]}
					w={["20vw", "17vw", "12vw"]}
					alt="Land End Studio"
					sx={{
						transform: "scale(0.93)",
						"&:hover": { transform: "scale(1.0)" },
						transition: "0.2s",
					}}
				/>
				<Image
					src={ImgSpirit}
					h={["23vw", "20vw", "14vw"]}
					w={["20vw", "17vw", "12vw"]}
					alt="Spirit Gold Forex"
					sx={{
						transform: "scale(0.93)",
						"&:hover": { transform: "scale(1.0)" },
						transition: "0.2s",
					}}
				/>
				{/*
					<Image src={ImgDingo}
						h={['20vw','17vw','12vw']} 
						w={['20vw','17vw','12vw']} 
						alt='Dingo.pt' 
						sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} 
					/>*/}
				<Image
					src={ImgHappy}
					h={["20vw", "17vw", "12vw"]}
					w={["20vw", "17vw", "12vw"]}
					alt="Happy Code School"
					sx={{
						transform: "scale(0.93)",
						"&:hover": { transform: "scale(1.0)" },
						transition: "0.2s",
					}}
				/>
				<Image
					src={ImgTempest}
					h={["20vw", "17vw", "12vw"]}
					w={["20vw", "17vw", "12vw"]}
					alt="Img Tempest"
					sx={{
						transform: "scale(0.93)",
						"&:hover": { transform: "scale(1.0)" },
						transition: "0.2s",
					}}
				/>
			</Flex>
			<Flex w="99vw">
				<Flex
					flexWrap={"wrap"}
					justifyContent={"center"}
					w="100% "
					alignItems={"flex-start"}
					mb="50px"
				>
					{width < 500 && (
						<Image
							src={ImgUnderLine}
							h={"5px"}
							w={"90%"}
							opacity={0.2}
							mt="20px"
						/>
					)}

					<Flex
						display={"flex"}
						position={"relative"}
						w={["100vw", "auto"]}
						h={"auto"}
						mt={["0px", "100px"]}
						alignItems={["end", "center"]}
						justifyContent={["flex-end", "center"]}
					>
						<Flex
							sx={{
								transform: "scale(0.9)",
								"&:hover": { transform: "scale(1.0)" },
								transition: "0.2s",
							}}
						>
							<LinkRouter to="/portfolio/portfolioLandEnd">
								<Image
									src={ImgLand}
									left={["-100px", "34%"]}
									top={["40px", "-12%"]}
									transform="translateX(-50%, -50%)"
									position="absolute"
									h={["200px", "10vw"]}
									w="auto"
									alt="Img Land"
								/>
								<Image
									src={ImgScreenLand}
									h={["300px", "auto"]}
									w={["auto", "35vw"]}
									alt="Img Screen Land"
								/>
							</LinkRouter>
						</Flex>
					</Flex>
					{/* TODO  */}
					<Flex
						px={"20px"}
						display={"flex"}
						flexDirection="column"
						position={"relative"}
						w={["100%", "48vw"]}
						h={"auto"}
						mt={["0px", "100px"]}
						alignItems={"center"}
						justifyContent="flex-start"
					>
						<Text
							w="100%"
							fontSize={["5vw", "2.5vw"]}
							textAlign={"left"}
							fontWeight="black"
							mt="5%"
						>
							Land End Studio
						</Text>
						<Text mt="20px" fontSize={["sm", "1vw"]}>
							Worked as a level designer on several levels of the
							game, in addition to structuring the code, also with
							3D modeling. Using Blender, Substance Painter, Unity
							and C# programming.
							<br />
							<br />
							Tools: Unity, C#, Blender, Substance Painter
						</Text>
					</Flex>

					<Flex
						flexDirection={["column-reverse", "row"]}
						mt="50px"
						alignItems={"start"}
						justifyContent="flex-start"
					>
						<Flex
							px={"20px"}
							display={"flex"}
							flexDirection="column"
							position={"relative"}
							w={["100vw", "48vw"]}
							h={"auto"}
							mt={["0px", "0px"]}
							alignItems={"center"}
							justifyContent="flex-start"
						>
							<Text
								w="100%"
								fontSize={["5vw", "2rem"]}
								textAlign={"left"}
								fontWeight="black"
							>
								Spirit Gold Forex
							</Text>
							<Text mt="20px" fontSize={["sm", "1vw"]}>
								Robot for opening and closing orders in the
								international Forex market. With a license
								management system and a data and user management
								system. Using mql4 language and for python
								backend with Django.
								<br />
								<br />
								Selected functioning of pages and apps testing
								features after uploads.
								<br />
								<br />
								Tracking and integrating changes into creative
								web projects.
								<br />
								<br />
								Structure verified. code browser compliance and
								support for validation processes. Produced
								clean, high-quality code for client projects.
								<br />
								<br />
								Customer-specific content through compliant
								writing and skilled design editing.
								<br />
								<br />
								Analyze software requirements and work with team
								members to develop solutions.
								<br />
								<br />
								Engineered, engineered, coded, engineered,
								engineered and maintained software solutions.
								<br />
								<br />
								Operational, core, and deployable architecture
								and features for application-to-application
								software.
								<br />
								<br />
								Tools: Python, Js, Html, Css, Mql4, Django.
								Website:{" "}
								<Link
									fontWeight={"black"}
									color="#F2FC70"
									href="https://www.spiritgoldforex.com"
									isExternal
								>
									https://www.spiritgoldforex.com
								</Link>
							</Text>
						</Flex>
						<Flex
							display={"flex"}
							position={"relative"}
							w={["100vw", "48%"]}
							h={"auto"}
							alignItems={["end", "center"]}
							justifyContent={["flex-end", "center"]}
							mb={["0px", "0px"]}
						>
							<Flex
								sx={{
									transform: "scale(0.9)",
									"&:hover": { transform: "scale(1.0)" },
									transition: "0.2s",
								}}
							>
								<Image
									src={ImgSpirit}
									left={["-100px", "34%"]}
									top={["40px", "-18%"]}
									transform="translateX(-50%, -50%)"
									position="absolute"
									h={["200px", "15vw"]}
									w="auto"
									alt="ImgSpirit"
								/>
								<Image
									src={ImgScreenSpirit}
									h={["300px", "auto"]}
									w={["auto", "35vw"]}
									alt="ImgScreenSpirit"
								/>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						flexDirection={["column-reverse", "row-reverse"]}
						mt={["50px", "0px"]}
						alignItems={"start"}
						justifyContent="flex-start"
					>
						<Flex
							px={"20px"}
							display={"flex"}
							flexDirection="column"
							position={"relative"}
							w={["100%", "48vw"]}
							h={["auto", "auto"]}
							mt={["0px", "20px"]}
							alignItems={"center"}
							justifyContent="flex-start"
						>
							<Text
								w="100%"
								fontSize={["5vw", "2rem"]}
								textAlign={"left"}
								fontWeight="black"
							>
								Tempest Invest
							</Text>
							<Text mt="20px" fontSize={["sm", "1.2vw"]}>
								Creation of a robo for the Forex market based on
								the strategies presented by the company.
								<br />
								Development of the entire website based on the
								presented design.
								<br />
								<br />
								Tools: Prisma, Ts, React, Css, Mql4, Express,
								Apollo, GraphQl.
								<br />
								Website:{" "}
								<Link
									fontWeight={"black"}
									color="teal"
									href="https://www.tempestinvest.com/"
									isExternal
								>
									https://www.tempestinvest.com/
								</Link>
							</Text>
						</Flex>
						<Flex
							display={"flex"}
							position={"relative"}
							w={["100vw", "48%"]}
							h={"auto"}
							alignItems={["end", "center"]}
							justifyContent={["flex-end", "center"]}
							mb={["0px", "0px"]}
						>
							<Flex
								sx={{
									transform: "scale(0.9)",
									"&:hover": { transform: "scale(1.0)" },
									transition: "0.2s",
								}}
							>
								<Image
									src={ImgTempest}
									left={["-90px", "34%"]}
									top={["60px", "-60px"]}
									transform="translateX(-50%, -50%)"
									position="absolute"
									h={["200px", "11vw"]}
									w="auto"
									alt="ImgSpirit"
								/>
								<Image
									src={
										width > 500
											? ImgDevelopment
											: imgDevelopmentH
									}
									h={["300px", "auto"]}
									w={["auto", "35vw"]}
									alt="ImgScreenSpirit"
								/>
							</Flex>
						</Flex>
					</Flex>

					{/* <Flex flexDirection={['column-reverse','row']} mt={['50px','0px']} alignItems={'start'} justifyContent='flex-start' >

						<Flex  ml={['0%','8%']} px={'20px'} display={'flex'} flexDirection='column' position={'relative'} w={['100%','48vw']} h={'auto'} mt={['0px','30px']} alignItems={'flex-start'} justifyContent='flex-start' >
							<Text w='100%'  fontSize={['5vw','2vw']} textAlign={'left'} fontWeight='black'>
							Dingo.pt
							</Text>
							<Text mt='20px'  fontSize={['sm','1.2vw']}>
							Development of the entire website based on the presented design.
								<br/>
								Tools: ***.
								<br/>
								<br/>
								Website: <Link fontWeight={'black'} color='#F2FC70' href='https://dingo.pt' isExternal> https://dingo.pt</Link>
							</Text>	
						</Flex>
						<Flex   display={'flex'} position={'relative'} w={['100vw','48%']}  h={'auto'} alignItems={['end','center']} justifyContent={['flex-end','center']} mb={['0px','20px']}>
							<Flex 	sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }}>
								<Image src={ImgDingo} left={['-90px','34%']} top={['60px','-60px']} transform="translateX(-50%, -50%)"   position='absolute' h={['200px','120px']} w='auto' alt='ImgSpirit' />
								<Image src={ width > 500 ? ImgDevelopment : imgDevelopmentH} h={['300px','auto']}  w={['auto','48vw']} alt='ImgScreenSpirit' />
							</Flex>
						</Flex>
				</Flex>*/}
				</Flex>
			</Flex>
			<LinkRouter to="/contact">
				<Flex
					w={"100%"}
					justifyContent="center"
					h={"auto"}
					overflowY="hidden"
					mb={"40px"}
				>
					<Image
						src={LetsWorkTogether}
						h={"auto"}
						w={["95%", "55%"]}
						alt="Dan Abramov"
						sx={{
							transform: "scale(0.9)",
							"&:hover": {
								transform: "scale(1.0)",
								filter: "hue-rotate(-40deg)",
							},
							transition: "0.2s",
						}}
					/>
				</Flex>
			</LinkRouter>
		</Box>
	);
}

export default Projects;

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}
export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
