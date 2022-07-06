import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
const { Component } = require('react');

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { getFind } = this.props;
    const { handleBackdropClick } = this;
    return createPortal(
      <div className={s.backdrop} onClick={handleBackdropClick}>
        <div className={s.content}>
          <img src={getFind} alt="Name" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  getFind: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
