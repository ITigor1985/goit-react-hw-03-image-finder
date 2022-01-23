import './modal.css';

const Modal = ({ largeImageURL, alt, onClick }) => {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};
export default Modal;
