import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../slices/modal';

export function BlogItem(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const blog = useSelector((state) => state.blogs.blogsObj[id]);
  const user = useSelector((state) => state.user.user);

  const { title, description, timestamp } = blog;

  const handleEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(openModal({ data: id, name: 'edit' }));
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(openModal({ data: id, name: 'delete' }));
  };

  return (
    <Link className='blog-link' to={`/blog/${id}`}>
      <section className='roundable blog-item' key={id}>
        <h1>{title}</h1>
        <p>{description}</p>
        {user && user.id === blog.user && (
          <>
            <button onClick={handleEditClick}>Редактировать</button>
            <button onClick={handleDeleteClick}>Удалить блог</button>
          </>
        )}
        <h4 className='date-creation'>
          {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
        </h4>
      </section>
    </Link>
  );
}
