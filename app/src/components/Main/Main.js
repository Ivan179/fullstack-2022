import { useState } from 'react';
import { BlogItem } from '../BlogItem';
import { Modal } from '../Modal/Modal';
import { EditBlog } from '../EditBlog/EditBlog';
import { DeleteBlog } from '../DeleteBlog/DeleteBlog';
import { useBlogs } from './useBlogs';

export function Main() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);

  const { setPage, blogs } = useBlogs();

  return (
    <>
      <aside className='main-aside'>
        <Modal
          isModalOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        >
          {editBlog && (
            <EditBlog
              blogId={editBlog.id}
              defaultTitle={editBlog.title}
              defaultDescription={editBlog.description}
              onClose={() => setIsEditModalOpen(false)}
            />
          )}
        </Modal>
        <Modal
          isModalOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <DeleteBlog />
        </Modal>
        {blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            onEditClick={() => {
              setIsEditModalOpen(true);
              setEditBlog(blog);
            }}
            onDeleteClick={() => {
              setIsDeleteModalOpen(true);
            }}
          />
        ))}
      </aside>
      <div className='show-all' onClick={() => setPage((page) => page + 1)}>
        <button className='roundable'>Показать все</button>
      </div>
    </>
  );
}
