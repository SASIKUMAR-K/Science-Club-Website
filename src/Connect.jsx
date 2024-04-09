import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import GallaryPage from './GallaryPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import ViewMore from './ViewMore';
import ScrollToTop from './Scroll.jsx';
import CertificatePage from './CertificatePage.jsx';
function Connect() {
	return (
		<>
			<Router>
				<ScrollToTop></ScrollToTop>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/events' element={<EventsPage />} />
					<Route path='/gallary' element={<GallaryPage />} />
					<Route path='/about' element={<AboutUsPage />} />
					<Route path='/contact' element={<ContactUsPage />} />
					<Route
						path='/certificate/:certificateId'
						element={<CertificatePage />}
					/>
					<Route path='/event/:shortName' element={<ViewMore />} />
				</Routes>
			</Router>
		</>
	);
}

export default Connect;
