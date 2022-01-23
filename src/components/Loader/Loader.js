import { SpinnerCircular } from 'spinners-react';

const Loader = () => {
  const style = {
    display: 'block',
    margin: '0 auto',
  };
  return <SpinnerCircular style={style} color={'#3f51b5'} size={40} />;
};
export default Loader;
