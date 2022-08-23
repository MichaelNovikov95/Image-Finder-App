import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ cardImage }) {
  return (
    <img
      className={s.ImageGalleryItem_image}
      src={cardImage}
      alt={cardImage}
      loading="lazy"
    />
  );
}

ImageGalleryItem.propTypes = {
  cardImage: PropTypes.string,
};
