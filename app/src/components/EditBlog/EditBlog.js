import { ajaxService } from '../../services/ajaxService';
import { BlogForm } from '../BlogForm/BlogForm';

export function EditBlog(props) {
  const { blogId, defaultTitle, defaultDescription, updateBlog, onClose } =
    props;
  return (
    <BlogForm
      submitTitle='Сохранить блог'
      defaultTitle={defaultTitle}
      defaultDescription={defaultDescription}
      onSubmitForm={({ title, description }) => {
        ajaxService(`/blogs/${blogId}`, {
          method: 'PUT',
          body: JSON.stringify({ title, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((data) => {
          updateBlog?.(data);
          onClose();
        });
      }}
    />
  );
}
