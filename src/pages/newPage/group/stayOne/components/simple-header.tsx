export const SimpleHeader = (props: Props) => {
	return (
		<header
			className={`flex flex-col px-4 sm:px-14 pt-6 ${
				props.paddingBottom ?? ""
			} ${props.backgroundColor ?? ""}`}
		>
			<div className="flex items-center flex-nowrap">
				<a href="/">
					<a className="flex items-center flex-nowrap">
						<div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
						<div className="flex flex-col ml-[10px]">
							<strong className="text-[#303952] text-md md:text-xl">
								Townland
							</strong>
							<span className="text-[#596275] text-xs md:text-sm">
								Your 2D RP world
							</span>
						</div>
					</a>
				</a>
				<div className="flex-1"></div>
				<div className="items-center hidden md:flex flex-nowrap">
					<div className="w-[1px] h-8 bg-[#303952] mr-8"></div>

					<a
						className="text-gray-900 bg-blue-500 tl-outlined-button"
						href="/atayOne/homeStayOne"
					>
						Enter the world
					</a>
				</div>
			</div>
			<div className="flex flex-col mt-8 lg:px-16">{props.children}</div>
		</header>
	);
};

interface Props {
	backgroundColor?: string;
	paddingBottom?: string;
	children?: any;
}
