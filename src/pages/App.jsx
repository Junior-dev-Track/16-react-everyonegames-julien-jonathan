import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Sorting from '../components/Sorting/Sorting';
import Filters from '../components/Filters/Filters';

export default function App() {
	const handleSort = (e) => {
		console.log('handleFilter');
		console.log(e.target.value);
	};

	return (
		<>
			<div className="container news">
				<Navbar />
				<Sorting handleSort={handleSort} />
				<Filters />
				<Search />
				<Outlet />
			</div>
		</>
	);
}
