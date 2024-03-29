import React from 'react';
import styled from 'styled-components';

interface IMarginerProps {
	margin: number | string;
	direction?: 'horizontal' | 'vertical';
}

const HorizontalMargin = styled.span<IMarginerProps>`
	display: flex;
	min-width: ${({ margin }) =>
		typeof margin === 'string' ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<IMarginerProps>`
	display: flex;
	min-height: ${({ margin }) =>
		typeof margin === 'string' ? margin : `${margin}px`};
`;

export function Marginer(props: IMarginerProps) {
	const { direction } = props;

	if (direction === 'horizontal')
		return <span className={HorizontalMargin} {...props} />;

	return <VerticalMargin {...props} />;
}
