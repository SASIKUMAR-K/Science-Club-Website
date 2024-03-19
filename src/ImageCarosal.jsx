import { useRef } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import PropTypes from 'prop-types';
import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS
import './css/imageCarosal.css';

const ImageCarousel = ({ images }) => {
	const carouselRef = useRef(null);

	return (
		<CCarousel controls indicators ref={carouselRef}>
			{images.map((image, index) => (
				<CCarouselItem key={index}>
					<CImage
						className='d-block w-100 carosalContainer'
						src={image}
						alt={`slide ${index + 1}`}
					/>
				</CCarouselItem>
			))}
		</CCarousel>
	);
};

ImageCarousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
