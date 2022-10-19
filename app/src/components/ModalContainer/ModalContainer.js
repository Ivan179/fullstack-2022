import { useSelector } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { EditBlog } from '../EditBlog/EditBlog';
import { DeleteBlog } from '../DeleteBlog/DeleteBlog';

export function ModalContainer() {
  const { modalData, modalName } = useSelector((state) => state.modal);

  if (!modalName) {
    return null;
  }

  function renderContent() {
    switch (modalName) {
      case 'edit': {
        return <EditBlog blogId={modalData} />;
      }

      case 'delete': {
        return <DeleteBlog />;
      }

      default: {
        return null;
      }
    }
  }

  return <Modal>{renderContent()}</Modal>;
}
