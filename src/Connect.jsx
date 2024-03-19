import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import GallaryPage from './GallaryPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';

function Connect() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/events' element={<EventsPage />} />
				<Route path='/gallary' element={<GallaryPage />} />
				<Route path='/about' element={<AboutUsPage />} />
				<Route path='/contact' element={<ContactUsPage />} />
			</Routes>
		</Router>
	);
}

export default Connect;
