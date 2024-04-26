import { useEffect, useState } from 'react';
import Card from './Card/Card';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function GamesList() {
	const [games, setGames] = useState();
	const [pageNumber, setpageNumber] = useState(1);

	const [isLoading, setIsLoading] = useState(true);



	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-04-01,2024-04-24&ordering=-rating`
				);
				const datas = await response.json();
				console.log(datas)
				setGames(datas.results);
				// setNextPage(datas)
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
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
				<h1>New & Trending</h1>
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
