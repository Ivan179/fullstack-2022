import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './PostItem.css';

export function PostItem({ postId, blogId }) {
  const post = useSelector((state) => state.blogs.posts[postId]);

  if (!post) {
    return null;
  }

  return (
    <Link className='blog-link' to={`/blog/${blogId}/post/${postId}`}>
      <div className='roundable post-item'>{post.name}</div>
    </Link>
  );
}
