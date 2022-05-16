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
			<Box className="Home" overflowX={'hidden'} h={['80vh','100vh']}>
				<Box position={'absolute'} right={'0px'} top={'150px'} maxH={'70%'} overflowY={'hidden'} >
					<Circle size='651.4px' bg='radial-gradient(37.26% 37.26% at 9.11% -10.1%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
				</Box>
				<Box position={'absolute'} left={'-200px'}  top={'50px'} zIndex={'5'}>
					<Circle size='500px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
				</Box>
				<Flex>
					<Box pl={'33px'} fontWeight='black' h='70%' mt={'25px'}>
						<Text fontSize={['30px','50px']}>
					Hi, I am
						</Text>
						<Text fontSize={['30px','50px']} display='flex'  gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
							<Image src={Text_Isaque} h={['35px','50px']} alt='Isaque'   sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(240deg)'}, transition:'0.25s' }} />
					R. Ferreira
						</Text>
						<Text color={'B8B8B8'} fontSize={['lg','xl']} display='flex'  gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
					Computer engineer/<br/>
					Full Stack Developer / <br/>
					UI Designer
						</Text>
						<Flex>
						
							<Text fontSize={['lg','xl']} display='flex' flexDirection={'column'} gap={'2px'}  
								alignItems={'flex-start'} justifyContent={'flex-start'} 
								w={['90%','600px']} color={'#20E2EE'}>
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
							{/*<Box w={'45vw'} h={'45vh'}>
							<Monkey/>
						</Box>*/}
						</Flex>
				
					</Box>
				</Flex>
			
			
			</Box>
			<Skills />
			<About />
			<Projects />
		</>
	);
}

export default Home;


