import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Filters from '../components/Filters/Filters';

function App() {
	return (
		<>
			<Navbar />
			<Filters />
			<Search />
			<Outlet />
		</>
	);
}

export default App;
