import { useState, useRef } from 'react';

export function PostCreate({ blogId }) {
  const [title, setTitle] = useState('');
  const fileRef = useRef();
  const [description, setDesctipion] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', fileRef.current.files[0]);

    fetch(`http://localhost:8000/api/posts/?blog=${blogId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('ACCESS')}`,
      },
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form>
      <div className='roundable post-item'>
        Форма создания поста
        <div>
          <label>Название</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Описание</label>
          <input
            value={description}
            onChange={(event) => setDesctipion(event.target.value)}
          />
        </div>
        <div>
          <label>Картинка</label>
          <input type='file' ref={fileRef} />
        </div>
        <button type='submit' onClick={handleSubmit}>
          Создать пост
        </button>
      </div>
    </form>
  );
}
