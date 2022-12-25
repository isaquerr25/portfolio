import React from "react";
import styled from "styled-components";

import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

const TopCarsContainer = `
	${`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    px-4
    md:px-0
    mb-10
  `}
`;

const Title = `
	${`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = `
	
    w-[100vw]
    flex
    flex-wrap

	justify-center
    mt-7
    md:mt-10

`;

export function TopCars() {
	const testCar: ICar = {
		name: "Audi S3 Car",
		mileage: "10k",
		thumbnailSrc:
			"https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
		dailyPrice: 70,
		monthlyPrice: 1600,
		gearType: "Auto",
		gas: "Petrol",
	};

	const testCar2: ICar = {
		name: "HONDA cITY 5 Seater Car",
		mileage: "20k",
		thumbnailSrc:
			"https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
		dailyPrice: 50,
		monthlyPrice: 1500,
		gearType: "Auto",
		gas: "Petrol",
	};

	return (
		<div className={TopCarsContainer}>
			<text className={Title}>Explore Our Top Deals</text>
			<div className={CarsContainer}>
				<Car {...testCar} />
				<Car {...testCar} />
				<Car {...testCar2} />
			</div>
		</div>
	);
}
