import Navbar from './Navbar';
import RecentContainer from './RecentContainer';
import './css/app.css';
import ImageCarosal from './ImageCarosal';
import AboutClubHome from './AboutClubHome';
import AboutSistHome from './AboutSistHome';
import CopyRights from './CopyRights';
import PreLoader from './PreLoader';
function HomePage() {
	const images = [
		'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
		'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	];
	return (
		<>
			<PreLoader />
			<Navbar />
			<RecentContainer />
			<ImageCarosal images={images} />
			<AboutClubHome />
			<AboutSistHome />
			<CopyRights />
		</>
	);
}

export default HomePage;
