import React from "react";
import styled from "styled-components";

import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = `
	${`
    w-[100vw]
    flex
    flex-wrap
    xl:flex-nowrap
	items-center
    justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `}
`;

const CarContainer = `
	w-[auto]
	h-[15em]
	ml-[-50px]

	img {
		width: auto;
		height: 100%;
	}
	md:h-[28em]
	lg:h-[30em]
	2xl:h-[30em]
	2xl:ml-[0]

`;

const InfoContainer = `
	
    flex
    flex-col
    md:w-[40vw]
    md:ml-6
    2xl:ml-16
  
`;

const Title = `
	
    text-black
    text-2xl
    md:text-[3rem]
    font-extrabold
    md:font-black
    md:leading-normal
 
`;

const InfoText = `
	${`
    md:max-w-xl
    text-[0.94rem]
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
`;

export function AboutUs() {
	return (
		<div className={AboutUsContainer}>
			<img className={CarContainer} src={JeepImg} alt="" />

			<div className={InfoContainer}>
				<text className={Title}>
					Fell The Best Experience With Our Rental Deals
				</text>
				<p className={InfoText}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Repudiandae nesciunt, eveniet fugiat non ipsam libero neque
					est laudantium maiores totam modi minus, delectus illum
					facilis velit quaerat similique voluptate eos. Lorem ipsum
					dolor sit, amet consectetur adipisicing elit. Repudiandae
					nesciunt, eveniet fugiat non ipsam libero neque est
					laudantium maiores totam modi minus, delectus illum facilis
					velit quaerat similique voluptate eos.
				</p>
			</div>
		</div>
	);
}
