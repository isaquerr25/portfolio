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
				<link rel="shortcut icon" type="image/x-icon" href="/78-pig/logo.jpg" />	
				<Box>
					<Box display='flex' alignItems={'center'} justifyContent={'flex-end'} w={'99vw'} h='40px'  mt={'1.5%'}>
						<UnorderedList  display='flex' gap={['10px','50px']} listStyleType='none' paddingRight={['15px','50px']} fontWeight='black'> 
							<Link  fontSize={['12px','1.5vw']}> <LinkRouter to='/'>Home</LinkRouter></Link>
							<Link  fontSize={['12px','1.5vw']}> <LinkRouter to='/about'>About me</LinkRouter></Link>
							<Link fontSize={['12px','1.5vw']}> <LinkRouter to='/skills'>Skills</LinkRouter> </Link>
							<Link fontSize={['12px','1.5vw']}> <LinkRouter to='/projects'>Portfolio</LinkRouter></Link>
						</UnorderedList>
						<Button justifyContent={'center'} display='flex' alignItems={'center'} 
							textAlign={'center'} p='1vw' borderRadius={50} color={'#010208'} mr={['0px','50px']} h={'auto'} fontSize={['12px','1.5vw']}>
							<LinkRouter to='/contact'>CONTACT ME</LinkRouter>
						</Button>
					</Box>
				</Box>
				<Routes>
					<Route path="/" element={<Home />} >
						<Route index element={<Home />} />
					</Route>
					<Route path="/about" element={<About />}/>
					<Route path="/skills" element={<Skills />}/>
					<Route path="/projects" element={<Projects />}/>
					<Route path="/portfolioLandEnd" element={<PortfolioLandEnd />}/>
					<Route path="/contact" element={<Contact />}/>
				</Routes>
			</ChakraProvider>
		</React.StrictMode>
	</BrowserRouter>
	
);
