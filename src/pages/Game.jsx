import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import GamePage from '../components/Game/GamePage';

export default function Game() {



	return (
		<>
			<div className="container game">
			<Navbar />
			<GamePage />
			</div>
		</>
	);
}


