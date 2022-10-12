import { useState } from 'react';

export function BlogForm(props) {
  const { onSubmitForm, submitTitle, defaultTitle, defaultDescription } = props;
  const [title, setTitle] = useState(defaultTitle);
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState(defaultDescription);
  const onSubmit = (event) => {
    event.preventDefault();

    onSubmitForm({ title, description });
  };

  const handleChangeTitle = (event) => {
    if (event.target.value.length <= 20) {
      setTitle(event.target.value);
      setTitleError('');
    } else {
      setTitleError('Название должно быть меньше 20 символов');
    }
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form>
      <div>
        <label>Название</label>
        <input name='title' value={title} onChange={handleChangeTitle}></input>
        <div className='error'>{titleError}</div>
      </div>
      <div>
        <label>Описание</label>
        <input
          name='description'
          value={description}
          onChange={handleChangeDescription}
        ></input>
      </div>
      <button className='create-button' type='submit' onClick={onSubmit}>
        {submitTitle}
      </button>
    </form>
  );
}
