import { useEffect, useState } from 'react';
import { Box, Button, Circle, Flex, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

export function CirclePurple() {
	return(
		<Circle size='651.4px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
	);
}
function getDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}
