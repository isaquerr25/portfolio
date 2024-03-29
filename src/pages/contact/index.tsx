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
import Together from "../../images/together.png";
import { useFormik } from "formik";

import axios from "axios";
import { SiLinkedin } from "react-icons/si";
import { ChakraBox } from "../projects";

function Contact() {
	const [useSubmit, setSubmit] = useState(false);
	const [useSubmitText, setSubmitText] = useState("");
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			service: "",
			budget: "",
			message: "",
		},
		onSubmit: async (values) => {
			setSubmitText("");
			setSubmit(true);
			const emailSend = {
				to: "isaqueribeiro964@gmail.com",
				from: "tempestinvest.market@gmail.com",
				subject: "Portfolio " + values.email,
				text: "hello Im " + values.name + ", \n" + values.message,
				html:
					"hello Im " +
					values.name +
					", \n" +
					values.message +
					`<br/>Email:${values.email} <br/>
						<br/>service:${values.service} <br/>
						budget:${values.budget} <br/>
						`,
			};

			await axios
				.post("https://api.tempestinvest.com/post_email", emailSend)
				.then(function (response) {
					console.log(response);
					setSubmitText("send Success");
				})
				.catch(function (error) {
					setSubmitText("send Error");
				});
			setSubmit(false);
		},
	});

	return (
		<Box
			className="Contact pb-[2rem] px-[1rem] overflow-x-hidden max-w-[100vw]"
			maxW={"100vw"}
			minH="100vh"
			overflowY={"hidden"}
			overflowX="hidden"
			position="relative"
			w="100vw"
			h="100%"
		>
			<ChakraBox
				animate={{
					scale: [1, 1, 1],

					translateX: [0, -330, 100, -30, 0],
					translateY: [100, -300, 100, -200, 100],
				}}
				// @ts-ignore no problem in operation, although type error appears.
				transition={{
					duration: 8,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop",
				}}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="40rem"
				height="40rem"
				zIndex={"1"}
				className="absolute left-[10vw] overflow-hidden"
			>
				<Circle
					size="500px"
					bg="radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)"
					color="white"
				/>
			</ChakraBox>
			<Image
				src={Together}
				h={["35px", "50px"]}
				w="auto"
				mt={"33px"}
				ml={{ base: "0", xl: "2rem" }}
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

			<Flex w="100%" justifyContent={"space-between"}>
				<Flex
					px={{ base: "1rem", xl: "2rem" }}
					fontWeight="black"
					flexDirection={{ base: "column", lg: "row" }}
					h="70%"
					mt={"25px"}
				>
					<Flex
						mt={["5px", "25px"]}
						flexDirection={"column"}
						gap={"10px"}
					>
						<Text
							color={"white"}
							fontSize={{
								base: "1rem",
								xl: "1.7rem",
							}}
							display="flex"
							gap={5}
							alignItems={"center"}
							justifyContent={"flex-start"}
						>
							You have an idea and you need a developer.
							<br /> Let's work together.
						</Text>
						<Text
							display="block"
							fontSize={{
								base: "1rem",

								xl: "1.7rem",
							}}
							flexDirection={["row", "column"]}
							flexWrap={"wrap"}
							gap={"2px"}
							alignItems={"flex-start"}
							justifyContent={"flex-start"}
							w={{ base: "90vw", lg: "40vw" }}
							color={"#20E2EE"}
						>
							<Text display="block" as={"span"} color={"#D05F1F"}>
								<Text as={"span"} color={"teal"}>
									{"<"}
								</Text>{" "}
								Contato
							</Text>
							<Text
								display="block"
								textShadow={"4xl"}
								pl={["20px", "20px"]}
							>
								number={"{ "}
								<Text
									as={"span"}
									display="block"
									color={"#20EE28"}
								>
									WhatSapp : +55 (66) 9 9979 - 1203{" "}
								</Text>{" "}
								{"}"}
								<br />
								email={"{ "}
								<Text as={"span"} color={"#C5EE20"}>
									{" "}
									“
									<Link href="mailto:isaqueribeiro964@gmail.com">
										isaqueribeiro964@gmail.com
									</Link>
									”{" "}
								</Text>{" "}
								{"}"}
							</Text>
							<div className=" flex justify-start items-center pl-[1rem] mt-[1rem]">
								contactDirect={"{ "}
								<div className=" text-[#C5EE20] flex justify-center items-center">
									{" "}
									“
									<ChakraBox
										animate={{
											scale: [1, 1, 1],
											translateY: [-10, 10, -10],
											rotate: [-10, 10, -10],
										}}
										// @ts-ignore no problem in operation, although type error appears.
										transition={{
											duration: 5,
											ease: "easeInOut",
											repeat: Infinity,
											repeatType: "loop",
										}}
										width="4rem"
										height="4rem"
										zIndex={2}
										className=" text-[#C5EE20] flex justify-center items-center mx-[1rem]"
									>
										<Link href="https://www.linkedin.com/in/isaque-ferreira-20007b165/">
											<Icon
												as={SiLinkedin}
												h={{
													base: "3.5rem",
													xl: "3.7rem",
												}}
												w={{
													base: "3.5rem",
													xl: "3.7rem",
												}}
												color={"yellow"}
												className={" cursor-pointer"}
											/>
										</Link>
									</ChakraBox>
									”{" "}
								</div>{" "}
								{"}"}
							</div>
							<Text as={"p"} display="block" color={"teal"}>
								{"/>"}
							</Text>
						</Text>
					</Flex>

					<form onSubmit={formik.handleSubmit}>
						<Flex
							flexDirection={"column"}
							gap={"10px"}
							w={{ base: "100%", lg: "50vw" }}
						>
							<text
								className={`
								block xl:flex text-[1rem] xl:text-[2rem] text-justify 
								text-[#909090 mt-[3rem] lg:text-[1.5rem]
								w-[95%] lg:w-[100%] gap-5 items-center justify-start
								pr-[1rem]
								`}
							>
								Have a project? Message me if you want to work
								together on something exciting. Big or small.
								Mobile, web or game.
							</text>
							<Flex
								flexDirection={"column"}
								gap={"30px"}
								pr={{ xl: "1rem" }}
							>
								<Stack
									direction={["column", "row"]}
									spacing={3}
								>
									<Box
										w={{
											base: "95%",
											xl: "300px",
											"2xl": "40rem",
										}}
									>
										<Text
											color={"#909090"}
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
										>
											Your Name
										</Text>
										<Input
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
											disabled={useSubmit}
											isRequired
											variant="flushed"
											placeholder="What’s your name?"
											id="name"
											name="name"
											type="name"
											onChange={formik.handleChange}
											value={formik.values.name}
										/>
									</Box>
									<Box
										w={{
											base: "95%",
											xl: "300px",
											"2xl": "40rem",
										}}
									>
										<Text
											color={"#909090"}
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
										>
											Your Email
										</Text>
										<Input
											disabled={useSubmit}
											isRequired
											variant="flushed"
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
											placeholder="What’s your email address?"
											onChange={formik.handleChange}
											value={formik.values.email}
											id="email"
											name="email"
											type="email"
										/>
									</Box>
								</Stack>

								<Stack
									direction={["column", "row"]}
									spacing={3}
								>
									<Box
										w={{
											base: "95%",
											xl: "300px",
											"2xl": "40rem",
										}}
									>
										<Text
											color={"#909090"}
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
											mb={"15px"}
										>
											Service
										</Text>
										<Select
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
											disabled={useSubmit}
											isRequired
											placeholder="What are you interest in?"
											size="md"
											borderRadius={"0px"}
											color={"#90909080"}
											borderColor={"#90909080"}
											onChange={formik.handleChange}
											value={formik.values.service}
											id="service"
											name="service"
										>
											<option value="Need Help with a one-off project">
												Need Help with a one-off project
											</option>
											<option value="Looking for a long  term partnership">
												Looking for a long term
												partnership
											</option>
											<option value="Want to hire me full-time">
												Want to hire me full-time
											</option>
											<option value="Just wanted ro say hi!">
												Just wanted ro say hi!
											</option>
										</Select>
									</Box>
									<Box
										w={{
											base: "95%",
											xl: "300px",
											"2xl": "40rem",
										}}
									>
										<Text
											color={"#909090"}
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
											mb={"15px"}
										>
											Your Budget
										</Text>
										<Select
											disabled={useSubmit}
											isRequired
											placeholder="What’s your budget?"
											fontSize={{
												base: "sm",
												lg: "lg",
												xl: "xl",
												"2xl": "2xl",
											}}
											color={"#90909080"}
											borderColor={"#90909080"}
											borderRadius={"0px"}
											onChange={formik.handleChange}
											value={formik.values.budget}
											id="budget"
											name="budget"
										>
											<option value="$1000-$2500">
												$1000-$2500
											</option>
											<option value="$2500-$5000">
												$2500-$5000
											</option>
											<option value="$5000-$10000">
												$5000-$10000
											</option>
											<option value="$10000 or more">
												$10000 or more
											</option>
										</Select>
									</Box>
								</Stack>

								<Box w={{ base: "95%", xl: "100%" }}>
									<Text
										color={"#909090"}
										fontSize={{
											base: "sm",
											lg: "lg",
											xl: "xl",
											"2xl": "2xl",
										}}
									>
										Message
									</Text>
									<Input
										isRequired
										variant="flushed"
										placeholder="What’s your message?"
										onChange={formik.handleChange}
										value={formik.values.message}
										id="message"
										name="message"
										type="message"
										disabled={useSubmit}
										fontSize={{
											base: "sm",
											lg: "lg",
											xl: "xl",
											"2xl": "2xl",
										}}
									/>
								</Box>
								<Flex
									w={"100%"}
									alignItems="center"
									justify={{ base: "center", lg: "left" }}
								>
									<Button
										disabled={useSubmit}
										isLoading={useSubmit}
										spinnerPlacement="start"
										type="submit"
										w={"200px"}
										colorScheme="white"
										borderRadius={"0px"}
										variant="outline"
										fontSize={{
											base: "sm",
											lg: "lg",
											xl: "xl",
											"2xl": "2xl",
										}}
									>
										Send Message
									</Button>
									<Text
										color={"#909090"}
										fontSize={"sm"}
										ml="10px"
									>
										{useSubmitText}
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</form>
				</Flex>
			</Flex>
		</Box>
	);
}

export default Contact;
