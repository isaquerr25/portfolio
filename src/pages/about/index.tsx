import { useState } from "react";
import {
	Box,
	Button,
	Circle,
	Flex,
	Icon,
	Image,
	Input,
	Link,
	ListItem,
	Select,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import ImgAboutMe from "../../images/aboutMe.png";
import ImgViolin from "../../images/violinSheme.png";
import ImgMonkey from "../../images/mokey.png";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ChakraBox, useWindowDimensions } from "../projects";

function About() {
	const { height, width } = useWindowDimensions();
	return (
		<Flex
			className="about !max-w-[100vw] !overflow-x-hidden"
			id="about"
			flexDirection={"column"}
			overflowX={"hidden"}
			position="relative"
			w="100%"
			py={{ base: "1rem", lg: "4rem" }}
		>
			<ChakraBox
				animate={{
					scalussle:
						width > 900
							? [1, 0.85, 0.8, 0.95, 1]
							: [0.6, 0.65, 0.7, 0.65, 0.6],
					rotate: [0, 55, -40, 25, 0],
					translateX:
						width > 900
							? [0, -10, -15, 10, 0]
							: [10, 80, 100, 50, 10],
					translateY:
						width > 900 ? [0, 1, 50, 10, -20, 0] : [0, 5, -5, 1, 0],
				}}
				// @ts-ignore no problem in operation, although type error appears.
				transition={{
					duration: 10,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop",
				}}
				padding="2"
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="290px"
				height="290px"
				position={"absolute"}
				right={"0px"}
				top={"-40px"}
				zIndex={2}
			>
				<Image
					src={ImgMonkey}
					h={"290px"}
					mt={"20px"}
					alt="Dan Abramov"
					zIndex={2}
				/>
			</ChakraBox>

			<Flex
				w={"100%"}
				justifyContent="flex-start"
				mt="1rem"
				alignItems={"center"}
				gap="1rem"
				flexWrap={"wrap"}
			>
				<Image
					src={ImgAboutMe}
					h={["45px", "3.18vw"]}
					ml="3rem"
					alt="Dan Abramov"
					sx={{
						transform: "scale(0.9)",
						"&:hover": {
							transform: "scale(1.0)",
							filter: "hue-rotate(603deg)",
						},
						transition: "0.2s",
					}}
				/>
				<Link
					ml={{ base: "3rem", lg: "3rem" }}
					href="https://www.linkedin.com/in/isaque-ferreira-20007b165/"
					p="0rem"
					w="auto"
					h="auto"
					isExternal
				>
					<Icon
						h="auto"
						w="4rem"
						as={AiFillLinkedin}
						color="#0AFFF4"
						p="0rem"
						sx={{
							transform: "scale(0.9)",
							"&:hover": {
								transform: "scale(1.0)",
								filter: "hue-rotate(603deg)",
							},
							transition: "0.2s",
						}}
					/>
				</Link>
				<Link
					href="https://www.instagram.com/isaquerr25/"
					p="0rem"
					w="auto"
					h="auto"
					isExternal
				>
					<Icon
						h="auto"
						w="3.05rem"
						as={BsInstagram}
						color="#B04CF9"
						sx={{
							transform: "scale(0.9)",
							"&:hover": {
								transform: "scale(1.0)",
								filter: "hue-rotate(603deg)",
							},
							transition: "0.2s",
						}}
					/>
				</Link>
			</Flex>

			<Flex w="99vw">
				<Flex
					justifyContent={"center"}
					w={"100%"}
					flexDirection={"column"}
					gap={"10px"}
					mt={{ base: "0px", lg: "20px" }}
				>
					<Text
						fontSize={["sm", "1.5vw"]}
						display="inline-block"
						gap={"2px"}
						pl={{ base: "2rem", lg: "3rem" }}
						alignItems={"flex-start"}
						justifyContent={"flex-start"}
						w={["90%", "75%"]}
						color={"#909090"}
						fontWeight="bold"
					>
						{"/*"}
						<br />
						<Flex>
							<Text as={"span"} ml={["10px", "25px"]}>
								<Text as={"span"} ml={["15px", "55px"]}></Text>{" "}
								I'm Isaque Ribeiro Ferreira a Full Stack
								Developer located in Portugal. I have an
								intuitive passion for UI effects, animations,
								and creating intuitive and dynamic experiences.
								<br />
								<br />
								<Text as={"span"} ml={["15px", "55px"]}></Text>
								Well organized person, problem solver,
								independent employee with high attention to
								detail. A fan of Japanese anime, I like to play
								and listen to the violin, TV series, learn
								different things, and connect with people from
								different cultures.
								<br />
							</Text>
						</Flex>
						{"*/"}
					</Text>
				</Flex>
			</Flex>
			<Flex
				w={"100vw"}
				justifyContent="center"
				max-w={"100vw"}
				h={["150", "29vw"]}
				alignItems="center"
				overflow="hidden"
			>
				<Image
					src={ImgViolin}
					h={["150px", "30vw"]}
					max-w={"100vw"}
					w={"auto"}
					alt="Dan Abramov"
					className="!z-[-10]"
				/>
			</Flex>
		</Flex>
	);
}

export default About;
