import React from "react";
import styled from "styled-components";

import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";

import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = `
	${`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    bg-white
  `}
`;

export function HomePage() {
	return (
		<div className={PageContainer}>
			<Navbar />
			<TopSection />
			<Marginer direction="vertical" margin="4em" />
			<BookCard />
			<Marginer direction="vertical" margin="5em" />
			<BookingSteps />
			<Marginer direction="vertical" margin="2em" />
			<AboutUs />
			<Marginer direction="vertical" margin="3em" />
			<TopCars />
		</div>
	);
}
