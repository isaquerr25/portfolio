import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Input, Link, ListItem, Select, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Together from '../../images/together.png';

import { CirclePurple } from '../../components/circle';
function Contact() {

	return (
		<Box className="Home" overflowX={'hidden'} h={'100vh'}>
			<Box position={'absolute'} left={'0px'}  bottom={'-50px'} zIndex={'5'}>
				<Circle size='450px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
			</Box>
			<Image src={Together} h={'50px'} mt={'33px'} ml={'33px'} alt='Dan Abramov' />
			
			<Flex w='100vw' justifyContent={'space-between'}>
				<Flex pl={'33px'} fontWeight='black' h='70%' mt={'25px'}>


					<Flex mt={'25px'} flexDirection={'column'} gap={'10px'}>
						<Text color={'#909090'} fontSize={'lg'} display='flex'  gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
						You have an idea and you  need a developer. Let's work together.
						</Text>
						
						<Text fontSize={'xl'} display='inline-block'  gap={'2px'}
							alignItems={'flex-start'} justifyContent={'flex-start'} 
							w={'600px'} color={'#20E2EE'}>
							{'<'} 
							<Text as={'span'} color={'#D05F1F'}>Contato</Text> <br/>
							<Text  display='inline-block'  textShadow={'4xl'} pl={'20px'}>
								
									number={'{ '}
								<Text as={'span'}  color={'#20EE28'}>WhatSapp : +55 (66) 9 9979 - 1203 </Text> {'}'}
								<br/>
									email={'{ '}<Text as={'span'}  color={'#C5EE20'}> “isaqueribeiro964@gmail.com”  </Text> {'}'}
								<br/>
								
							</Text>
							<br/>
							{'/>'}
						</Text>

					</Flex>

					<Flex flexDirection={'column'} gap={'10px'}>
						<Text color={'#909090'} fontSize={'xl'} display='flex' w={'500px'} gap={5}  alignItems={'center'} justifyContent={'flex-start'}>
						Have a project? Message me if you want to work 
						together on something exciting.
						Big or small. 
						Mobile, web or game.
						</Text>
						<Flex flexDirection={'column'} gap={'30px'}>
							<Stack direction={'row'} spacing={3} >
								<Box w={'300px'}>
									<Text color={'#909090'} fontSize={'sm'}>Your Name</Text>
									<Input variant='flushed' placeholder='What’s your name?' />
								</Box>
								<Box  w={'300px'}>
									<Text color={'#909090'} fontSize={'sm'}>Your Email</Text>
									<Input variant='flushed' placeholder='What’s your email address?' />
								</Box>

							</Stack>

							<Stack direction={'row'} spacing={3}>
							
								<Box w={'300px'}>
									<Text color={'#909090'} fontSize={'sm'} mb={'15px'}>Your Interest</Text>
									<Select placeholder='What are you interest in?' size='md' borderRadius={'0px'} color={'#90909080'} borderColor={'#90909080'} />
								</Box>
								<Box w={'300px'}>
									<Text color={'#909090'} fontSize={'sm'} mb={'15px'}>Your Budget</Text>
									<Select placeholder='What’s your budget?' size='md' color={'#90909080'} borderColor={'#90909080'} borderRadius={'0px'} />
								</Box>

							</Stack>

							<Box  w={'100%'}>
								<Text color={'#909090'} fontSize={'sm'}>Message</Text>
								<Input variant='flushed' placeholder='What’s your message?' />
							</Box>
							<Button w={'200px'} colorScheme='white' borderRadius={'0px'} variant='outline'>
								Send Message
							</Button>

						</Flex>
					</Flex>
				</Flex>
			</Flex>
			
			
		</Box>
	);
}

export default Contact;



