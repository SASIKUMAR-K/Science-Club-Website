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

	return (
		<div>
			<div className='recentEventContainer'>
				<div className='recentEventPoster'>
					<img src={props.posterUrl} alt='poster' />
				</div>
				<div className='recentEventDetails'>
					<div className='recentEventName'>{props.eventName}</div>
					<div className='recentEventShortDesc'>{props.eventShortDesc}</div>
					<div className='eventManDetails'>
						<div className='cardEventDate'>
							<span className='fontEventCard'>
								<FontAwesomeIcon icon={faCalendarDays} />
							</span>
							{props.eventDate}
						</div>
						<div className='cardEventTime'>
							<span className='fontEventCard'>
								<FontAwesomeIcon icon={faBusinessTime} />
							</span>
							{props.eventTime}
						</div>
						<div className='cardEventVenue'>
							<span className='fontEventCard'>
								<FontAwesomeIcon icon={faLocationDot} />
							</span>
							{props.eventVenue}
						</div>
					</div>
					<div className='recentEventDesc'>{props.eventDesc}</div>

					{props.isUpcomingEvent ? (
						<>
							{props.isEventRegisterOpen ? (
								<div className='recentEventRegister'>
									<button onClick={handleRegisterClick}>Register</button>
								</div>
							) : (
								<>
									<div className='recentEventRegisterClosed'>
										Registration Closed !!!
									</div>
									<div className='recentEventSeeYou'>
										See you there in the event
									</div>
								</>
							)}
						</>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

EventCard.propTypes = {
	posterUrl: PropTypes.string.isRequired,
	eventName: PropTypes.string.isRequired,
	eventShortDesc: PropTypes.string.isRequired,
	eventDesc: PropTypes.string.isRequired,
	eventDate: PropTypes.string.isRequired,
	eventTime: PropTypes.string.isRequired,
	eventVenue: PropTypes.string.isRequired,
	isEventRegisterOpen: PropTypes.bool.isRequired,
	isUpcomingEvent: PropTypes.bool.isRequired,
};

export default EventCard;
