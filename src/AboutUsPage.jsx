import Navbar from './Navbar';
import PreLoader from './PreLoader';
import TeamCard from './TeamCard';
import data from './data.json';
import './css/aboutUsPage.css';
const AboutUsPage = () => {
	return (
		<>
			<PreLoader />
			<Navbar navState={true} />
			<div className='aboutUsMainHead'>Faculty Coordinator</div>
			<div className='teamPageContainer'>
				<TeamCard
					name='Dr. C. Rameshkumar'
					position='Dept of Physics'
					img='/img/team/faculty.jpg'
				/>
			</div>
			<div className='aboutUsMainHead'>Lead Team</div>
			<div className='teamPageContainer'>
				{data.team.map((card) => (
					<TeamCard
						key={card.position}
						name={card.name}
						position={card.position}
						img={card.img}
					/>
				))}
			</div>
		</>
	);
};

export default AboutUsPage;
