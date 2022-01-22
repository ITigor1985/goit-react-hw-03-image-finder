import { Component } from 'react';
import Searchbar from './Searchbar';
import { getImages } from 'services/publicationsApi';

export class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1 });
  };

  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true });
  //     const items = await getImages('cat', 2);
  //     this.setState({ isLoading: false, items });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery> */}
      </div>
    );
  }
}
