import ImageGalleryItem from 'components/ImageGalleryItem';
import './imageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className="imageGallery">
      {images.map(({ id, largeImageURL, tags, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImage={largeImageURL}
            tags={tags}
            preview={webformatURL}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;
