import PropTypes from 'prop-types';
import EventCard from './EventCard';

const RecentContainer = ({ recentEvents }) => {
	return (
		<div className='recent-events-container'>
			{recentEvents.map((event) => (
				<EventCard
					isView={event.isView}
					routingName={event.shortName}
					key={event.name}
					posterUrl={event.img}
					eventName={event.name}
					eventShortDesc={event.short}
					eventDesc={event.desc}
					eventDate={event.date}
					eventTime={event.time}
					eventVenue={event.venue}
					isEventRegisterOpen={event.isEventRegisterOpen}
					isUpcomingEvent={event.isUpcomingEvent}
					note={event.note} // Assuming note is an array of strings
					form={event.form}
				/>
			))}
		</div>
	);
};

export default RecentContainer;
