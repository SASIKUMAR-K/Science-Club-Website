import { useState, useEffect } from 'react';
import './css/eventsPage.css';
import EventCard from './EventCard';
import PreLoader from './PreLoader';
import Navbar from './Navbar';
import CopyRights from './CopyRights';
import upComingWorking from '/img/upComingWorking.gif';
import data from './data.json';

const EventsPage = () => {
	const [upcomingEvents, setUpcomingEvents] = useState([]);
	const [pastEvents, setPastEvents] = useState([]);

	useEffect(() => {
		document.title = 'Science Club • Events';

		const upcoming = Object.values(data.events).filter(
			(event) => event.isFuture
		);
		const past = Object.values(data.events).filter((event) => !event.isFuture);
		setUpcomingEvents(upcoming);
		setPastEvents(past); // Set loading to false after data is fetched
	}, []);

	return (
		<div>
			<PreLoader />
			<Navbar navState={true} />
			<div className='eventsPageHeadingTag'>Upcoming Event</div>
			{upcomingEvents.length > 0 ? (
				upcomingEvents.map((event) => (
					<EventCard
						key={event.name}
						posterUrl={event.img}
						eventName={event.name}
						eventShortDesc={event.short}
						eventDesc={event.desc}
						eventDate={event.date}
						eventTime={event.time}
						eventVenue={event.venue}
						isEventRegisterOpen={event.isOpen}
						isUpcomingEvent={event.isFuture}
						note={event.note}
						organizers={event.organizers}
						number={event.number}
					/>
				))
			) : (
				<>
					<div className='upComingMainDiv'>
						<div className='eventsPageUpcomingWorking'>
							<img src={upComingWorking} alt='progress' />
						</div>
						<div className='upComingWorkingText'>Coming Soon...</div>
					</div>
				</>
			)}
			<div className='eventsPageHeadingTag'>Past Events</div>
			{pastEvents.map((event) => (
				<EventCard
					isView={false}
					routingName={event.shortName}
					key={event.name}
					posterUrl={event.img}
					eventName={event.name}
					eventShortDesc={event.short}
					eventDesc={event.desc}
					eventDate={event.date}
					eventTime={event.time}
					eventVenue={event.venue}
					isEventRegisterOpen={event.isOpen}
					isUpcomingEvent={event.isFuture}
					note={event.note}
				/>
			))}
			<CopyRights />
		</div>
	);
};

export default EventsPage;
