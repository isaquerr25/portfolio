import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeaturesMovie";
import Header from "./components/Header";
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [movieList, setMovieList] = useState<any>([]);
	const [featureData, setFeatureData] = useState<any>(null);
	const [blackHeader, setBlackHeader] = useState<any>(false);

	useEffect(() => {
		const loadAll = async () => {
			let list = await Tmdb.getHomeList();

			setMovieList(list);

			let originals = await list.filter(
				(i: any) => i.slug === "originals"
			);

			let randomChosen = Math.floor(
				Math.random() * (originals[0].itens.results.length - 1)
			);

			let chosen = originals[0].itens.results[randomChosen];

			let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
			setFeatureData(chosenInfo);
		};
		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 10) {
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		};

		window.addEventListener("scroll", scrollListener);
		return () => {
			window.removeEventListener("scroll", scrollListener);
		};
	}, []);

	return (
		<div className="page">
			<Header black={blackHeader} />
			{featureData && <FeatureMovie item={featureData} />}
			<section className="lists">
				{movieList.map(
					(
						item: { title: any; itens: any },
						key: React.Key | null | undefined
					) => (
						<MovieRow
							key={key}
							title={item.title}
							itens={item.itens}
						/>
					)
				)}
			</section>
			<footer>
				Feito com <span role="img">❤️</span> por Isaque Ribeiro Ferreira{" "}
				<br />
				Direitos de imagem para a Netflix <br />
				Dados do Site pegos da Themoviedb.org
			</footer>
			{movieList.length <= 0 && (
				<div className="loading">
					<img
						src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
						alt="Carregando"
					/>
				</div>
			)}
		</div>
	);
};
