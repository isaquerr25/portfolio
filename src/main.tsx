import React from 'react';
import { Box, Button, ChakraProvider, Circle, Flex, Image, ListItem,Link, Text, UnorderedList } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/home';
import Contact from './pages/contact';
import { theme } from './theme';
import Skills from './pages/skills';
import About from './pages/about';
import Projects from './pages/projects';
import PortfolioLandEnd from './pages/portifolioLand';

import {
	BrowserRouter,
	Routes,
	Route,
	Link as LinkRouter
} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
	
	<BrowserRouter>
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				
				<Box>
					<Box display='flex' alignItems={'center'} justifyContent={'flex-end'} w={'99vw'} h='40px'  mt={'5px'}>
						<UnorderedList  display='flex' gap={['10px','50px']} listStyleType='none' paddingRight={['15px','50px']} fontWeight='black'> 
							<Link  fontSize={['12px','15px']}> <LinkRouter to='/portfolio/'>Home</LinkRouter></Link>
							<Link  fontSize={['12px','15px']}> <LinkRouter to='/portfolio/about'>About me</LinkRouter></Link>
							<Link fontSize={['12px','15px']}> <LinkRouter to='/portfolio/skills'>Skills</LinkRouter> </Link>
							<Link fontSize={['12px','15px']}> <LinkRouter to='/portfolio/projects'>Portfolio</LinkRouter></Link>
						</UnorderedList>
						<Button justifyContent={'center'} display='flex' alignItems={'center'} 
							textAlign={'center'} borderRadius={15} color={'#010208'} mr={['0px','50px']} h={'35px'} fontSize={['12px','15px']}>
							<LinkRouter to='/portfolio/contact'>CONTACT ME</LinkRouter>
						</Button>
					</Box>
				</Box>
				<Routes>
					<Route path="/portfolio/" element={<Home />} >
						<Route index element={<Home />} />
					</Route>
					<Route path="/portfolio/about" element={<About />}/>
					<Route path="/portfolio/skills" element={<Skills />}/>
					<Route path="/portfolio/projects" element={<Projects />}/>
					<Route path="/portfolio/portfolioLandEnd" element={<PortfolioLandEnd />}/>
					<Route path="/portfolio/contact" element={<Contact />}/>
				</Routes>
			</ChakraProvider>
		</React.StrictMode>
	</BrowserRouter>
	
);
