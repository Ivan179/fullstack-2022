import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { EditBlog } from '../EditBlog/EditBlog';
import { DeleteBlog } from '../DeleteBlog/DeleteBlog';
import { closeModal } from '../../slices/modal';

export function ModalContainer() {
  const { modalData, modalName } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!modalName) {
    return null;
  }

  function renderContent() {
    switch (modalName) {
      case 'edit': {
        return (
          <EditBlog blogId={modalData} onClose={() => dispatch(closeModal())} />
        );
      }

      case 'delete': {
        return (
          <DeleteBlog
            blogId={modalData}
            onClose={() => dispatch(closeModal())}
          />
        );
      }

      default: {
        return null;
      }
    }
  }

  return <Modal>{renderContent()}</Modal>;
}
