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
				eventDesc='kbfv kbssivb ubsbv ibkdv  bjvojbjbs kjbkjsbdvjbk b uoibsdvj kjbks db k vbbkjkjjb'
				isEventRegisterOpen={true}
				isUpcomingEvent={true}
			/>
			<EventCard
				posterUrl='/img/events/2024/1sos.png'
				eventName='SOS'
				eventShortDesc='Sailing on Science'
				eventDesc='kbfv kbssivb ubsbv ibkdv  bjvojbjbs kjbkjsbdvjbk b uoibsdvj kjbks db k vbbkjkjjb'
				isEventRegisterOpen={true}
				isUpcomingEvent={true}
			/>
			<EventCard
				posterUrl='/img/events/2024/1sos.png'
				eventName='SOS'
				eventShortDesc='Sailing on Science'
				eventDesc='kbfv kbssivb ubsbv ibkdv  bjvojbjbs kjbkjsbdvjbk b uoibsdvj kjbks db k vbbkjkjjb'
				isEventRegisterOpen={true}
				isUpcomingEvent={true}
			/>
			<CopyRights />
		</div>
	);
};

export default EventsPage;
