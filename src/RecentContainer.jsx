import PropTypes from 'prop-types';
import EventCard from './EventCard';

const RecentContainer = ({ recentEvents }) => {
	console.log(recentEvents);
	return (
		<div className='recent-events-container'>
			{recentEvents.map((event) => (
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
					note={event.note} // Assuming note is an array of strings
				/>
			))}
		</div>
	);
};

export default RecentContainer;
