import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Text_Isaque from '../../images/Text-Isaque.png';

import Skills from '../skills';
import About from '../about';
import Projects from '../projects';
function Home() {

	return (
		<>
			<Box className="Home" display={'flex'} flexDirection='column' justifyContent={{base:'start',lg:'center'}} overflowX={'hidden'} h={{base:'auto' ,'lg':'95vh'}} >
				<Box position={'absolute'} right={'0px'} top={'150px'} maxH={'70%'} overflowY={'hidden'} zIndex={'-5'}>
					<Circle size='651.4px' bg='radial-gradient(37.26% 37.26% at 9.11% -10.1%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
				</Box>
				<Box position={'absolute'} left={'-200px'}  top={'50px'} zIndex={'-5'}>
					<Circle size='500px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
				</Box>
				<Flex>
					<Box fontWeight='black' h='70%' mt={'25px'} ml={{base:'2rem', lg:'3rem'}}>
						<Text fontSize={['10vw','5vw']} >
							Hi, I am
						</Text>
						<Text mt={{base:'0rem',lg:'0rem'}} fontSize={['10vw','5vw']} display='flex' flexWrap={{base:'wrap',lg:'nowrap'}}  gap={{base:'0rem' ,lg:5}} pl={{base:'-10.2rem' ,lg:'-0.5rem'}} alignItems={'center'} justifyContent={'flex-start'}>
							<Image zIndex={10} src={Text_Isaque} h={{base:'3rem',lg:'5.5vw'}} alt='Isaque'   sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(-120deg)'}, transition:'0.25s' }} />
							R. Ferreira
						</Text>
						<Text color={'B8B8B8'} fontSize={['lg','2vw']} display='flex'  gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
							Computer engineer/<br/>
							Full Stack Developer / <br/>
							UI Designer
						</Text>
						
					</Box>
				</Flex>
				<Flex ml='1.5rem'>	
					<Text fontSize={['lg','2vw']} display='flex' flexDirection={'column'} gap={'2px'}  
						alignItems={'flex-start'} justifyContent={'flex-start'} 
						w={['90%','70vw']} color={'#20E2EE'}>
						{'<'} <br/>
						<Text  display='inline-block'  textShadow={'4xl'} pl={'20px'}>
								Over the past <Text as={'span'} color={'white'}> 5 years</Text>, as a programmer
								and designer, I have worked with several 
								up-and-coming companies and startups to
								help them <Text as={'span'} color={'white'}>successfully reach their
								full potential and new clients.</Text>
						</Text>
						<br/>
						{'/>'}
					</Text>
				</Flex>
			</Box>
		</>
	);
}

export default Home;



