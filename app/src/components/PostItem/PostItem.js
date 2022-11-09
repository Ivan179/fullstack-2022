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
      <div className='roundable post-item'>
        <h3>{post.title}</h3>
        <img className='post-image' src={post.image} alt='post' />
        <div>{post.description}</div>
      </div>
    </Link>
  );
}
