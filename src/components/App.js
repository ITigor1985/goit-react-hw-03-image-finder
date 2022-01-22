import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    isLoading: false,
    images: [],
    query: '',
    page: 1,
  };

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1 });
  };

  render() {
    const { query, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={query} page={page} />
      </div>
    );
  }
}
