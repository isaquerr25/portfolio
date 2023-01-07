import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { css } from "styled-components";

import { slide as Menu } from "react-burger-menu";

import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = `
	${`
    flex
    list-none
	!text-[white]
  `}
`;

const NavItem = (menu?: boolean) => `
	${`
    text-xs
    md:text-base
    text-[white]
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}

	${({ menu }: { menu?: boolean }) =>
		menu &&
		css`
			${`
        text-[white]
        md:text-[black]
        text-xl
        mb-3
        focus:text-[white]
      `}
		`}
`;

export function NavItems() {
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	if (isMobile) {
		return (
			<Menu right styles={menuStyles}>
				<ul className={ListContainer}>
					<li className={NavItem(true)}>
						<a href="/">Home</a>
					</li>
					<li className={NavItem(true)}>
						<a href="/">Cars</a>
					</li>
					<li className={NavItem(true)}>
						<a href="/">Services</a>
					</li>
					<li className={NavItem(true)}>
						<a href="/">Contact Us</a>
					</li>
				</ul>
			</Menu>
		);
	}

	return (
		<ul className={ListContainer}>
			<li className={NavItem(false)}>
				<a href="/">Home</a>
			</li>
			<li className={NavItem(false)}>
				<a href="/">Cars</a>
			</li>
			<li className={NavItem(false)}>
				<a href="/">Services</a>
			</li>
			<li className={NavItem(false)}>
				<a href="/">Contact Us</a>
			</li>
		</ul>
	);
}
