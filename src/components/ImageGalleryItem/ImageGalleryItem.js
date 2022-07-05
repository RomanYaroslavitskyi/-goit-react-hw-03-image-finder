import '../styles.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { content, toggle, getFind } = this.props;
    return (
      <>
        {content.map(({ id, largeImageURL, user }) => (
          <li
            className="ImageGalleryItem"
            key={id}
            onClick={() => {
              getFind(id);
              toggle();
            }}
          >
            <img
              src={largeImageURL}
              alt={user}
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </>
    );
  }
}

export default ImageGalleryItem;
