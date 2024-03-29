import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './css/teamCard.css';
const TeamCard = ({ img, name, position, Email, Phone }) => {
	return (
		<>
			<div className='teamCardContainer'>
				<div className='teamCardImage'>
					<img className='team-img' src={img} alt={name} />
				</div>
				<div className='teamCardName'>{name}</div>
				<div className='teamCardPosition'>{position}</div>
				<div className='teamCardSocial'>
					{Email && (
						<button href={Email}>
							<FontAwesomeIcon icon={faEnvelope} />
						</button>
					)}
					{Phone && (
						<button href={Phone}>
							<FontAwesomeIcon icon={faPhone} />
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default TeamCard;
