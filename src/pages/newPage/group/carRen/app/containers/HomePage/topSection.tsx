import React from "react";
import styled from "styled-components";

import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";

const TopSectionContainer = `
	min-height: 400px;
	margin-top: 6em;
	${`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    px-3
    lg:px-12
	xl:mt-[7rem]
  `}
`;

const LeftContainer = `
	${`
	w-[70vw]
    sm:w-[50vw]
    flex
    flex-col
  `}
`;

const RightContainer = `
	${`
    md:w-[50vw]
    flex
    flex-col
    relative
    mt-20
  `}
`;

const Slogan = `
	
    font-bold
    text-2xl
    text-black
    mb-4
    sm:text-3xl
 
    md:text-5xl
    md:font-extrabold
    lg:font-black
    
    xl:text-[3.5rem]

	
`;

const Description = `
	
    text-xs
    overflow-hidden
    max-h-12
    text-gray-800
    sm:max-h-full
    lg:text-sm
    xl:text-[0.98rem]
	
`;

const BlobContainer = `
absolute
	w-[20em]
	h-[10em]
	absolute;
	right-[-5em]
	top-[-9em]
	z-[1]
	
	rotate-[-30deg]
	
	h-[auto]
	w-[100%]
	max-h-[max-content]
	
	sm:w-[40em]
	sm:max-h-[10em]
	sm:right-[-9em]
	sm:top-[-16em]
	sm:rotate-[-25deg]

	lg:w-[50em]
	lg:max-h-[30em]
	lg:right-[-7em]
	lg:top-[-15em]
	lg:rotate-[-30deg]

	xl:w-[50rem]
	xl:max-h-[30em]
	xl:right-[-11em]
	xl:top-[-17em]
	xl:rotate-[-20deg]


`;

const StandaloneCar = `
	w-[20rem]
	h-[auto]
	absolute
	right-[-5em]
	top-[-6em]

	md:h-[16em]
	md:right-[-6em]
	md:top-[-6em]

	lg:h-[21em]
	lg:right-[-8em]
	lg:top-[-5em]


	xl:h-[auto]
	xl:w-[40rem]
	xl:right-[-9em]
	xl:top-[-em]
	z-[2]
`;

const ButtonContainer = `
	
    flex
    flex-wrap
	md:flex-nowrap
    mt-4
	w-[20rem]
`;

export function TopSection() {
	return (
		<div className={TopSectionContainer}>
			<div className={LeftContainer}>
				<text className={Slogan}>
					Rent The Best <br /> Quality Car's <br /> With Us
				</text>
				<text className={Description}>
					Always choose the best car from our local stores or order it
					remotely at the best price for you and get the best quality
					cars for as long as as you like
				</text>

				<div className={ButtonContainer}>
					<Button text="Book Your Ride" />
					<Button theme="filled" text="Sell Your Car" />
				</div>
			</div>
			<div className={RightContainer}>
				<div className={BlobContainer}>
					<img src={BlobImg} alt="" />
				</div>
				<div className={StandaloneCar}>
					<img src={MclarenCarImg} alt="" />
				</div>
			</div>
		</div>
	);
}
