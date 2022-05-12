import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Text_Isaque from '../../images/Text-Isaque.png';
import { Monkey} from '../../components/monkey3D';
import { CirclePurple } from '../../components/circle';
function Home() {

	return (
		<Box className="Home" overflowX={'hidden'} h={'100vh'}>
			<Box position={'absolute'} right={'0px'} top={'150px'} maxH={'70%'} overflowY={'hidden'} >
				<Circle size='651.4px' bg='radial-gradient(37.26% 37.26% at 9.11% -10.1%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
			</Box>
			<Box position={'absolute'} left={'-200px'}  top={'50px'} zIndex={'5'}>
				<Circle size='500px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
			</Box>
			<Box>
				<Box display='flex' alignItems={'center'} justifyContent={'flex-end'} w={'99vw'} h='40px'  mt={'5px'}>
					<UnorderedList  display='flex' gap={'50px'} listStyleType='none' paddingRight={'50px'} fontWeight='black'> 
						<Link fontSize={'15px'}>About me</Link>
						<Link fontSize={'15px'}>Skills</Link>
						<Link fontSize={'15px'}>Portfolio</Link>
					</UnorderedList>
					<Button justifyContent={'center'} display='flex' alignItems={'center'} 
						textAlign={'center'} borderRadius={15} color={'#010208'} mr={'50px'} h={'35px'} fontSize={'15px'}>
						CONTACT ME
					</Button>
				</Box>
			</Box>
			<Flex>
				<Box pl={'33px'} fontWeight='black' h='70%' mt={'25px'}>
					<Text fontSize={'50px'}>
					Hi, I am
					</Text>
					<Text fontSize={'50px'} display='flex'  gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
						<Image src={Text_Isaque} h={'50px'} alt='Dan Abramov' />
					R. Ferreira
					</Text>
					<Text color={'B8B8B8'} fontSize={'xl'} display='flex'  gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
					Computer engineer/<br/>
					Full Stack Developer / <br/>
					UI Designer
					</Text>
					<Flex>
						
						<Text fontSize={'xl'} display='flex' flexDirection={'column'} gap={'2px'}  
							alignItems={'flex-start'} justifyContent={'flex-start'} 
							w={'600px'} color={'#20E2EE'}>
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
	);
}

export default Home;



