import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/recentEvent.css';

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
	isEventRegisterOpen: PropTypes.bool.isRequired,
	isUpcomingEvent: PropTypes.bool.isRequired,
};

export default EventCard;
