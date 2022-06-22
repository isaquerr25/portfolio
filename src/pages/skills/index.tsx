import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Input, Link, ListItem, Select, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import ImgSkills from '../../images/Skills.png';
import ImgHead from '../../images/cerebro.png';
import ImgJs from '../../images/js.png';
import ImgUnderLine from '../../images/underLine.png';
import ImgTs from '../../images/ts.png';
import ImgCss from '../../images/css.png';
import ImgReact from '../../images/react.png';
import ImgNext from '../../images/next.png';
import ImgDjango from '../../images/django.png';
import ImgPython from '../../images/python.png';
import ImgUnity from '../../images/unity.png';
import ImgGraphql from '../../images/graphql.png';
import ImgPrisma from '../../images/prisma.png';
import ImgNode from '../../images/node.png';
import ImgMongo from '../../images/mongo.png';
import ImgDocker from '../../images/docker.png';
import ImgPost from '../../images/postgress.png';
import ImgApollo from '../../images/apollo.png';
import ImgBr from '../../images/br.png';
import ImgEua from '../../images/eur.png';
import ImgJp from '../../images/jps.png';


function Skills() {

	return (
		<Flex id='skills'  flexDirection={'column'}   position='relative'  w='100vw' bg='rgba(0, 0, 0, 0.5)'  py={{base:'2rem' ,lg:'4rem'}}>
			<Box position={'absolute'} left={'-200px'}  top={'50px'} zIndex={'-5'}>
				<Circle size='500px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
			</Box>
			<Box position={'absolute'} right={'6rem'}  top={'-1rem'} zIndex={'-5'}>
				<Circle size='25rem' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
			</Box>
			<Flex flexDirection={['column','row']} w='99vw' justifyContent={['center','space-between']} alignItems='flex-start'>
				<Flex w={['100%','50vw']} flexDirection='column' justifyContent='space-between' mt={{base:'0rem',lg:'3rem'}}>
					<Image 
						src={ImgSkills} 
						h={['80px','7vw']}  
						w={['200px','18vw']} 
						mt={['33px','0px']} 
						ml={['25px','3rem']} 
						alt='skin and experience' 
						zIndex={1000}
						sx={{ 
							transform: 'scale(0.9)', 
							'&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(300deg)'}, transition:'0.2s' 
						}} 
					/>

					<Flex  ml={['25px','3.5rem']} w={['93%','60vw']} flexDirection={'column'} gap={'10px'}>
						
						
						<Text fontSize={['lg','2vw']} display='inline-block'  gap={'2px'}
							alignItems={'flex-start'} justifyContent={'flex-start'} 
							w={['100%','100%']} color={'#20E2EE'}
							fontWeight={'bold'}
						>
							{'<'} 
							<Text  display='inline-block'  textShadow={'4xl'} pl={['5px','20px']} >
                                Experience<br/>
                                value={'{'}
								<Text as={'span'} color={'#EDFF7B'} >{'`'}</Text>
								<Flex className='ddd' fontSize={['sm','1.5vw']} fontWeight='normal' ml={['5px','20px']} pr={['5px','4rem']}>

								
									<Text as={'span'} color={'#EDFF7B'} >
										
                                    Since I started my journey as a freelance developer 
                                    almost 
										<Text as={'span'} color={'#FFFFFF'} > 5 years ago </Text>
                                    , I have been doing 
										<Text as={'span'} color={'#FFFFFF'} > remote work Startups </Text>
                                    . And collaborated with talented people to 
                                    create web products for commercial and consumer
                                    use.
										<br/>
										<br/>
                                    I create successful responsive websites that are fast, 
                                    easy to use and built with best practices. The main 
                                    area of my experience is front-end development 
                                    using 
										<Text as={'span'} color={'#FFFFFF'} > React </Text>
                                    building small and medium sized web apps, 
                                    custom plugins, features, animations and coding of 
                                    interactive layouts.
										<br/>
										<br/>
                                    I also develop backend services using 
										<Text as={'span'} color={'#FFFFFF'} >  JS, TS and Python. </Text>
                                    I have experience in game development using
										<Text as={'span'} color={'#FFFFFF'} >  Unity in C#.  </Text>
									

									</Text> 
								</Flex>
								<Text as={'span'} color={'#EDFF7B'} >{'`'}</Text> 
								{'}'}
								
								
							</Text>
							<br/>
							{'/>'}
						</Text>

					</Flex>
				</Flex>
			
				<Box  display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'} mt={{base:'0rem',lg:'2rem'}}  w={['100%','40vw']}>
					<Image src={ImgHead} h={['200px','14vw']} w={['200px','14vw']} mt={'0px'} mb={['50px','5px']} alt='Head' />
					<Flex flexDirection={'column'} gap={'10px'}>
						<Flex flexDirection={'column'} gap={'10px'} px='5%'>
							<Flex w={'100%'} px='5%' alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={['100%','30vw']} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgJs} h={['80px','7vw']} />
									<Image src={ImgTs} h={['65px','5.5vw']} mt='15px'/>
									<Image src={ImgCss} h={['80px','7vw']} />
									<Image src={ImgReact} h={['65px','5.5vw']} mt='15px' />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'100%'} alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={['100%','30vw']} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgNext} h={['65px','5.5vw']} />
									<Image src={ImgDjango} h={['65px','5.5vw']} />
									<Image src={ImgPython} h={['65px','5.5vw']} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'100%'} alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={['100%','30vw']} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgPrisma} h={['65px','5.5vw']} />
									<Image src={ImgUnity} h={['65px','5.5vw']} />
									<Image src={ImgGraphql} h={['65px','5.5vw']} />
									<Image src={ImgNode} h={['65px','5.5vw']} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'100%'} px='5%' alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex  w={['100%','30vw']}justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgMongo} h={['65px','5.5vw']} />
									<Image src={ImgDocker} h={['65px','5.5vw']} />
									<Image src={ImgPost} h={['65px','5.5vw']} />
									<Image src={ImgApollo} h={['65px','5.5vw']} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'100%'} alignItems='center'  flexDirection={'column'} gap={'2px'} px='10%' >
								<Text color={'#EDFF7B'} fontSize={['lg','2vw']} fontWeight='bold'>
									LANGUAGES
								</Text>
								<Flex flexDirection={'row'} justifyContent={'space-between'} w={'100%'}>
								
									<Image src={ImgBr} h={['200px','12vw']} />
									<Image src={ImgEua} h={['200px','12vw']} />
									<Image src={ImgJp} h={['200px','12vw']} />
                            
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
						</Flex>
					</Flex>
				</Box>
				
			</Flex>
			
			
		</Flex>
	);
}

export default Skills;



