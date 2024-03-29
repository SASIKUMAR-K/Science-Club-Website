import Navbar from './Navbar';
import GallaryCarosal from './GallaryCarosal';
import eventsData from './data.json'; // Import your events data
import './css/gallaryPage.css';
import Preloader from './PreLoader';

const GallaryPage = () => {
	// Transform image URLs for each event's gallery
	const transformImageUrls = (gallary) => {
		const { path, fileType, max } = gallary;
		const transformedImages = [];

		for (let index = 1; index <= max; index++) {
			transformedImages.push({
				original: `${path}${index}.${fileType}`,
				thumbnail: `${path}${index}.${fileType}`,
				originalHeight: 400,
				originalWidth: 400,
			});
		}

		return transformedImages;
	};

	return (
		<div>
			<Preloader />
			<Navbar navState={true} />

			{Object.keys(eventsData.events).map((eventKey) => {
				const eventData = eventsData.events[eventKey];
				const transformedImages = transformImageUrls(eventData.gallary);

				return (
					<div key={eventKey} className='gallaryPageContainer'>
						<div className='gallaryPageEventName'>{eventData.name}</div>
						<div className='gallaryPageEventShortDesc'>{eventData.short}</div>
						<GallaryCarosal
							className='gallaryPageCarosal'
							images={transformedImages}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default GallaryPage;
