/* eslint-disable @next/next/no-img-element */

export const Footer = () => {
	return (
		<footer className="flex flex-col px-[5vw] pt-[50px] pb-[20px]">
			<div className="md:flex flex-nowrap">
				<div className="flex flex-col w-full md:w-3/12 min-h-[250px]">
					<div className="flex items-center flex-nowrap">
						<div className="w-[75px] h-[75px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
						<div className="flex flex-col ml-[10px]">
							<strong className="text-xl text-slate-900">
								Townland
							</strong>
							<span className="text-sm text-slate-500">
								Your 2D RP world
							</span>
						</div>
					</div>
					<p className="p-5 mt-2 text-gray-700 text-gl">
						A two-dimensional world where people play a role and
						collect items in a blockchain.
					</p>
				</div>
				<div className="flex-1"></div>

				<div className="flex flex-col w-full md:w-3/12 min-h-[250px]">
					<strong className="mb-4 text-xl text-gray-900">
						Subscribe to our newsletter
					</strong>
					<div className="flex items-center flex-nowrap">
						<div className="mr-3 tl-input-container">
							<input
								type="email"
								placeholder="E.g. mail@townland.xyz"
								className="text-sm"
							/>
						</div>
						<button className="text-sm text-white whitespace-pre bg-yellow-500 tl-flat-button">
							More Events
						</button>
					</div>
					<div className="flex-1"></div>
					<strong className="hidden mb-4 text-gray-900 md:block text-gl">
						Follow us
					</strong>
				</div>
			</div>
			<div className="w-full h-[1px] bg-slate-300"></div>
			<div className="flex mt-3 flex-nowrap">
				&copy; {new Date().getFullYear()} with{" "}
				<span className="px-2 font-bold text-red-500">LOVE</span> by
				Townland
				<div className="flex-1"></div>
			</div>
		</footer>
	);
};
