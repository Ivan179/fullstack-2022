import './Modal.css';
import close from '../../images/close.jpeg';

export function Modal(props) {
  const { isModalOpen, onClose, children } = props;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  if (!isModalOpen) {
    return null;
  }
  return (
    <div className='modal-container' onClick={handleOverlayClick}>
      <div className='modal' onClick={handleModalClick}>
        <img className='modal-close' src={close} onClick={onClose} />
        {children}
      </div>
    </div>
  );
}
