import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useWindowDimensions from "./size";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const renderTime = (dimension: any, time: any) => {
	return (
		<div className="time-wrapper">
			<div className="time">{time}</div>
			<div>{dimension}</div>
		</div>
	);
};

const getTimeSeconds = (time: any) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: any) =>
	((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: any) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: any) => (time / daySeconds) | 0;

interface typeTimerCircleElement {
	secondEnable?: boolean;
	minutesEnable?: boolean;
	hoursEnable?: boolean;
	dayEnable?: boolean;
	startTimeInSecond: number;
}

export default function TimerCircleElement({
	secondEnable,
	minutesEnable,
	hoursEnable,
	dayEnable,
	startTimeInSecond,
}: typeTimerCircleElement) {
	const { height, width } = useWindowDimensions();

	let timerProps = {
		isPlaying: true,
		size: 120,
		strokeWidth: 6,
	};
	useEffect(() => {
		timerProps =
			(width ?? 100) > 1100
				? {
						isPlaying: true,
						size: 2000,
						strokeWidth: 6,
				  }
				: {
						isPlaying: true,
						size: 2000,
						strokeWidth: 6,
				  };
	});
	useEffect(() => {
		timerProps =
			(width ?? 100) > 1100
				? {
						isPlaying: true,
						size: 2000,
						strokeWidth: 6,
				  }
				: {
						isPlaying: true,
						size: 2000,
						strokeWidth: 6,
				  };
	}, [width]);
	const remainingTime = startTimeInSecond;
	const days = Math.ceil(remainingTime / daySeconds);
	const daysDuration = days * daySeconds;

	return (
		<div className="timeBegin gap-x-[0.2rem] flex  items-center justify-center mt-[1rem] text-center">
			{dayEnable && (
				<CountdownCircleTimer
					isPlaying={true}
					size={(width ?? 100) > 1100 ? 120 : 105}
					strokeWidth={6}
					colors="#7E2E84"
					duration={daysDuration}
					initialRemainingTime={remainingTime}
				>
					{({
						elapsedTime,
						color,
					}: {
						elapsedTime: any;
						color: any;
					}) => (
						<span style={{ color }}>
							{renderTime(
								"days",
								getTimeDays(daysDuration - elapsedTime)
							)}
						</span>
					)}
				</CountdownCircleTimer>
			)}
			{hoursEnable && (
				<CountdownCircleTimer
					isPlaying={true}
					size={(width ?? 100) > 1100 ? 120 : 105}
					strokeWidth={6}
					colors="#D14081"
					duration={daySeconds}
					initialRemainingTime={remainingTime % daySeconds}
					onComplete={(totalElapsedTime) => ({
						shouldRepeat:
							remainingTime - totalElapsedTime > hourSeconds,
					})}
				>
					{({
						elapsedTime,
						color,
					}: {
						elapsedTime: any;
						color: any;
					}) => (
						<span style={{ color }}>
							{renderTime(
								"Horas",
								getTimeHours(daySeconds - elapsedTime)
							)}
						</span>
					)}
				</CountdownCircleTimer>
			)}
			{minutesEnable && (
				<CountdownCircleTimer
					isPlaying={true}
					size={(width ?? 100) > 1100 ? 120 : 105}
					strokeWidth={6}
					colors="#EF798A"
					duration={hourSeconds}
					initialRemainingTime={remainingTime % hourSeconds}
					onComplete={(totalElapsedTime) => ({
						shouldRepeat:
							remainingTime - totalElapsedTime > minuteSeconds,
					})}
				>
					{({ elapsedTime, color }) => (
						<span style={{ color }}>
							{renderTime(
								"minutos",
								getTimeMinutes(hourSeconds - elapsedTime)
							)}
						</span>
					)}
				</CountdownCircleTimer>
			)}
			{secondEnable && (
				<CountdownCircleTimer
					isPlaying={true}
					size={(width ?? 100) > 1100 ? 120 : 105}
					strokeWidth={6}
					colors="#218380"
					duration={minuteSeconds}
					initialRemainingTime={remainingTime % minuteSeconds}
					onComplete={(totalElapsedTime) => ({
						shouldRepeat: remainingTime - totalElapsedTime > 0,
					})}
				>
					{({ elapsedTime, color }) => (
						<span style={{ color }}>
							{renderTime(
								"segundos",
								getTimeSeconds(elapsedTime)
							)}
						</span>
					)}
				</CountdownCircleTimer>
			)}
		</div>
	);
}
