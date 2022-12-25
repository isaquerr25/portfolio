import {
	Button,
	Text,
	background,
	ComponentWithAs,
	IconProps,
} from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
	children?: React.ReactNode;
	handleClick?: (args: any) => void;
	disabled?: boolean;
	type?: 'submit';
	style?: React.CSSProperties;
	className?: string;
	href?: string;
	idRef?: string;
	loading?: boolean;
	textModify?: string;
	borderColor?: string;
	bigButton?: boolean;
	medium?: boolean;
	icon?: React.ReactElement;

	rightIcon?: React.ReactElement;
}

const ButtonCustom: React.FC<ButtonProps> = ({
	children,
	handleClick,
	disabled,
	type,
	style,
	className,
	loading,
	href,
	idRef,
	textModify,
	bigButton,
	medium,
	icon,
	rightIcon,
	borderColor,
}) => {
	return medium ? (
		<Button
			disabled={disabled}
			border={'4px'}
			borderColor={borderColor ?? 'yellow'}
			background={'transparent'}
			ref={href}
			variant="outline"
			borderRadius={'.5rem'}
			_selected={{
				background: 'transparent',
			}}
			_pressed={{
				background: 'transparent',
			}}
			_active={{
				bg: 'rgba(255,255,255,0.1)',
			}}
			_hover={{
				background: 'transparent',
				borderRadius: '2xl',
			}}
			_focus={{
				background: 'transparent',
			}}
			id={idRef}
			py={{ base: '2rem', lg: '1.4rem' }}
			className={` flex flex-row justify-center items-center
					px-[5rem]  
					bg-[transparent]
					shadow-lg shadow-[#fffa5b47] hover:shadow-[#fffa5b00] max-w-[100vw] w-[15rem] lg:w-[12rem] ${className}`}
			type={type}
			onClick={handleClick}
			style={style}
			leftIcon={icon}
			rightIcon={rightIcon}
			fontSize={{ base: '2.5rem', lg: '2rem', xl: '1.5rem' }}
		>
			<div
				className={`flex flex-row justify-center items-center ${
					loading && 'cursor-no-drop'
				}`}
			>
				<Text
					className={
						'font-bold text-white text-[2.5rem] lg:text-[2rem] xl:text-[1.5rem] ' +
						textModify
					}
				>
					{children}
				</Text>
				{loading && (
					<svg
						className="relative motion-reduce:hidden animate-spin h-5 w-4 text-white ml-3"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				)}
			</div>
		</Button>
	) : (
		<Button
			leftIcon={icon}
			fontSize={
				bigButton
					? { base: '2.5rem', lg: '2rem', xl: '1.2rem' }
					: { base: '2.5rem', lg: '2rem', xl: '1rem' }
			}
			rightIcon={rightIcon}
			disabled={disabled}
			border={'4px'}
			borderColor={'yellow'}
			background={'transparent'}
			ref={href}
			borderRadius={bigButton ? '2rem' : '.5rem'}
			_selected={{
				background: 'transparent',
			}}
			_pressed={{
				background: 'transparent',
			}}
			_hover={{
				background: 'transparent',
			}}
			_focus={{
				background: 'transparent',
			}}
			id={idRef}
			className={` flex flex-row justify-center items-center
			px-[5rem]  
			${
		bigButton
			? ' w-[28rem] lg:w-[16rem] py-[2.4rem]  lg:py-[1.5rem]'
			: 'py-[1.5rem] lg:py-[1rem]'
		}
			shadow-lg shadow-[#fffa5b47] hover:shadow-[#fffa5b00] max-w-[100vw] ${className}`}
			type={type}
			onClick={handleClick}
			style={style}
		>
			<div
				className={`flex flex-row justify-center items-center ${
					loading && 'cursor-no-drop'
				}`}
			>
				<Text
					className={
						`font-bold text-white  ${
							bigButton
								? 'text-[2.5rem] lg:text-[2rem] xl:text-[1.2rem]  '
								: ' text-[2rem] lg:text-[2rem] xl:text-[1rem]  '
						} ` + textModify
					}
				>
					{children}
				</Text>
				{loading && (
					<svg
						className="relative motion-reduce:hidden animate-spin h-5 w-4 text-white ml-3"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				)}
			</div>
		</Button>
	);
};

export default ButtonCustom;
