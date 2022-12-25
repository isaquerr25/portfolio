/* eslint-disable @next/next/no-img-element */
export function GetDate(from: Date | number): string {
	let date = new Date(from);

	return `${date.getDate()}th ${date.toLocaleString("default", {
		month: "short",
	})} ${date.getFullYear()}`;
}

export const EventItem = (props: Props) => {
	const item = props.item;

	return (
		<div className="flex flex-col bg-white shadow-lg rounded-xl p-[16px] m-[20px] max-w-[350px] overflow-hidden">
			<div className="flex flex-col">
				<h2 className="mt-4 mb-1 text-2xl">{item.title}</h2>
				<span className="text-sm text-gray-500">
					Event start: {GetDate(item.start)}
				</span>
				<span className="text-sm text-gray-500">
					Event end: {GetDate(item.end)}
				</span>

				<p className="mt-2 text-sm text-gray-600">{item.description}</p>
			</div>
		</div>
	);
};

interface Props {
	item: IEventItem;
}

export interface IEventItem {
	image: string;
	title: string;
	start: Date | number;
	end: Date | number;
	description: string;
}
