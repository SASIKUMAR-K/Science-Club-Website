import './css/aboutClubHome.css';
const aboutClubHome = () => {
	return (
		<div>
			<div className='aboutClubHomeMainDiv'>
				<div className='aboutClubHomeHeadDiv'>About us</div>
				<div className='aboutClubHomeSubHeadDiv'>Science Club</div>
				<div className='aboutClubHomeContainer'>
					<div className='aboutClubHomePic'>
						<img src='/img/mainLogo.jpg' alt='Science Club Logo' />
					</div>
					<div className='aboutClubHomeDescrip'>
						Welcome to the fascinating world of our Science Club, where
						curiosity meets experimentation, and knowledge is not just acquired
						but crafted. Our club serves as a dynamic platform for inquisitive
						minds to explore the wonders of science through engaging activities,
						hands-on experiments, and insightful discussions.our Science Club is
						a welcoming space for all enthusiasts eager to unravel the mysteries
						of the natural world. Join us on this intellectual journey where
						discovery knows no bounds, and together, we embark on a quest to
						ignite the spark of scientific inquiry.
					</div>
				</div>
				<div className='aboutClubHomeMemberFormDiv'>
					<button
						className='aboutClubHomeMemberForm'
						onClick={() =>
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSfkYfPJqe3gLPOHjaYAgoEzNm15RnZB9-ZWv_TBNO55GFU7WA/viewform?usp=sf_link',
								'_blank'
							)
						}
					>
						Join Us
					</button>
				</div>
			</div>
		</div>
	);
};

export default aboutClubHome;
