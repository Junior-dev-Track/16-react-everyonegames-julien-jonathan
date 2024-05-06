import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from './Card/Card';
import { nextMonthCalculation } from './utils/dateSearch';
const API_KEY = import.meta.env.VITE_API_KEY;

export default function NextReleases() {
	const [games, setGames] = useState();
	const [pageNumber, setpageNumber] = useState(1);
	const [sort, filter] = useOutletContext();
const [today, nextMonth] = nextMonthCalculation()
	const [isLoading, setIsLoading] = useState(true);


	let url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${today},${nextMonth}&ordering=${sort}&${filter.type}=${filter.id}`;

	useEffect(() => {
		console.log(url)
		
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const datas = await response.json();
				console.log(datas)
				// setNextPage(datas.next)
				setGames(datas.results);
				// setGames(datas);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [sort, filter]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	const handleNextPage = (games) => {
		console.log('handlenextpage');
		setNextPage(games.next);
	};

	const handleInfiniteScroll = () => {
		console.log('handleInfiniteScroll');
	};

	return (
		<>
			<div className='games'>
				<h1>Next releases {filter.name ? ' - ' + filter.name : ''}</h1>
				<ul className='games__list'>
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
