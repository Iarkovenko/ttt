import { Component } from 'react';
import axios from 'axios';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/GalleryList';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Modal from '../Modal/Modal';
import Preloader from '../Loader/Loader';

import API from '../../services/api';

import './App.css';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    preloader: false,
    modalSrc: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;

    if (prevQuery !== currentQuery) {
      this.setState({ page: 1, preloader: true }, async () => {
        try {
          const { query, page } = this.state;
          const images = await API.getImages({ q: query, page });

          this.setState(prevState => ({
            images,
            page: prevState.page + 1,
          }));
        } catch (error) {
          console.log('ERROR => ', error);
        } finally {
          this.setState({ preloader: false });
        }
      });
    }
  }

  onCloseModal = () => {
    this.setState({ modalSrc: '' });
  };

  onOpenModal = modalSrc => {
    this.setState({ modalSrc });
  };

  handleSearch = query => {
    this.setState({ query });
  };

  nextPageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  loadMore = async () => {
    try {
      this.setState({ preloader: true });
      const { query, page } = this.state;
      const images = await API.getImages({ q: query, page });

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.log('ERROR => ', error);
    } finally {
      this.setState({ preloader: false });
    }
  };

  render() {
    const { images, modalSrc, preloader, error } = this.state;
    console.log('modalSrc', modalSrc);
    return (
      <div className="App">
        <Searchbar onSearch={this.handleSearch} />
        {error && <h1>{error.message}</h1>}

        {images && <ImageGallery images={images} onOpen={this.onOpenModal} />}

        {preloader && <Preloader />}

        {images.length > 0 && !preloader && (
          <LoadMoreButton onClick={this.loadMore} />
        )}

        {modalSrc && (
          <Modal onCloseModal={this.onCloseModal}>
            <img src={modalSrc} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
