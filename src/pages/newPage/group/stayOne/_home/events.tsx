/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Lines } from "./lines";

export const Events = () => {
	const Event: IEvent = {
		title: "New event in town",
		description: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		image: "https://picsum.photos/500/300",
		start: Date.now(),
		end: Date.now() + 50000000,
	};

	function GetDate(from: Date | number): string {
		let date = new Date(from);

		return `${date.getDate()}th ${date.toLocaleString("default", {
			month: "short",
		})} ${date.getFullYear()}`;
	}

	return (
		<section className="flex flex-col text-center items-center justify-center relative py-[50px] md:py-[100px] w-screen z-10">
			<h2 className="text-5xl text-slate-800">Townland Events</h2>
			<p className="text-xl text-slate-500 mt-[20px]">
				Big and funny events for each month to earn items.
			</p>
			<div className="relative w-10/12 py-[1rem] md:py-20 lg:flex flex-nowrap">
				<Lines
					color="#0ea5e9"
					className="absolute top-[25px] -left-[65px] rotate-[50deg]"
				/>
				<img
					className="w-full h-full shadow-xl rounded-xl lg:ml-8"
					src={Event.image}
					alt={Event.title}
				/>

				<div className="flex flex-col text-left lg:ml-[4vw] mt-8 lg:mt-2">
					<h3 className="mb-2 text-3xl">{Event.title}</h3>
					<span className="text-sm text-gray-600">
						Event start at: {GetDate(Event.start)}
					</span>
					<span className="text-sm text-gray-600">
						Event end at: {GetDate(Event.end)}
					</span>
					<p className="mt-2 text-gray-800 lg:w-full">
						{Event.description}
					</p>
				</div>
			</div>
			<a href="/atayOne/homeStayOne">
				<a
					className="mt-8 tl-outlined-button bg-violet-500"
					href="/atayOne/homeStayOne"
				>
					<span className="font-bold">More Events</span>
				</a>
			</a>
		</section>
	);
};

interface IEvent {
	title: string;
	description: string;
	image: string;
	start: Date | number;
	end: Date | number;
}
