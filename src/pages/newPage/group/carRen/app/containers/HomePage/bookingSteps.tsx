import React from "react";
import styled from "styled-components";

import {
	faCalendarAlt,
	faCarSide,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = `
	${`
    w-full
    flex
    flex-col
    items-center
    py-3
    lg:py-6
  `}
`;

const Title = `
	${`
    text-3xl
    lg:text-4xl
    text-black
    font-black
  `}
`;

const StepsContainer = `
	${`
    flex
    justify-evenly
    flex-wrap
	md:flex-nowrap
    lg:mt-16
  `}
`;

const StepContainer = `
	${`
    flex
    flex-col
    md:w-[4rem].
	xl:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `}
`;

const Step = `

	shadow-lg
	
    flex
    rounded-lg
    items-center
    justify-center
    p-6

`;

const StepTitle = `
	${`
    text-black
    text-lg
    font-semibold
    mt-4
  `}
`;

const StepDescription = `
	${`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const StepIcon = `
	${`
    text-red-500
    text-3xl
  `}
`;

export function BookingSteps() {
	return (
		<div className={Container}>
			<text className={Title}>Our Working Steps</text>
			<div className={StepsContainer}>
				<div className={StepContainer}>
					<div className={Step}>
						<span className={StepIcon}>
							<FontAwesomeIcon icon={faMapMarkedAlt} />
						</span>
					</div>
					<text className={StepTitle}>Choose Location</text>
					<text className={StepDescription}>
						Find the nearest Yourcar point a book your car.
					</text>
				</div>
				<div className={StepContainer}>
					<div className={Step}>
						<text className={StepIcon}>
							<FontAwesomeIcon icon={faCalendarAlt} />
						</text>
					</div>
					<text className={StepTitle}>Pick-Up Date</text>
					<text className={StepDescription}>
						Pickup the Best Date to rent a car for you
					</text>
				</div>
				<div className={StepContainer}>
					<div className={Step}>
						<text className={StepIcon}>
							<FontAwesomeIcon icon={faCarSide} />
						</text>
					</div>
					<text className={StepTitle}>Book Your Car</text>
					<text className={StepDescription}>
						Book your nice car with ease in one single click
					</text>
				</div>
			</div>
		</div>
	);
}
