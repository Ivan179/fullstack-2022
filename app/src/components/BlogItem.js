import { Link } from 'react-router-dom';

export function BlogItem(props) {
  const { id, title, description } = props;

  return (
    <Link className='blog-link' to={`/blog/${id}`}>
      <section className='roundable' key={id}>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </Link>
  );
}
