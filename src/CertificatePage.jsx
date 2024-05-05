import { useParams } from 'react-router-dom';
import './css/certifcatePage.css';
import PreLoader from './PreLoader';
import CopyRights from './CopyRights';
import CertificateFetch from './CertificateFetch';
import eventData from './data.json';
import { useNavigate } from 'react-router-dom';

const CertificatePage = () => {
	const navigate = useNavigate();
	const { certificateId } = useParams();
	const certificateData = CertificateFetch({ certificateId });
	if (!certificateData) {
		return <div>Certificate not found</div>;
	}

	const {
		Type,
		RegisterNumber,
		Dept,
		Year,
		Section,
		PDFLink,
		IssueDate,
		shortEventName,
		Place,
	} = certificateData;
	const eventShortName = shortEventName ? shortEventName.trim() : null; // Check if EventShortName exists
	const eventDetails = eventShortName ? eventData.events[eventShortName] : null; // Check if eventShortName exists

	if (!eventDetails) {
		return <div>Event details not found</div>;
	}

	const {
		name: eventName,
		date: eventDate,
		short: eventShortDesc,
	} = eventDetails;

	// Function to handle download button click
	const handleDownload = () => {
		window.open(PDFLink, '_blank');
	};

	const handleViewMoreClick = () => {
		navigate(`/event/${eventShortName}`);
	};

	return (
		<>
			<PreLoader />
			<div className='certificatePageScienceClubHead'>
				Science<span>Club</span>
			</div>
			<div className='firstContainer'>
				<div className='certificateType'>{Type}</div>
				<div className='certficatePageEventName'>{eventName}</div>
				<div className='certficatePageEventShortDesc'>{eventShortDesc}</div>
				<div className='certficatePageEventDate'>Event Date : {eventDate}</div>
			</div>
			<div className='secondContainer'>
				<div className='thirdContainer'>
					<div className='certifcatePdf'>
						<iframe src={PDFLink}></iframe>
					</div>

					<div className='certificateDowload'>
						<button onClick={handleDownload}>Download Certificate</button>
					</div>
					<div className='certificateIssueDate'>Issue Date : {IssueDate}</div>
				</div>

				<div className='fourthContainer'>
					{Place && (
						<div className='certificatePageWinnerPlace'>{Place} Place</div>
					)}
					<div className='certificatePageparticipantName'>
						Name : {certificateData.Name}
					</div>
					{RegisterNumber && (
						<div className='certificatePageparticipantRegisterNumber'>
							Register Number : {RegisterNumber}
						</div>
					)}
					{Dept && (
						<div className='certificatePageparticipantDept'>Dept : {Dept}</div>
					)}
					{Section && (
						<div className='certificatePageparticipantSection'>
							Section : {Section}
						</div>
					)}
					{Year && (
						<div className='certificatePageparticipantYear'>Year : {Year}</div>
					)}
					<div className='certifiacatePageViewMoreEvents'>
						<button onClick={handleViewMoreClick}>
							View More About the Event
						</button>
					</div>
				</div>
			</div>
			<CopyRights />
		</>
	);
};

export default CertificatePage;
