import { useDispatch } from 'react-redux';
import './Modal.css';
import close from '../../images/close.jpeg';
import { closeModal } from '../../slices/modal';

export function Modal(props) {
  const dispatch = useDispatch();
  const { children } = props;

  const handleOverlayClick = () => {
    dispatch(closeModal());
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className='modal-container' onClick={handleOverlayClick}>
      <div className='modal' onClick={handleModalClick}>
        <img className='modal-close' src={close} onClick={handleOverlayClick} />
        {children}
      </div>
    </div>
  );
}
