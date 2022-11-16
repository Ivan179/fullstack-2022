import { useSelector, useDispatch } from 'react-redux';
import { increasePage } from '../../slices/blogs';
import { BlogItem } from '../BlogItem';
import { useMyBlogs } from './useMyBlogs';

export function MyBlogs(props) {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogIds);
  useMyBlogs();

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
