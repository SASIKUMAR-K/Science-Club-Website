import Navbar from './Navbar';
import RecentContainer from './RecentContainer';
import './css/app.css';
import AboutClubHome from './AboutClubHome';
import AboutSistHome from './AboutSistHome';
import CopyRights from './CopyRights';
import PreLoader from './PreLoader';
import data from './data.json';
import { useEffect } from 'react';

function HomePage() {
	useEffect(() => {
		document.title = 'Science Club • Home';
	}, []);
	const recentEventNames = data.home.recent;

	// Filtering events based on recent event names
	const recentEvents = recentEventNames.map(
		(eventName) => data.events[eventName]
	);

	// Rendering recent events
	return (
		<>
			<PreLoader />
			<Navbar navState={true} />
			<RecentContainer recentEvents={recentEvents} />
			<AboutClubHome />
			<AboutSistHome />
			<CopyRights />
		</>
	);
}

export default HomePage;
