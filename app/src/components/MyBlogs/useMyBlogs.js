import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ajaxService } from '../../services/ajaxService';
import { setMyBlogsMore, setMyBlogs } from '../../slices/blogs';

export function useMyBlogs() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.blogs.page);

  useEffect(() => {
    ajaxService(`/myblogs/?page=${page}`).then((data) => {
      if (page === 1) {
        dispatch(setMyBlogs(data.results));
      } else {
        dispatch(setMyBlogsMore(data.results));
      }
    });
  }, [page]);
}
