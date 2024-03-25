import PropTypes from 'prop-types';
import EventCard from './EventCard';

const RecentContainer = ({ recentEvents }) => {
	return (
		<div className='recent-events-container'>
			{recentEvents.map((event) => (
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
					note={event.note} // Assuming note is an array of strings
					number={event.number} // Assuming number is an array of strings
					organizers={event.organizer} // Assuming organizer is an array of strings
				/>
			))}
		</div>
	);
};

export default RecentContainer;
