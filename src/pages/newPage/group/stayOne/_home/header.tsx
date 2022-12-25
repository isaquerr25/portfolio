export const Header = () => {
	return (
		<header className="z-10 flex flex-col w-full px-4 md:px-12">
			<div className="flex items-center justify-center pt-6 flex-nowrap md:justify-end"></div>

			<div className="flex items-center pt-6 flex-nowrap">
				<div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
				<div className="flex flex-col ml-[10px]">
					<strong className="text-[#303952] text-md md:text-xl">
						Townland
					</strong>
					<span className="text-[#596275] text-xs md:text-sm">
						Your 2D RP world
					</span>
				</div>

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
		</header>
	);
};
