import React from "react";
import styled from "styled-components";

import { Logo } from "../logo";
import { NavItems } from "./navItems";

const NavbarContainer = `
    min-h-[68px]
        w-full max-w-screen-2xl        flex  flex-row
        items-center
        lg:px-12
        justify-between
    
`;

const LogoContainer = ``;

export function Navbar() {
	return (
		<div
			className={`
      
        min-h-[68px]
    
        w-full
        max-w-[100vw]
        flex
        flex-row
        items-center
        lg:px-12
        justify-between
    
`}
		>
			<div className={LogoContainer}>
				<Logo />
			</div>
			<NavItems />
		</div>
	);
}
