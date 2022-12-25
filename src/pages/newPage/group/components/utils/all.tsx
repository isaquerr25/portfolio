import { useEffect, useState } from 'react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import React from 'react';
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

export function VerticallyCenter({
	press,
	title,
}: {
	press: string;
	title: string;
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [searchParams] = useSearchParams();
	return (
		<>
			<Text className="cursor-pointer " onClick={onOpen}>
				{title}
			</Text>

			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				scrollBehavior={'inside'}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody dangerouslySetInnerHTML={{ __html: press }} />
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
