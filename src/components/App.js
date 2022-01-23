import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { getImages } from 'services/publicationsApi';
import './App.css';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    query: '',
    page: 1,
    currentHitsPerPage: null,
    error: null,
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
      const { hits, totalHits } = await getImages(query, page);
      if (totalHits === 0) {
        alert('Nothing found with such query');
        this.setState({ loading: false, currentHitsPerPage: null });
        return;
      }
      const images = this.makeImagesArray(hits);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images],
          currentHitsPerPage: hits.length,
          page: prevState.page + 1,
        };
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  makeImagesArray = data => {
    return data.map(({ id, largeImageURL, tags, webformatURL }) => {
      return { id, largeImageURL, tags, webformatURL };
    });
  };

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
