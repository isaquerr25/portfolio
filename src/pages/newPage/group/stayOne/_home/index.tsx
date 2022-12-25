import { Events } from './events';
import { Footer } from './footer';
import { Header } from './header';
import { History } from './history';
import { Intro } from './intro';
import { RoadMap } from './roadmap';
import { Sales } from './sales';
import { Start } from './start';

const HomeStayOne = () => {
	return (
		<main
			data-simplebar
			className='!bg-white w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden'
		>
			<head>
				<title>Townland | Your 2D RP World</title>
			</head>
			<div className='tl-bg-peanut-dark relative overflow-hidden'>
				<Header />
				<Intro />
				<div className='absolute -bottom-[6vw] right-0 w-[50vw] h-[50vw] bg-selfers bg-no-repeat bg-center bg-contain'></div>
			</div>
			<Sales />
			<History />
			<RoadMap />
			<Events />
			<Start />
			<Footer />
		</main>
	);
};

export default HomeStayOne;
