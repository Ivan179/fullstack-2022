import { useSelector } from 'react-redux';
import { PostItem } from '../PostItem/PostItem';

export function PostList({ blogId }) {
  const postList = useSelector(
    (state) => state.blogs.blogsObj?.[blogId].post_set
  );

  if (!postList || postList.length === 0) {
    return null;
  }

  return (
    <div>
      {postList.map((post) => (
        <PostItem key={post} postId={post} blogId={blogId} />
      ))}
    </div>
  );
}
