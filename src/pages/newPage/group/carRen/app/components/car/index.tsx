import React from "react";
import styled from "styled-components";

import {
	faEllipsisH,
	faFillDrip,
	faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ICar } from "../../../typings/car";
import { Button } from "../button";

const CarContainer = `
	w-[16.5em] min-h-[21em] max-h-[25em] shadow-xl
	
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  
`;

const CarThumbnail = `
	w-[100%]
	h-[auto]

	img {
		width: 100%;
		height: 100%;
	}
`;

const CarName = `
	${`
    text-base
    font-bold
    text-black
    my-1
  `}
`;

const PricesContainer = `

    w-[100%]
    flex
    justify-start
    mt-3

  
`;

const SmallText = `
	color: inherit;

	${`
    inline-flex
    font-thin
    text-xs
  `}
`;

const DailyPrice = `
	${`
    text-red-500
    font-bold
    text-sm
    mr-3
  `}
`;

const MonthlyPrice = `
	${`
    text-gray-500
    text-sm
    font-bold
  `}
`;

const SmallIcon = `
	${`
    text-gray-400
    text-sm
    mr-1
  `}
`;

const CarDetailsContainer = `
	${`
    flex
    w-full
    justify-between
  `}
`;

const CarDetail = `
	${`
    flex
    items-center
  `}
`;

const CarInfo = `
	${`
    text-gray-400
    text-xs
  `}
`;

const Seperator = `
	min-w-[100%]
	min-h[1px]
    flex
    my-2
  
`;

const RentButton = styled(Button)`
	${`
    min-w-full
    mt-5
	!font-[600]
  `}
`;

export function Car(props: any) {
	const {
		name,
		thumbnailSrc,
		dailyPrice,
		monthlyPrice,
		mileage,
		gearType,
		gas,
	} = props;

	return (
		<div className={CarContainer}>
			<div className={CarThumbnail}>
				<img src={thumbnailSrc} alt="" />
			</div>
			<text className={CarName}>{name}</text>
			<div className={PricesContainer}>
				<text className={DailyPrice}>
					${dailyPrice}
					<p className={SmallText}>/Day</p>
				</text>
				<text className={MonthlyPrice}>
					${monthlyPrice}
					<p className={SmallText}>/Month</p>
				</text>
			</div>
			<div className={Seperator + " bg-gray-300 h-[0.1rem]"} />
			<span className={CarDetailsContainer}>
				<div className={CarDetail}>
					<span className={SmallIcon}>
						<FontAwesomeIcon icon={faTachometerAlt} />
					</span>
					<text className={CarInfo}>{mileage}</text>
				</div>
				<div className={CarDetail}>
					<span className={SmallIcon}>
						<FontAwesomeIcon icon={faEllipsisH} />
					</span>
					<text className={CarInfo}>{gearType}</text>
				</div>
				<div className={CarDetail}>
					<span className={SmallIcon}>
						<FontAwesomeIcon icon={faFillDrip} />
					</span>
					<text className={CarInfo}>{gas}</text>
				</div>
			</span>
			<RentButton text="Rent Now" />
		</div>
	);
}
