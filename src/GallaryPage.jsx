import GallaryCarosal from './GallaryCarosal';
import imageData from './gallaryData.json';
import Navbar from './Navbar';
import './css/gallaryPage.css';
const GallaryPage = () => {
	return (
		<div>
			<Navbar />
			<div className='GallaryPageHeading'>SOS</div>
			<GallaryCarosal images={imageData.sos} />
			<div className='GallaryPageHeading'>School on Wheels</div>
			<GallaryCarosal images={imageData['sov-1-mar-14-2024']} />
		</div>
	);
};

export default GallaryPage;
