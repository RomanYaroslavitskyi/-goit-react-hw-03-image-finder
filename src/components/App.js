import { Component } from 'react';
import FetchImages from 'service/FetchImages';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    nameImage: '',
    content: [],
    page: 1,
    status: 'idle',
    showModal: false,
    url: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const name = this.state.nameImage;
    const page = this.state.page;
    if (prevState.nameImage !== name) {
      FetchImages(name, page)
        .then(res => {
          this.setState({
            content: res.data.hits,
            status: 'resolved',
          });
        })
        .catch(this.setState({ status: 'rejected' }));
    }
  }

  toggleModal = () => {
    return this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  handleClick = () => {
    const name = this.state.nameImage;
    const page = this.state.page + 1;
    FetchImages(name, page)
      .then(res => {
        this.setState(prev => ({
          content: [...prev.content, ...res.data.hits],
          page,
          status: 'resolved',
        }));
      })
      .catch(this.setState({ status: 'rejected' }));
  };

  getSubmitName = (name, page) => {
    this.setState({ nameImage: name, page: page, status: 'pending' });
  };

  getFind = idName => {
    const { content } = this.state;
    const URL = content.find(({ id }) => id === idName);
    this.setState({ url: URL?.webformatURL });
  };

  render() {
    const { content, status, showModal, url } = this.state;
    const { getSubmitName, handleClick, toggleModal, getFind } = this;
    return (
      <div>
        <Searchbar onSubmit={getSubmitName} />
        <ImageGallery>
          <ImageGalleryItem
            content={content}
            toggle={toggleModal}
            getFind={getFind}
          />
        </ImageGallery>
        {content.length > 0 && <Button onClick={handleClick} />}

        {status === 'rejected' && <Loader />}
        {showModal && <Modal getFind={url} onClose={toggleModal} />}
      </div>
    );
  }
}

export default App;
