import { useSelector, useDispatch } from 'react-redux';
import { BlogItem } from '../BlogItem';
import { increasePage } from '../../slices/blogs';
import { useBlogs } from './useBlogs';

export function Main() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogIds);

  useBlogs();

  return (
    <>
      <aside className='main-aside'>
        {blogs.map((blog) => (
          <BlogItem key={blog} id={blog} />
        ))}
      </aside>
      <div className='show-all' onClick={() => dispatch(increasePage())}>
        <button className='roundable'>Показать все</button>
      </div>
    </>
  );
}
