import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../slices/modal';

export function BlogItem(props) {
  const dispatch = useDispatch();
  const { id } = props;
  const blog = useSelector((state) => state.blogs.blogsObj[id]);

  const { title, description } = blog;

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
      <section className='roundable' key={id}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleEditClick}>Редактировать</button>
        <button onClick={handleDeleteClick}>Удалить блог</button>
      </section>
    </Link>
  );
}
