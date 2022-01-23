import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { getImages } from 'services/publicationsApi';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    query: '',
    page: 1,
  };

  handleFormSubmit = query => {
    this.setState(() => {
      return { query: query, page: 1, images: [] };
    });
    console.log(this.state.query);
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.getImagesData();
    }

    if (this.state.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  async getImagesData() {
    const { query, page } = this.state;
    console.log(query);
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
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
      </div>
    );
  }
}
