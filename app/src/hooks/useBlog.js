import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ajaxService } from '../services/ajaxService';
import { setBlogsMore } from '../slices/blogs';

export function useBlog(blogId) {
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blogs.blogsObj[blogId]);

  useEffect(() => {
    ajaxService(`/blogs/${blogId}/`).then((data) => {
      dispatch(setBlogsMore([data]));
    });
  }, []);

  return blog;
}
