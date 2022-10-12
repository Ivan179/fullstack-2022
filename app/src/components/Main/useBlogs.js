import { useEffect, useState } from 'react';
import { ajaxService } from '../../services/ajaxService';

export function useBlogs() {
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    ajaxService(`/blogs?page=${page}`).then((data) => {
      setBlogs((oldBlogs) => [...oldBlogs, ...data]);
    });
  }, [page]);

  return {
    setPage,
    blogs,
  };
}
