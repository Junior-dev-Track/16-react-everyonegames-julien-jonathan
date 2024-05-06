import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Game from './pages/Game';
import ErrorPage from './pages/ErrorPage.jsx';
import './index.scss';
import './components/GamesList/utils/dateSearch.js'
import BestOf from './components/GamesList/BestOf.jsx';
import GamesList from './components/GamesList/GamesList.jsx';
import NewReleases from './components/GamesList/NewReleases.jsx';
import NextReleases from './components/GamesList/NextReleases.jsx';
import GamePage from './components/Game/GamePage';
import GamesByGenre from './components/GamesList/GamesByGenre.jsx';
import SearchPage from './components/Search/SearchPage.jsx';

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
			{
				path: '/games/:type/:filterId/:slug',
				element: <GamesByGenre />,
			},
			{
				path: '/search-page',
				element: <SearchPage />,
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
