import Navbar from './Navbar';
import PreLoader from './PreLoader';
import CopyRights from './CopyRights';
import EventCard from './EventCard';
import './css/eventsPage.css';

const EventsPage = () => {
	const isUpcoming = false;
	return (
		<div>
			<PreLoader />
			<Navbar />
			<div className='eventsPageHeadingTag'>Upcoming Event</div>
			{isUpcoming ? (
				<EventCard
					posterUrl='/img/events/2024/1sos.png'
					eventName='SOS'
					eventShortDesc='Sailing on Science'
					eventDesc='kbfv kbssivb ubsbv ibkdv  bjvojbjbs kjbkjsbdvjbk b uoibsdvj kjbks db k vbbkjkjjb'
					isEventRegisterOpen={true}
					isUpcomingEvent={true}
				/>
			) : (
				<div className='eventsPageUpcomingWorking'>
					<img src='/img/upComingWorking.gif' alt='progres' />
				</div>
			)}
			;<div className='eventsPageHeadingTag'>Past Events</div>
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
			<EventCard
				posterUrl='/img/events/2023/1darpan.png'
				eventName='Darpan'
				eventShortDesc='Science Competition'
				eventDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam veritatis soluta rerum ipsum, sit autem non quasi aspernatur laboriosam quisquam placeat minus distinctio delectus ad, culpa at quidem amet, recusandae in maxime perferendis! Excepturi amet iusto perspiciatis maiores sint, facere veniam a, tempora in laudantium est quo ratione error mollitia ut distinctio odio dolor. Quaerat, inventore corporis perspiciatis provident quos impedit maiores beatae voluptate rerum recusandae corrupti in nobis! Ullam iste blanditiis, possimus alias quasi commodi est voluptates itaque aut exercitationem eligendi, repudiandae consequatur! Consectetur inventore hic tenetur molestias vitae eum incidunt magni soluta a, nam numquam ducimus expedita.'
				eventDate='09.08.2023'
				eventTime='1PM - 3.15PM'
				eventVenue='Presentation Hall (Central Library Ground Floor)'
				isEventRegisterOpen={false}
				isUpcomingEvent={false}
			/>
			<CopyRights />
		</div>
	);
};

export default EventsPage;
