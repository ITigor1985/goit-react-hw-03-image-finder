import ImageGalleryItem from 'components/ImageGalleryItem';

import './imageGallery.css';

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <ul className="imageGallery">
      {images.map(({ id, largeImageURL, tags, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImage={largeImageURL}
            tags={tags}
            preview={webformatURL}
            modalOpen={modalOpen}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;
