import { useParams } from 'react-router-dom';
import { BlogItem } from '../BlogItem';
import { Loader } from '../Loader/Loader';
import { PostList } from '../PostList/PostList';
import { useBlog } from '../../hooks/useBlog';
import './Blog.css';

export function Blog() {
  const params = useParams();

  const blog = useBlog(params.id);

  return (
    <aside className='main-aside'>
      {blog ? (
        <div className='post'>
          <BlogItem id={blog.id} />
          <PostList blogId={blog.id} />
        </div>
      ) : (
        <Loader />
      )}
    </aside>
  );
}
