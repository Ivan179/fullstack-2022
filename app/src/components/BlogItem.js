import { Link } from 'react-router-dom';

export function BlogItem(props) {
  const { id, title, description, onEditClick, onDeleteClick } = props;

  const handleEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onEditClick();
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onDeleteClick();
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
