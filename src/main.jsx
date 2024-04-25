import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Game from './pages/Game';
import ErrorPage from './pages/ErrorPage.jsx';
import './index.scss';
import BestOf from './components/GamesList/BestOf.jsx';
import GamesList from './components/GamesList/GamesList.jsx';
import NewReleases from './components/GamesList/NewReleases.jsx';
import NextReleases from './components/GamesList/NextReleases.jsx';
import GamePage from './components/Game/GamePage';

console.log(import.meta.env.VITE_API_KEY);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <GamesList />,
			},
			{
				path: '/best-of',
				element: <BestOf />,
			},
			{
				path: '/new-releases',
				element: <NewReleases />,
			},
			{
				path: '/next-releases',
				element: <NextReleases />,
			},
		],
	},
	{
		path: '/game/:gameId',
		element: <Game />,
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
