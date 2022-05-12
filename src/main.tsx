import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Home from './pages/home';
import Contact from './pages/contact';
import { ChakraProvider ,extendTheme } from '@chakra-ui/react';
import { theme } from './theme';
import Skills from './pages/skills';
import About from './pages/about';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<About />
		</ChakraProvider>
	</React.StrictMode>
);
