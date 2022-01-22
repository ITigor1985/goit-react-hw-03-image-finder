import { Component } from 'react';
import { getImages } from 'services/publicationsApi';

class ImageGallery extends Component {
  state = {
    images: [],
  };
  async componentDidMount() {
    const { query, page } = this.props;
    try {
      this.setState({ isLoading: true });
      const images = await getImages(query, page);
      console.log(images);
      this.setState({ isLoading: false, images });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <div></div>;
  }
}
export default ImageGallery;
