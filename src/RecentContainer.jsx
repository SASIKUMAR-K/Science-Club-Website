import EventCard from './EventCard';

const RecentContainer = () => {
	return (
		<div>
			<EventCard
				posterUrl='/img/events/2024/1sos.png'
				eventName='SOS'
				eventShortDesc='Sailing on Science'
				eventDesc='kbfv kbssivb ubsbv ibkdv  bjvojbjbs kjbkjsbdvjbk b uoibsdvj kjbks db k vbbkjkjjb'
				isEventRegisterOpen={true}
				isUpcomingEvent={true}
			/>
		</div>
	);
};

export default RecentContainer;
