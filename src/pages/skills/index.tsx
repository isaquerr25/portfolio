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

import { CirclePurple } from '../../components/circle';
function Skills() {

	return (
		<Flex className="Home" flexDirection={'column'} mb={'30px'}>
			<Box position={'absolute'} right={'150px'}  top={'-80px'} zIndex={'-5'}>
				<Circle size='450px' bg='radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)' color='white'/>
			</Box>
			<Flex w={'100%'} justifyContent='space-between' mt={'10px'}>
				<Image src={ImgSkills} h={'130px'} mt={'33px'} ml={'33px'} alt='Dan Abramov' />
				<Image src={ImgHead} h={'150px'} mt={'33px'} mr={'300px'} alt='Dan Abramov' />

			</Flex>
			
			<Flex w='99vw' justifyContent={'space-between'}>
				


				<Flex ml={'33px'} w={'80vw'} flexDirection={'column'} gap={'10px'}>
						
						
					<Text fontSize={'xl'} display='inline-block'  gap={'2px'}
						alignItems={'flex-start'} justifyContent={'flex-start'} 
						w={'600px'} color={'#20E2EE'}>
						{'<'} 
						<Text  display='inline-block'  textShadow={'4xl'} pl={'20px'}>
                                Experience<br/>
                                value={'{'}
							<Text as={'span'} color={'#EDFF7B'} >{'`'}</Text>
							<Flex ml={'50   px'} pr={'33px'}>

								
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

				<Box display={'flex'}  justifyContent={'center'} mt={'25px'} w={'100%'}>

					<Flex flexDirection={'column'} gap={'10px'}>
						<Flex flexDirection={'column'} gap={'10px'}>
							<Flex w={'310px'} alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={'100%'} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgJs} h={'80px'} />
									<Image src={ImgTs} h={'65px'} />
									<Image src={ImgCss} h={'80px'} />
									<Image src={ImgReact} h={'65px'} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'310px'} alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={'100%'} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgNext} h={'65px'} />
									<Image src={ImgDjango} h={'65px'} />
									<Image src={ImgPython} h={'65px'} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'310px'} alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={'100%'} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgPrisma} h={'65px'} />
									<Image src={ImgUnity} h={'65px'} />
									<Image src={ImgGraphql} h={'65px'} />
									<Image src={ImgNode} h={'65px'} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'310px'} alignItems='center'  flexDirection={'column'} gap={'2px'} >
								<Flex w={'100%'} justifyContent={'space-between'} alignItems={'end'}>
									<Image src={ImgMongo} h={'65px'} />
									<Image src={ImgDocker} h={'65px'} />
									<Image src={ImgPost} h={'65px'} />
									<Image src={ImgApollo} h={'65px'} />
								</Flex>
								<Image src={ImgUnderLine} h={'5px'} w={'100%'}/>
							</Flex>
							<Flex w={'310px'} alignItems='center'  flexDirection={'column'} gap={'2px'}>
								<Text color={'#EDFF7B'} fontWeight='bold'>
									LANGUAGES
								</Text>
								<Flex flexDirection={'row'} justifyContent={'space-between'} w={'100%'}>
								
									<Image src={ImgBr} h={'200px'} />
									<Image src={ImgEua} h={'200px'} />
									<Image src={ImgJp} h={'200px'} />
                            
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



