import React from 'react';
import styled from 'styled-components';

import './App.css';

import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
	${`flex flex-col w-full h-full `}
`;

function AppCar() {
	return (
		<AppContainer>
			<HomePage />
		</AppContainer>
	);
}

export default AppCar;
