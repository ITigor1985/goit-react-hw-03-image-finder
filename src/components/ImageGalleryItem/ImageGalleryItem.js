import './imageGalleryItem.css';

const ImageGalleryItem = ({ largeImage, tags, preview, modalOpen }) => {
  return (
    <li onClick={event => modalOpen(largeImage, tags, event)}>
      <a className="imageGalleryItem-link" href={largeImage}>
        <img className="imageGalleryItem-image" src={preview} alt={tags} />
      </a>
    </li>
  );
};

export default ImageGalleryItem;
