import React from "react";
import {
	Box,
	Button,
	ChakraProvider,
	Circle,
	Flex,
	Image,
	ListItem,
	Link,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import createRoot from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./pages/all";
import Contact from "./pages/contact";
import { theme } from "./theme";
import Skills from "./pages/skills";
import About from "./pages/about";
import Projects from "./pages/projects";
import PortfolioLandEnd from "./pages/portifolioLand";

import ReactDOM from "react-dom";
import {
	BrowserRouter,
	Routes,
	Route,
	Link as LinkRouter,
} from "react-router-dom";
import All from "./pages/all";
import HomeStayOne from "./pages/newPage/group/stayOne/_home";
import AppCar from "./pages/newPage/group/carRen/AppCar";
import QueimaaDeGordura from "./pages/newPage/product/queimaaDeGordura";
import QueimaaDeGorduraVideo from "./pages/newPage/product/queimaaDeGorduraVideo";
import ProFitness from "./pages/newPage/product/proFitness";
import FirstSeller from "./pages/newPage/product/FirstSeller";
import { Netflix } from "./pages/newPage/netflix";

import { TopSection } from "./pages/newPage/group/carRen/app/containers/HomePage/topSection";
import { Airbnb } from "./pages/newPage/airbnb";
import { DropBox } from "./pages/newPage/dropbox";

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<link
					rel="shortcut icon"
					type="image/x-icon"
					href="/78-pig/logo.jpg"
				/>

				<Routes>
					<Route path="/" element={<All />}>
						<Route index element={<All />} />
					</Route>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects" element={<Projects />} />
					<Route
						path="/portfolio/portfolioLandEnd"
						element={<PortfolioLandEnd />}
					/>
					<Route path="/contact" element={<Contact />} />
					<Route
						path="/atayOne/homeStayOne"
						element={<HomeStayOne />}
					/>

					<Route
						path="/QueimaaDeGordura"
						element={<QueimaaDeGordura />}
					/>
					<Route
						path="/QueimaaDeGordura/QueimaaDeGorduraVideo"
						element={<QueimaaDeGorduraVideo />}
					/>
					<Route path="/seller/proFitness" element={<ProFitness />} />
					<Route path="/firstSeller" element={<FirstSeller />} />

					<Route path="/appCar" element={<AppCar />} />
					<Route path="/netflix" element={<Netflix />} />
					<Route path="/dropbox" element={<DropBox />} />
					<Route path="/airbnb" element={<Airbnb />} />

					<Route
						path="*"
						element={
							<div className="text-[10rem] text-black">
								nada aqui
							</div>
						}
					/>
				</Routes>
			</ChakraProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById("root")
);
