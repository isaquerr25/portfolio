import React from 'react';
import styled from 'styled-components';

import './App.css';

import { HomePage } from './app/containers/HomePage';

const AppContainer = `
	${`flex flex-col w-full h-full  bg-white`}
`;

function App() {
	return (
		<div
			className={`
		flex flex-col w-full h-full  bg-white
		`}
		>
			<HomePage />
		</div>
	);
}

export default App;
