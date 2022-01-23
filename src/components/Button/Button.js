import './button.css';

const Button = ({ onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
