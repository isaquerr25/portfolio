import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Icon,
	ModalFooter,
	Button,
	Text,
} from "@chakra-ui/react";
import { VscError } from "react-icons/vsc";
import { GrValidate } from "react-icons/gr";
import { BsBasket, BsPatchQuestion } from "react-icons/bs";

import { FaRegCheckCircle } from "react-icons/fa";
import React, { useState } from "react";
import { RiInformationLine } from "react-icons/ri";
import ButtonCustom from "./ButtonCustom";
interface typePopup {
	display: boolean;
	hide: () => void;
	title?: "success" | "payment" | "error" | "information";
	msg: string;
	nameButton?: string | null;
	secondButtonWithName?: string;
	secondButtonFunc?: () => void;
}

export function PopMsg({
	title,
	msg,
	display,
	hide,
	nameButton,
	secondButtonWithName,
	secondButtonFunc,
}: typePopup) {
	return (
		<>
			<Modal onClose={hide} isOpen={display} isCentered>
				<ModalOverlay />
				<ModalContent
					minW={{ base: "80vw", lg: "40rem" }}
					minH={{ base: "30rem", lg: "20rem" }}
					style={{ border: "4px solid rgba(255, 255, 0,0.65)" }}
					bg={"black"}
					color={"white"}
				>
					<ModalHeader className="uppercase ">
						<span className="uppercase text-[2.5rem]  xl:text-[1.5rem]">
							{" "}
							{title}
						</span>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display={"flex"}
						flexDirection="column"
						minH={"100px"}
						gap={5}
						width="100%"
						justifyContent="center"
						alignItems={"center"}
					>
						{title === "success" && (
							<Icon
								alignItems={"center"}
								boxSize={{ base: "10rem", lg: "20" }}
								as={FaRegCheckCircle}
								color="green"
								stroke="green"
							/>
						)}
						{title === "payment" && (
							<Icon
								alignItems={"center"}
								boxSize={{ base: "10rem", lg: "20" }}
								as={BsBasket}
								color="teal.500"
								stroke="teal.500"
							/>
						)}
						{title === "error" && (
							<Icon
								alignItems={"center"}
								boxSize={{ base: "10rem", lg: "20" }}
								as={VscError}
								color="red"
								stroke="red"
							/>
						)}
						{title === "information" && (
							<Icon
								alignItems={"center"}
								boxSize={{ base: "10rem", lg: "20" }}
								as={RiInformationLine}
								color="teal.500"
								stroke="teal.500"
							/>
						)}
						<Text
							fontWeight={"bold"}
							className="text-center text-[1rem] xl:text-[1.5rem] uppercase"
						>
							{msg}
						</Text>
					</ModalBody>
					<ModalFooter
						className="px-[4rem]"
						display={"flex"}
						flexDirection="row"
						gap="2rem"
						justifyContent="center"
						alignItems={"center"}
						mb="3rem"
					>
						<ButtonCustom medium handleClick={() => hide()}>
							{nameButton ?? "Close"}
						</ButtonCustom>
						{secondButtonWithName !== undefined &&
							secondButtonWithName && (
								<ButtonCustom
									borderColor="red"
									bigButton
									handleClick={() => secondButtonFunc!()}
								>
									{secondButtonWithName ?? "Close"}
								</ButtonCustom>
							)}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
