import { useState } from 'react';
import { Box, Button, Circle, Flex, Image, Input, Link, ListItem, Select, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import LetsWorkTogether from '../../images/LetsWorkTogether.png';
import LetsWorkTogether2 from '../../images/LetsWorkTogether2.png';
import LANDENDStr from '../../images/LANDENDStr.png';
import ImgViolin from '../../images/violinSheme.png';
import ImgMonkey from '../../images/mokey.png';
import Img44 from '../../images/image44.png';
import Img47 from '../../images/image47.png';
import Img45 from '../../images/image45.png';
import Img42 from '../../images/image42.png';
import Img43 from '../../images/image43.png';
import {Link as LinkRouter} from 'react-router-dom';



function PortfolioLandEnd() {
	return (
		<Flex className="About Me" flexDirection={'column'} >
		


			<Flex w={'100%'} justifyContent='space-between' >
				<Image src={LANDENDStr} h={['40px','50px']} mt={'20px'} ml={['10px','33px']} alt='Dan Abramov'  
					sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(240deg)'}, transition:'0.25s' }} />
			</Flex>
			
			<Flex w='99vw'   mb={'30px'}>
				
				<Flex ml={'33px'}  justifyContent={'center'}  w={'100%'} flexDirection={'column'} gap={'10px'} mt={'20px'}>
						
					<Text fontSize={['lg','xl']} display='inline-block'  gap={'2px'}
						alignItems={'flex-start'} justifyContent={'flex-start'} 
						w={'85%'} color={'#909090'} fontWeight='bold'>
						{'/*'} 
						<br/>
						<Flex >
							<Text as={'span'} ml={['0px','25px']} >
                                I worked on the development of character design, scenario 
                                design and also on the programming of the interaction 
                                structures between character and scenario.

							</Text>
						</Flex>
						{'*/'}
					</Text>
					

				</Flex>

				
			</Flex>
			<Flex w={'100%'} justifyContent='center' h={'auto'} overflowY='hidden'  mb={'30px'}>
				<Image src={Img43} h={'auto'} w={'85%'}  alt='Dan Abramov'  />
			</Flex>
			<Flex w={'100%'} justifyContent='center' h={'auto'} overflowY='hidden' mb={'30px'} >
				<Image src={Img44} h={'auto'} w={'85%'}  alt='Dan Abramov'/>
			</Flex>
			<Flex w={'100%'} justifyContent='center' h={'auto'} overflowY='hidden' mb={'30px'}>
				<Image src={Img47} h={'auto'} w={'85%'}  alt='Dan Abramov'  />
			</Flex>
			<Flex w={'100%'} justifyContent='center' h={'auto'} overflowY='hidden' mb={'30px'}>
				<Image src={Img45} h={'auto'} w={'85%'}  alt='Dan Abramov'  />
			</Flex>
	
			<LinkRouter to='/contact'>

				<Flex w={'100%'} justifyContent='center' h={'auto'} overflowY='hidden' mb={'40px'} >

					<Image src={LetsWorkTogether} h={'auto'} w={['100%','55%']} mb={['10px','0px']} alt='Dan Abramov' sx={{ transform: 'scale(0.9)', '&:hover': { transform: 'scale(1.0)', filter: 'hue-rotate(53deg)'}, transition:'0.2s' }} />
				</Flex>
			</LinkRouter>
		</Flex>
	);
}

export default PortfolioLandEnd;



