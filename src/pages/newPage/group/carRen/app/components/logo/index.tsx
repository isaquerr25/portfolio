import React from 'react';
import styled from 'styled-components';

import CarLogoImg from '../../../assets/images/car-logo.png';

export function Logo() {
	return (
		<div className='flex items-center'>
			<div
				className={`
        w-[auto]
        ${`h-6 md:h-9`}
      
        img {
          w-[auto]
          h-[100%]
        }
      `}
			>
				<img src={CarLogoImg} alt='Logo' />
			</div>
			<text className='m-1 text-xl font-bold text-black md:text-2xl'>
				Yourcar.
			</text>
		</div>
	);
}
