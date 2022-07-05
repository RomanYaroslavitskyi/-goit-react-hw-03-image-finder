import '../styles.css';
import { ImSearch } from 'react-icons/im';
const { Component } = require('react');

class Searchbar extends Component {
  state = {
    nameImage: '',
    page:1,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ nameImage: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nameImage, page } = this.state;
    this.props.onSubmit(nameImage,page);
    
    this.setState({ nameImage: '' });
  };

  render() {
    const { nameImage } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">
              <ImSearch/>
            </span>
          </button>

          <input
            className="SearchForm-input"
            value={nameImage}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
