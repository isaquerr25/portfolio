import { useEffect, useState } from 'react';
import { Box, Button, Circle, Flex, Grid, GridItem, Image, Input, Link, ListItem, ScaleFade, Select, Stack, Text, UnorderedList, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ImgProjects from '../../images/projects.png';
import ImgTempest from '../../images/tempestLogo.png';
import ImgSpirit from '../../images/spiritLogo.png';
import ImgHappy from '../../images/happyLogo.png';
import ImgDingo from '../../images/dingoLogo.png';
import ImgLand from '../../images/landLogo.png';
import ImgScreenSpirit from '../../images/screenSpirit.png';
import ImgScreenLand from '../../images/screenLand.png';
import ImgDevelopment from '../../images/development.png';
import LetsWorkTogether from '../../images/LetsWorkTogether.png';
import imgDevelopmentH from '../../images/developmentH.png';
import ImgUnderLine from '../../images/underLine.png';

import {Link as LinkRouter} from 'react-router-dom';
import { CirclePurple } from '../../components/circle';
function Projects() {
	
	const { height, width } = useWindowDimensions();

	
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Flex className="Projects" flexDirection={'column'}  overflowX={'hidden'}  mb={'30px'}   position='relative'  w='100vw' >
			<Flex w={'100%'} justifyContent='space-between' >
				<Image src={ImgProjects} h={['45px','50px']} mt={'20px'} ml={'33px'} alt='Dan Abramov'  sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(53deg)'}, transition:'0.2s' }}/>
			</Flex>
			<Flex w='99vw' justifyContent={'center'} mt={['25px','0px']} >
				<Text as={'span'} fontSize='xl' color='#00F0FF' fontWeight={'black'} sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(53deg)'}, transition:'0.2s' }}>
					<Text as={'span'} fontSize={['lg','2xl']} color='#C5EE20' >#</Text>
						Some of the brands I’ve worked with
				</Text>				
			</Flex>
			
			<Grid
				h={['auto','400px']}
				templateColumns='repeat(5, 1fr)'
				gap={4}
				w={['100%','auto']}
				mx={['5px','10%']}
				mt='20px'
				justifyItems={'center'}
				alignItems='center'
			>	
				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					
					
					<Image src={ImgLand} h={['50px','150px']} w='auto' alt='Land End Studio' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
			
				</GridItem>
				<GridItem rowSpan={2} h={['50px','150px']} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgSpirit} h={['50px','150px']} w='auto' alt='Spirit Gold Forex' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgDingo} h={['50px','150px']} w='auto' alt='Dingo.pt' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} w={'10px'} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgHappy} h={['50px','150px']}  w={'auto'} alt='Happy Code School' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} bg='transparent' />

				<GridItem rowSpan={2} h='auto' w='auto' justifyContent={'center'} alignItems='center' display={'flex'} bg='transparent' >
					<Image src={ImgTempest} h={['50px','150px']}  w='auto' alt='Img Tempest' sx={{ transform: 'scale(0.93)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }} />
				</GridItem>

				<GridItem rowSpan={2} bg='transparent' />
			</Grid>
			<Flex  w='99vw' >

				<Flex flexWrap={'wrap'}  justifyContent={'center'} w='100% ' alignItems={'center'} mb='50px' >
					{width <500 && <Image src={ImgUnderLine} h={'5px'} w={'90%'} opacity={0.2} mt='20px'/>}
				
					
					<Flex   display={'flex'} position={'relative'} w={'500px'} h={['auto','500px']} mt={['0px','100px']} alignItems={['end','center']} justifyContent={['flex-end','center']} mb={['0px','20px']} >
						<Flex 	sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }}>
							<LinkRouter to='/portfolioLandEnd'>
								<Image src={ImgLand} left={['-100px','34%']} top={['40px','-60px']} transform="translateX(-50%, -50%)"   position='absolute' h={['200px','120px']}  w='auto' alt='Img Land' />
								<Image src={ImgScreenLand} h={['300px','100%']}  w='auto' alt='Img Screen Land' />
							</LinkRouter>
						</Flex>
					</Flex>
					{/* TODO  */}
					<Flex  px={'20px'} display={'flex'} flexDirection='column' position={'relative'} w={['100%','500px']} h={['auto','500px']} mt={['0px','100px']} alignItems={'center'} justifyContent='flex-start' >
						<Text w='100%' textAlign={'left'} fontWeight='black'>
						Land End Studio
						</Text>
						<Text mt='20px' fontSize={'12px'}>
						Worked as a level designer on several levels of the game, in addition to structuring the code, 
						also with 3D modeling. Using Blender, Substance Painter, Unity and C# programming.	
							<br/>
							<br/>
						Tools: Unity, C#, Blender, Substance Painter
						</Text>	
					</Flex>
					
					<Flex flexDirection={['column-reverse','row']} mt='50px' alignItems={'center'} justifyContent='flex-start' >

						<Flex   px={'20px'} display={'flex'} flexDirection='column' position={'relative'} w={['75%','500px']} h={['auto','500px']} mt={['0px','30px']} alignItems={'center'} justifyContent='flex-start' >
							<Text w='100%' textAlign={'left'} fontWeight='black'>
								Spirit Gold Forex
							</Text>
							<Text mt='20px'  fontSize={'12px'}>
								Robot for opening and closing orders in the international Forex market. With a license 
								management system and a data and user management system. Using mql4 language and for 
								python backend with Django.
								<br/>
								<br/>
								Selected functioning of pages and apps testing features after uploads.
								<br/>
								<br/>
								Tracking and integrating changes into creative web projects.
								<br/>
								<br/>
								Structure verified. code browser compliance and support for validation processes.
								Produced clean, high-quality code for client projects.
								<br/>
								<br/>
								Customer-specific content through compliant writing and skilled design editing.
								<br/>
								<br/>
								Analyze software requirements and work with team members to develop solutions.
								<br/>
								<br/>
								Engineered, engineered, coded, engineered, engineered and maintained software solutions.
								<br/>
								<br/>
								Operational, core, and deployable architecture and features for application-to-application software.
								<br/>
								<br/>
								Tools: Python, Js, Html, Css, Mql4, Django.
								Website: <Link fontWeight={'black'} color='#F2FC70' href='https://www.spiritgoldforex.com' isExternal>https://www.spiritgoldforex.com</Link>
							</Text>	
						</Flex>
						<Flex   display={'flex'} position={'relative'} w='500px' h={['auto','500px']} mt={['0px','30px']} alignItems={['end','center']} justifyContent={['flex-end','center']} mb={['0px','20px']}>
							<Flex 	sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }}>
								<Image src={ImgSpirit} left={['-90px','34%']} top={['40px','-60px']} transform="translateX(-50%, -50%)"   position='absolute' h={['200px','120px']} w='auto' alt='ImgSpirit' />
								<Image src={ImgScreenSpirit}  h={['355px','100%']}  w={'auto'} alt='ImgScreenSpirit' />
							</Flex>
						</Flex>
					
					</Flex>
					<Flex flexDirection={['column-reverse','row-reverse']} mt='50px' alignItems={'center'} justifyContent='flex-start' >

						<Flex   px={'20px'} display={'flex'} flexDirection='column' position={'relative'} w={['75%','500px']} h={['auto','500px']} mt={['0px','30px']} alignItems={'flex-start'} justifyContent='flex-start' >
							<Text w='100%' textAlign={'left'} fontWeight='black'>
								Tempest Invest
							</Text>
							<Text mt='20px'  fontSize={'12px'}>
								Creation of a robo for the Forex market based on the strategies presented by the company.
								<br/>
								Development of the entire website based on the presented design.
								<br/>
								<br/>
								Tools: Prisma, Ts, React, Css, Mql4, Express, Apollo, GraphQl.
								<br/>
								Website: <Link fontWeight={'black'} color='teal' href='https://www.tempestinvest.com/' isExternal>https://www.tempestinvest.com/</Link>
							</Text>	
						</Flex>
						<Flex   display={'flex'} position={'relative'} w='500px' h={['auto','500px']} mt={['0px','30px']} alignItems={['end','center']} justifyContent={['flex-end','center']} mb={['0px','20px']}>
							<Flex 	sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }}>
								<Image src={ImgTempest} left={['-90px','34%']} top={['60px','-60px']} transform="translateX(-50%, -50%)"   position='absolute' h={['200px','120px']} w='auto' alt='ImgSpirit' />
								<Image src={  width > 500 ? ImgDevelopment  : imgDevelopmentH}  h={['355px','100%']}  w={'auto'} alt='ImgScreenSpirit' />
							</Flex>
						</Flex>
					
					</Flex>

					<Flex flexDirection={['column-reverse','row']} mt='50px' alignItems={'center'} justifyContent='flex-start' >

						<Flex   px={'20px'} display={'flex'} flexDirection='column' position={'relative'} w={['75%','500px']} h={['auto','500px']} mt={['0px','30px']} alignItems={'flex-start'} justifyContent='flex-start' >
							<Text w='100%' textAlign={'left'} fontWeight='black'>
							Dingo.pt
							</Text>
							<Text mt='20px'  fontSize={'12px'}>
							Development of the entire website based on the presented design.
								<br/>
								Tools: ***.
								<br/>
								<br/>
								Website: <Link fontWeight={'black'} color='#F2FC70' href='https://dingo.pt' isExternal> https://dingo.pt</Link>
							</Text>	
						</Flex>
						<Flex   display={'flex'} position={'relative'} w='500px' h={['auto','500px']} mt={['0px','30px']} alignItems={['end','center']} justifyContent={['flex-end','center']} mb={['0px','20px']}>
							<Flex 	sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)' }, transition:'0.2s' }}>
								<Image src={ImgDingo} left={['-90px','34%']} top={['60px','-60px']} transform="translateX(-50%, -50%)"   position='absolute' h={['200px','120px']} w='auto' alt='ImgSpirit' />
								<Image src={ width > 500 ? ImgDevelopment : imgDevelopmentH}  h={['355px','100%']}  w={'auto'} alt='ImgScreenSpirit' />
							</Flex>
						</Flex>
					</Flex>

					
					
				</Flex >
			</Flex>
			<LinkRouter to='/contact'>
				<Flex w={'100%'} justifyContent='center' h={'auto'} overflowY='hidden' mb={'40px'}>
					<Image  src={LetsWorkTogether} h={'auto'} w={['100%','55%']}  alt='Dan Abramov' 
						sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(-40deg)'}, transition:'0.2s' }} />
					
				</Flex>
			</LinkRouter>
		</Flex>
	);
}

export default Projects;



function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}
export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}