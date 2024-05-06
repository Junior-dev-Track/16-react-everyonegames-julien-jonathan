import { useContext, useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY;
import PlatformsLogo from '../GamesList/Card/PlatformsLogo';
import { GameContext } from '../../pages/App';

import { TiDelete } from 'react-icons/ti';

export default function Filters() {
	const [platforms, setPlatforms] = useState([]);

	useEffect(() => {
		console.log('useeffect filters');
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
				);
				const datas = await response.json();
				console.log(datas);
				// setNextPage(datas.next)
				setPlatforms(datas.results);
				// setGames(datas);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const { handleFilter } = useContext(GameContext);

	return (
		<>
			<div className='filters'>
				<h3>Platform</h3>
				<ul className='filters__platforms'>
					{platforms.map((platform) => (
						<li
							key={platform.id}
							data-filter-type='parent_platforms'
							data-filter-platform={platform.id}
							data-filter-name={platform.name}
						>
							<button
								className='filter__button'
								key={platform.id}
								onClick={handleFilter}
							>
								<PlatformsLogo platform={platform.name} />
							</button>
						</li>
					))}
					<li data-filter-type='delete' onClick={handleFilter}>
						<button className='filter__button filter__button-delete'>
							<TiDelete />
						</button>
					</li>
				</ul>
			</div>
		</>
	);
}
