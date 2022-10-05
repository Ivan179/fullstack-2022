import { useEffect, useState } from 'react';
import { BlogItem } from './BlogItem';
import { ajaxService } from '../services/ajaxService';

export function Main() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    ajaxService('/blogs').then((data) => {
      const blogs = [];

      data.forEach((blog) => {
        const blogElement = (
          <BlogItem
            id={blog.id}
            title={blog.title}
            description={blog.description}
          />
        );

        blogs.push(blogElement);
      });

      setBlogs(blogs);
    });
  }, []);

  return <aside className='main-aside'>{blogs}</aside>;
}
