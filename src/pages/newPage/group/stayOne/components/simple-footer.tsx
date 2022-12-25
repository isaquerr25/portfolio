import React from "react";
export const SimpleFooter = () => {
	return (
		<footer className="hidden md:flex flex-nowrap items-center mt-auto px-[5vw] py-[30px]">
			<a href="/">
				<a className="flex items-center justify-center mx-5 text-ms text-slate-500 hover:text-blue-600">
					Home
				</a>
			</a>

			<a href="/atayOne/homeStayOne">
				<a
					className="flex items-center justify-center mx-5 text-ms text-slate-500 hover:text-blue-600"
					href="/atayOne/homeStayOne"
				>
					Market Place
				</a>
			</a>

			<a href="/atayOne/homeStayOne">
				<a
					className="flex items-center justify-center mx-5 text-ms text-slate-500 hover:text-blue-600"
					href="/atayOne/homeStayOne"
				>
					Events
				</a>
			</a>

			<a href="/atayOne/homeStayOne">
				<a
					className="flex items-center justify-center mx-5 text-ms text-slate-500 hover:text-blue-600"
					href="/atayOne/homeStayOne"
				>
					Blog
				</a>
			</a>

			<div className="flex-1"></div>

			<span className="ml-3 text-ms text-slate-600">
				&copy; 2022 Townland
			</span>
		</footer>
	);
};
