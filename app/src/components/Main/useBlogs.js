import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ajaxService } from '../../services/ajaxService';
import { setBlogsMore, setBlogs } from '../../slices/blogs';

export function useBlogs() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.blogs.page);

  useEffect(() => {
    ajaxService(`/blogs?page=${page}`).then((data) => {
      if (page === 1) {
        dispatch(setBlogs(data));
      } else {
        dispatch(setBlogsMore(data));
      }
    });
  }, [page]);
}
