import { Component } from 'react';
import { getImages } from 'services/publicationsApi';

export class App extends Component {
  state = {
    items: [],
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const items = await getImages('cat', 2);
      this.setState({ isLoading: false, items });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      items: { hits },
    } = this.state;

    return <>{console.log(hits)}</>;
  }
}
