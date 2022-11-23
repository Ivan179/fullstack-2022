import { useDispatch } from 'react-redux';
import { ajaxService } from '../../services/ajaxService';
import { deleteBlog } from '../../slices/blogs';

export function DeleteBlog({ onClose, blogId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    ajaxService(`/blogs/${blogId}/`, {
      method: 'DELETE',
    }).then(() => {
      dispatch(deleteBlog(blogId));
      onClose();
    });
  };
  return (
    <div>
      <h1>Вы действительно хотите удалить блог?</h1>
      <button onClick={handleDelete}>Да</button>
      <button onClick={onClose}>Нет</button>
    </div>
  );
}
