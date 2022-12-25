import React from "react";
import styled from "styled-components";

interface IButtonProps {
	theme?: "filled" | "outlined";
	text: string;
	className?: string;
}

const BaseButton = `
	${`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-xs
  
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    ease-in-out
    m-1
    w-[100%]

    font-[800]
  `}
`;

const OutlinedButton = `
bg-red-500
hover:bg-transparent
hover:text-red-500
hover:border-red-500
	${BaseButton}
`;

const FilledButton = `
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent  
	${BaseButton}
`;

export function Button(props: IButtonProps) {
	const { theme, text, className } = props;

	if (theme === "filled") {
		return <button className={FilledButton + className}>{text}</button>;
	}

	return <button className={OutlinedButton + className}>{text}</button>;
}
