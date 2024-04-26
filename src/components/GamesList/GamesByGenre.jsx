import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesByGenre() {
	const { genreId, genreSlug } = useParams();
	const [games, setGames] = useState();
	const [pageNumber, setpageNumber] = useState(1);
	const [sort] = useOutletContext();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreId}&ordering=${sort}&page=${pageNumber}`
				);
				const datas = await response.json();
				console.log(datas);
				setGames(datas.results);
				// setNextPage(datas)
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [sort]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			console.log(window.scrollY);
			let scrollY = window.scrollY;
			let bodyHeight = document.body.offsetHeight;
			console.log(document.body.offsetHeight);
			if (scrollY == bodyHeight - 200) {
				console.log('infinite');
			}
		});

		// return () => {
		// 	window.removeEventListener('scroll', () )
		// }
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	function handleNextPage(games) {
		console.log('handlenextpage');
		setNextPage(games.next);
	}

	return (
		<>
			<div className="games">
				<h1>{genreSlug}</h1>
				<ul className="games__list">
					{games.map((game) => (
						<li key={game.id}>
							<Card game={game} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
