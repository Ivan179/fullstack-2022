import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ajaxService } from '../services/ajaxService';
import { BlogItem } from './BlogItem';
import { Modal } from './Modal/Modal';
import { EditBlog } from './EditBlog/EditBlog';
import { Loader } from './Loader/Loader';

export function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    ajaxService(`/blogs/${params.id}`).then((data) => {
      setBlog(data);
    });
  }, []);

  return (
    <aside className='main-aside'>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {blog && (
          <EditBlog
            blogId={blog.id}
            defaultTitle={blog.title}
            defaultDescription={blog.description}
            updateBlog={setBlog}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
      {blog ? (
        <BlogItem
          id={blog.id}
          title={blog.title}
          description={blog.description}
          onEditClick={() => {
            setIsModalOpen(true);
          }}
        />
      ) : (
        <Loader />
      )}
    </aside>
  );
}
