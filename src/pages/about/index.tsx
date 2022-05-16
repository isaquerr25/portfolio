import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Input, Link, ListItem, Select, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import ImgAboutMe from '../../images/aboutMe.png';
import ImgViolin from '../../images/violinSheme.png';
import ImgMonkey from '../../images/mokey.png';

function About() {
	return (
		<Flex className="Skills" flexDirection={'column'} overflowX={'hidden'}  position='relative'  w='100vw' >
		

			<Box position={'absolute'} right={'0px'}  top={'-40px'} zIndex={'-5'}>
				<Image src={ImgMonkey} h={'290px'} mt={'20px'} ml={'33px'} opacity={[0.3,1]} alt='Dan Abramov' />
			</Box>

			<Flex w={'100%'} justifyContent='space-between' >
				<Image src={ImgAboutMe} h={['20px','30px']} mt={'20px'} ml={'33px'} alt='Dan Abramov' />
			</Flex>
			
			<Flex w='99vw'  >
				
				<Flex ml={'33px'}  justifyContent={'center'}  w={'100%'} flexDirection={'column'} gap={'10px'} mt={'20px'}>
						
					<Text fontSize={['sm','xl']} display='inline-block'  gap={'2px'}
						alignItems={'flex-start'} justifyContent={'flex-start'} 
						w={['90%','75%']} color={'#909090'} fontWeight='bold'>
						{'/*'} 
						<br/>
						<Flex >
							<Text as={'span'} ml={['10px','25px']} >
								<Text as={'span'} ml={['15px','55px']} ></Text>	 I'm Isaque Ribeiro Ferreira a Full Stack Developer located in Portugal.
						I have an intuitive passion for UI effects, animations, and creating intuitive and dynamic experiences.
								<br/>
								<br/>
								<Text as={'span'} ml={['15px','55px']} ></Text>Well organized person, problem solver, independent employee with high attention to detail. 
						A fan of Japanese anime, I like to play and listen to the violin, 
						TV series, learn different things, and connect with people from different cultures.
						
								<br/>
							</Text>
						</Flex>
						{'*/'}
					</Text>
					

				</Flex>

				
			</Flex>
			<Flex w={'100%'} justifyContent='center' h={['150','310px']} overflowY='hidden' >
				<Image src={ImgViolin} h={['150px','360px']} w={'auto'}  alt='Dan Abramov' zIndex={-999} />
			</Flex>
			
		</Flex>
	);
}

export default About;



