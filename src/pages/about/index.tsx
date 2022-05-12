import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Input, Link, ListItem, Select, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import ImgAboutMe from '../../images/aboutMe.png';
import ImgViolin from '../../images/violinSheme.png';
import ImgMonkey from '../../images/mokey.png';


import { CirclePurple } from '../../components/circle';
function About() {
	return (
		<Flex className="About Me" flexDirection={'column'} >
		

			<Box position={'absolute'} right={'0px'}  top={'-40px'} zIndex={'-5'}>
				<Image src={ImgMonkey} h={'290px'} mt={'20px'} ml={'33px'} alt='Dan Abramov' />
			</Box>

			<Flex w={'100%'} justifyContent='space-between' >
				<Image src={ImgAboutMe} h={'30px'} mt={'20px'} ml={'33px'} alt='Dan Abramov' />
			</Flex>
			
			<Flex w='99vw'  >
				
				<Flex ml={'33px'}  justifyContent={'center'}  w={'100%'} flexDirection={'column'} gap={'10px'} mt={'20px'}>
						
					<Text fontSize={'xl'} display='inline-block'  gap={'2px'}
						alignItems={'flex-start'} justifyContent={'flex-start'} 
						w={'75%'} color={'#909090'} fontWeight='bold'>
						{'/*'} 
						<br/>
						<Flex >
							<Text as={'span'} ml={'25px'} >
								<Text as={'span'} ml={'55px'} ></Text>	 I'm Isaque Ribeiro Ferreira a Full Stack Developer located in Portugal.
						I have an intuitive passion for UI effects, animations, and creating intuitive and dynamic experiences.
								<br/>
								<br/>
								<Text as={'span'} ml={'55px'} ></Text>Well organized person, problem solver, independent employee with high attention to detail. 
						A fan of Japanese anime, I like to play and listen to the violin, 
						TV series, learn different things, and connect with people from different cultures.
						
								<br/>
							</Text>
						</Flex>
						{'*/'}
					</Text>
					

				</Flex>

				
			</Flex>
			<Flex w={'100%'} justifyContent='center' h={'310px'} overflowY='hidden' >
				<Image src={ImgViolin} h={'360px'} w={'auto'}  alt='Dan Abramov' zIndex={-999} />
			</Flex>
			
		</Flex>
	);
}

export default About;



