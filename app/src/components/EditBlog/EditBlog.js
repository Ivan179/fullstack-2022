import { useSelector, useDispatch } from 'react-redux';
import { ajaxService } from '../../services/ajaxService';
import { updateBlog } from '../../slices/blogs';
import { BlogForm } from '../BlogForm/BlogForm';

export function EditBlog(props) {
  const { blogId, onClose } = props;
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blogs.blogsObj[blogId]);

  const {
    title: defaultTitle,
    description: defaultDescription,
    topic: defaultTopic,
  } = blog;

  return (
    <BlogForm
      submitTitle='Сохранить блог'
      defaultTitle={defaultTitle}
      defaultTopic={defaultTopic}
      defaultDescription={defaultDescription}
      onSubmitForm={({ title, description, topic }) => {
        ajaxService(`/blogs/${blogId}/`, {
          method: 'PATCH',
          body: JSON.stringify({ title, description, topic }),
          headers: {
            'Content-Type': 'Application/json',
          },
        }).then((data) => {
          dispatch(updateBlog(data));
          onClose?.();
        });
      }}
    />
  );
}
