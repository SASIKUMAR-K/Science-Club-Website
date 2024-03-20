import EventCard from './EventCard';

const RecentContainer = () => {
	return (
		<div>
			<EventCard
				posterUrl='/img/events/2024/1sos.png'
				eventName='SOS'
				eventShortDesc='Sailing on Science'
				eventDesc='SOS: Sailing on Science is science related shipwreck event . The scenario for this event is, "Imagine you are travelling in a ship and due to storm the ship is about to sink. There is only one life jacket available and that is with the captain of the ship. The participants will be given science related words on the spot and have to personify themselves as the object and should convince the captain to give the lifeboat to them by explaining the importance of the given word."'
				eventDate='13.03.2024'
				eventTime='1PM - 3.15PM'
				eventVenue='ECE Seminar Hall'
				isEventRegisterOpen={false}
				isUpcomingEvent={false}
			/>
		</div>
	);
};

export default RecentContainer;
