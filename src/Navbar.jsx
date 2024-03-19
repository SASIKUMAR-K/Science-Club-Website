import mainLogo from '/img/mainLogo.jpg';
import logoWord from '/img/logoWord.jpg';
import './css/navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navBarToggle = () => {
		setIsMenuOpen((prevState) => !prevState); // Using functional update to ensure proper synchronization
	};

	const handleLinkClick = () => {
		setIsMenuOpen(false); // Close the menu when a link is clicked
	};

	return (
		<>
			<div className='navBarContainer'>
				<div className='navBarLogoContainer'>
					<div className='navBarLogo'>
						<img src={mainLogo} alt='' />
					</div>
					<div className='navBarLogoText'>
						<img src={logoWord} alt='' />
					</div>
				</div>
				<div
					className={
						!isMenuOpen ? 'navBarItems' : 'navBarItems navBarItemsToggle'
					}
				>
					<div className='navBarItem'>
						<Link to='/' onClick={handleLinkClick}>
							Home
						</Link>
					</div>
					<div className='navBarItem'>
						<Link to='/events' onClick={handleLinkClick}>
							Events
						</Link>
					</div>
					<div className='navBarItem'>
						<Link to='/gallery' onClick={handleLinkClick}>
							Gallery
						</Link>
					</div>
					<div className='navBarItem'>
						<Link to='/about' onClick={handleLinkClick}>
							About us
						</Link>
					</div>
					<div className='navBarItem'>
						<Link to='/contact' onClick={handleLinkClick}>
							Contact us
						</Link>
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
