import { HeaderLinks, HeaderTopLinks } from "../database/header";
export const Header = () => {
	return (
		<div className="relative overflow-hidden tl-bg-peanut-dark max-w-[100vw]">
			<header className="z-10 flex flex-col w-[100vw] px-4 md:px-12 !relative">
				<div className="flex w-[100%] items-center justify-center pt-6 flex-nowrap md:justify-end">
					{HeaderTopLinks.map((link, index) => (
						<a key={index} href={link.path}>
							<a
								className="ml-10 text-xs text-[#596275] hover:text-[#303952] flex items-center justify-center"
								href={link.path}
							>
								{link.name}
							</a>
						</a>
					))}
				</div>

				<div className="flex items-center pt-6 flex-nowrap w-[100%]">
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
						{HeaderLinks.map((link, index) => (
							<a key={index} href={link.path}>
								<a
									className="h-10 px-4 mr-2 rounded-md text-[#303952] hover:bg-slate-100/30 flex items-center justify-center"
									href={link.path}
								>
									{link.name}
								</a>
							</a>
						))}

						<div className="w-[1px] h-8 bg-[#303952] mr-8"></div>

						<a
							className="text-gray-900 bg-blue-500 tl-outlined-button"
							href="https://play.townland.xyz"
						>
							Enter the world
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};
