import './imageGalleryItem.css';

const ImageGalleryItem = ({ largeImage, tags, preview }) => {
  return (
    <li className="imageGalleryItem">
      <a className="imageGalleryItem-link" href={largeImage}>
        <img className="imageGalleryItem-image" src={preview} alt={tags} />
      </a>
    </li>
  );
};

export default ImageGalleryItem;
