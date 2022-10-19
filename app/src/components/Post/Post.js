import { Loader } from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { PostItem } from '../PostItem/PostItem';
import { useBlog } from '../../hooks/useBlog';

export function Post() {
  const { postId, id } = useParams();

  const blog = useBlog(id);

  if (!blog) {
    return <Loader />;
  }

  return (
    <aside className='main-aside'>
      <PostItem postId={postId} blogId={id} />
    </aside>
  );
}
