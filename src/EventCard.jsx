import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/recentEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCalendarDays,
	faBusinessTime,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const EventCard = (props) => {
	const navigate = useNavigate();

	const handleRegisterClick = () => {
		navigate('/register');
	};

	const handleViewMoreClick = () => {
		navigate(`/${props.routingName}`);
	};

	return (
		<div>
			<div className='recentEventMainContainer'>
				<div className='recentEventContainer'>
					{props.posterUrl && (
						<div className='recentEventPoster'>
							<img src={props.posterUrl} alt='poster' />
						</div>
					)}
					<div className='recentEventDetails'>
						{props.eventName && (
							<div className='recentEventName'>{props.eventName}</div>
						)}
						{props.eventShortDesc && (
							<div className='recentEventShortDesc'>{props.eventShortDesc}</div>
						)}
						<div className='eventManDetails'>
							{props.eventDate && (
								<div className='cardEventDate'>
									<span className='fontEventCard'>
										<FontAwesomeIcon icon={faCalendarDays} />
									</span>
									{props.eventDate}
								</div>
							)}
							{props.eventTime && (
								<div className='cardEventTime'>
									<span className='fontEventCard'>
										<FontAwesomeIcon icon={faBusinessTime} />
									</span>
									{props.eventTime}
								</div>
							)}
							{props.eventVenue && (
								<div className='cardEventVenue'>
									<span className='fontEventCard'>
										<FontAwesomeIcon icon={faLocationDot} />
									</span>
									{props.eventVenue}
								</div>
							)}
						</div>
						{props.isView ? (
							''
						) : (
							<>
								{props.isUpcomingEvent ? (
									props.isEventRegisterOpen ? (
										<div className='recentEventRegister'>
											<button onClick={handleRegisterClick}>
												Register Now
											</button>
										</div>
									) : (
										<>
											<div className='recentEventRegisterClosed'>
												Registration Closed !!
											</div>
											<div className='recentEventSeeYou'>
												See you in occasion
											</div>
										</>
									)
								) : null}
								<div className='recentEventViewMore'>
									<button onClick={handleViewMoreClick}>View More</button>
								</div>
							</>
						)}
					</div>
					{props.eventDesc && (
						<div className='recentEventDesc'>{props.eventDesc}</div>
					)}
				</div>
				{props.note && (
					<div className='eventCardNote'>
						{props.note.map((note, index) => (
							<div key={index}>{note}</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default EventCard;
