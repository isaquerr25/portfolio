import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Text_Isaque from '../../images/Text-Isaque.png';

import Skills from '../skills';
import About from '../about';
import Projects from '../projects';
import Home from '../home';
function All() {

	return (
		<>
			<Home/>
			<Skills />
			<About />
			<Projects />
		</>
	);
}

export default All;



