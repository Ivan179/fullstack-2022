import { ajaxService } from '../services/ajaxService';
import { BlogForm } from './BlogForm/BlogForm';

export function CreateBlog() {
  return (
    <aside className='main-aside'>
      <div className='roundable post-form'>
        <BlogForm
          submitTitle='Создать блог'
          onSubmitForm={({ title, description, topic }) => {
            ajaxService('/blogs/', {
              method: 'POST',
              body: JSON.stringify({ title, description, topic }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          }}
        />
      </div>
    </aside>
  );
}
