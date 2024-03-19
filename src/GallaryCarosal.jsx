import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import 'react-image-gallery/styles/css/image-gallery.css';

function GallaryCarosal(props) {
	return <ImageGallery items={props.images} />;
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
