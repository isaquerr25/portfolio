import React, { useState } from "react";
import {
	faCalendarAlt,
	faCaretDown,
	faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

import Calendar from "react-calendar";

import { Button } from "../button";
import { Marginer } from "../marginer";

import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = `
	min-h-[4.5em]
	shadow-md
	
	
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    py-1
    px-2
    md:py-2
    md:px-9

`;

const ItemContainer = `
	flex relative
`;

const Icon = `

    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  
`;

const SmallIcon = `

    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1

`;

const Name = `
	
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
 
`;

const LineSeperator = `
	w-[2px]
	h-[2rem]
	
    bg-gray-300
    mx-3
    md:mx-5
  
`;

export function BookCard() {
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
	const [returnDate, setReturnDate] = useState<Date>(new Date());
	const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

	const toggleStartDateCalendar = () => {
		setIsStartCalendarOpen(!isStartCalendarOpen);
		if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
	};

	const toggleReturnDateCalendar = () => {
		setIsReturnCalendarOpen(!isReturnCalendarOpen);
		if (isStartCalendarOpen) setIsStartCalendarOpen(false);
	};

	return (
		<div className={CardContainer}>
			<div className={ItemContainer}>
				<span className={Icon}>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</span>
				<span className={Name} onClick={toggleStartDateCalendar}>
					Pick Up Date
				</span>
				<span className={SmallIcon}>
					<FontAwesomeIcon
						icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
					/>
				</span>
				{isStartCalendarOpen && (
					<Calendar
						className={`
					absolute
					top-[2em]
					left-[1rem]
					!max-w-[80vw]
					!w-[20rem]
					text-[black]
					${({ offset }: any) =>
						offset &&
						css`
								left[2em];
							`}
						md:top: 3.5em;
						md:left: -2em;
	
`}
						value={startDate}
						onChange={setStartDate as any}
					/>
				)}
			</div>
			<span className={LineSeperator} />
			<div className={ItemContainer}>
				<span className={Icon}>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</span>
				<span className={Name} onClick={toggleReturnDateCalendar}>
					Return Date
				</span>
				<span className={SmallIcon}>
					<FontAwesomeIcon
						icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
					/>
				</span>
				{isReturnCalendarOpen && (
					<Calendar
						className={`
							absolute
							top-[2em]
							left-[-5rem]
							!max-w-[80vw]
							!w-[20rem]
							text-[black]
							${({ offset }: any) =>
								offset &&
								css`
										left[2em];
									`}
								md:top: 3.5em;
								md:left: -2em;
			
        `}
						value={returnDate}
						onChange={setReturnDate as any}
						showDoubleView={false}
					/>
				)}
			</div>
			<Marginer direction="horizontal" margin="2em" />
			<div className=" ml-[1.8rem]">
				<Button text="Book Your Ride" />
			</div>
		</div>
	);
}
