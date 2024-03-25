import mainLogo from '/img/mainLogo.jpg';
import './css/navbar.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
const Navbar = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(props.navState);

	const navBarToggle = () => {
		setIsMenuOpen((prevState) => !prevState); // Using functional update to ensure proper synchronization
	};

	const handleLinkClick = () => {
		setIsMenuOpen(false); // Close the menu when a link is clicked
	};

	return (
		<>
			<div className='navBarContainer'>
				<Link to='/'>
					<div className='navBarLogoContainer'>
						<div className='navBarLogo'>
							<img src={mainLogo} alt='' />
						</div>
						<div className='navBarLogoText'>
							<span className='navBarLogoBlackText'>Science</span>
							<span className='navBarLogoYellowText'>Club</span>
						</div>
					</div>{' '}
				</Link>
				<div
					className={
						!isMenuOpen ? 'navBarItems' : 'navBarItems navBarItemsToggle'
					}
				>
					<div className='navBarItem'>
						<NavLink to='/' onClick={handleLinkClick}>
							Home
						</NavLink>
					</div>
					<div className='navBarItem'>
						<NavLink to='/events' onClick={handleLinkClick}>
							Events
						</NavLink>
					</div>
					<div className='navBarItem'>
						<NavLink to='/gallary' onClick={handleLinkClick}>
							Gallery
						</NavLink>
					</div>
					<div className='navBarItem'>
						<NavLink to='/about' onClick={handleLinkClick}>
							About us
						</NavLink>
					</div>
					<div className='navBarItem'>
						<NavLink to='/contact' onClick={handleLinkClick}>
							Contact us
						</NavLink>
					</div>
					<div
						className='navBarItem registerMemberNavBar'
						onClick={() => {
							window.open(
								'https://docs.google.com/forms/d/e/1FAIpQLSfkYfPJqe3gLPOHjaYAgoEzNm15RnZB9-ZWv_TBNO55GFU7WA/viewform?usp=sf_link',
								'_blank'
							);
						}}
					>
						Register as Member
					</div>
				</div>
				<div className='navBarMenu' onClick={navBarToggle}>
					<div className={isMenuOpen ? 'line1' : 'x line1'}></div>
					<div className={isMenuOpen ? 'line2' : 'x line2'}></div>
					<div className={isMenuOpen ? 'line3' : 'x line3'}></div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

Navbar.propTypes = {
	navState: PropTypes.bool.isRequired,
};
