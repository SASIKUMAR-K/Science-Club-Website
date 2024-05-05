import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import eventsData from './data.json';
import GallaryCarosal from './GallaryCarosal';

import './css/viewMore.css';
import PreLoader from './PreLoader';
import EventCard from './EventCard';
import CopyRights from './CopyRights';

const ViewMore = () => {
	const { shortName } = useParams();
	const eventData = eventsData.events[shortName];

	if (!eventData) {
		return <div>Event not found</div>;
	}
	const transformImageUrls = (winnerImageUrls) => {
		const { path, fileType, max } = winnerImageUrls;

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
	const transformedWinnerImages = transformImageUrls(eventData.winners);
	const transformedGallaryImages = transformImageUrls(eventData.gallary);
	return (
		<>
			<PreLoader />
			<Navbar navState={true} />
			<div className='viewMoreMainContainer'>
				<div className='viewMoreEventNameandShortDesc'>
					<div className='viewMoreEventName'>{eventData.name}</div>
					<div className='viewMoreShortDesc'>{eventData.short}</div>
				</div>
				<EventCard
					key={eventData.name}
					posterUrl={eventData.img}
					eventDesc={eventData.desc}
					eventDate={eventData.date}
					eventTime={eventData.time}
					eventVenue={eventData.venue}
					isEventRegisterOpen={eventData.isOpen}
					isUpcomingEvent={eventData.isFuture}
				/>
				{eventData.note && (
					<div className='viewMoreeventCardNote'>
						<div className='viewMoreNoteHead'>Note</div>
						{eventData.note.map((note, index) => (
							<div key={index} className='viewMoreNoteList'>
								{note}
							</div>
						))}
					</div>
				)}

				<div className='viewMoreOrganizerCoorNum'>
					{eventData.organizer && (
						<div className='viewMoreOrganizers'>
							<div className='viewMoreOrgHead'>Organizer</div>
							<div className='viewMoreOrgContainer'>
								{eventData.organizer.map((organizer, index) => (
									<div key={index} className='viewMoreOrganizerList'>
										{organizer}
									</div>
								))}
							</div>
						</div>
					)}
					{eventData.coordinators && (
						<div className='viewMoreCoordinators'>
							<div className='viewMoreOrgHead'>Coordinator</div>
							<div className='viewMoreOrgContainer'>
								{eventData.coordinators.map((coordinator, index) => (
									<div key={index} className='viewMoreCoordinatorsList'>
										{coordinator}
									</div>
								))}
							</div>
						</div>
					)}
					{eventData.number && (
						<div className='viewMoreContactNumber'>
							<div className='viewMoreOrgHead'>Contact</div>
							<div className='viewMoreContactContainer'>
								{eventData.number.map((number, index) => (
									<div key={index} className='viewMoreContactNumberList'>
										{number}
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				{eventData.winners && (
					<div className='viewMoreWinner'>
						<div className='viewMoreWinnerHead'>WINNERS</div>
						<GallaryCarosal
							className='viewMoreWinnerCarosal'
							images={transformedWinnerImages}
						/>
					</div>
				)}

				{eventData.gallary && (
					<div className='viewMoreWinner'>
						<div className='viewMoreWinnerHead viewMoreGallary'>GALLERY</div>
						<GallaryCarosal
							className='viewMoreWinnerCarosal'
							images={transformedGallaryImages}
						/>
					</div>
				)}
			</div>
			<CopyRights />
		</>
	);
};

export default ViewMore;
