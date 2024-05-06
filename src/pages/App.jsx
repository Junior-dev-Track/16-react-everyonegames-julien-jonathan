import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Sorting from '../components/Sorting/Sorting';
import Filters from '../components/Filters/Filters';

export const GameContext = createContext();

export default function App() {
	const [sort, setSort] = useState('-rating');
	const [filter, setFilter] = useState({ type: '', id: 0, name: '' });
	const [gameList, setGameList] = useState('');
	const [activeSort, setActiveSort] = useState('');
	const [activeFilter, setActiveFilter] = useState('');
	const list = 'genres';

	const handleSort = (e) => {
		if (e.target.classList.contains('active')) {
			activeSort.classList.remove('active');
			setSort('');
			setActiveSort('');
		} else {
			activeSort == ''
				? null
				: activeSort.classList.contains('active')
				? activeSort.classList.remove('active')
				: activeSort.classList.remove('active');
			e.target.classList.add('active');
			setSort(e.target.value);
			setActiveSort(e.target);
		}
	};

	const handleFilter = (e) => {
		if (
			e.target.parentElement.getAttribute('data-filter-type') == 'delete' ||
			e.target.classList.contains('active')
		) {
			setActiveFilter('');
			activeFilter.classList.remove('active');
			setFilter({
				...filter,
				type: '',
				id: 0,
				name: '',
			});
		} else {
			activeFilter == '' ? null : activeFilter.classList.remove('active');
			e.target.classList.add('active');
			setActiveFilter(e.target);
			setFilter({
				...filter,
				id: e.target.parentElement.getAttribute('data-filter-platform'),
				name: e.target.parentElement.getAttribute('data-filter-name'),
				type: e.target.parentElement.getAttribute('data-filter-type'),
			});
		}
	};

	const handleGameList = (e) => {
		let newList = e.target.parentElement.getAttribute('data-game-list');
		setGameList(newList);
	};

	return (
		<>
			<div className='container news'>
				<Navbar />
				<GameContext.Provider value={{ handleFilter, handleGameList }}>
					<Sorting handleSort={handleSort} />
					<Filters handleFilter={handleFilter} />
					<Search />
					<Outlet context={[sort, filter, gameList, list]} />
				</GameContext.Provider>
			</div>
		</>
	);
}
