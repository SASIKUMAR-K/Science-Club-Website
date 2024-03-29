import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import 'react-image-gallery/styles/css/image-gallery.css';

function GallaryCarosal(props) {
	const [autoPlay, setAutoPlay] = useState(false);

	const handlePause = () => {
		setAutoPlay(false);
	};

	return (
		<ImageGallery
			items={props.images}
			autoPlay={autoPlay}
			onPause={handlePause}
		/>
	);
}

GallaryCarosal.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			original: PropTypes.string.isRequired,
			thumbnail: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default GallaryCarosal;
