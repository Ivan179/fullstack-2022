import { useState } from 'react';

export function BlogForm(props) {
  const {
    onSubmitForm,
    submitTitle,
    defaultTitle,
    defaultDescription,
    defaultTopic,
  } = props;
  const [title, setTitle] = useState(defaultTitle);
  const [titleError, setTitleError] = useState('');
  const [description, setDescription] = useState(defaultDescription);
  const [topic, setTopic] = useState(defaultTopic);
  const onSubmit = (event) => {
    event.preventDefault();

    onSubmitForm({ title, description, topic });
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

  const handleChangeTopic = (event) => {
    setTopic(event.target.value);
  };

  return (
    <form>
      <div className='field'>
        <label>Название</label>
        <input name='title' value={title} onChange={handleChangeTitle}></input>
        <div className='error'>{titleError}</div>
      </div>
      <div className='field'>
        <label>Описание</label>
        <input
          name='description'
          value={description}
          onChange={handleChangeDescription}
        ></input>
      </div>
      <div className='field'>
        <label>Тема</label>
        <input name='topic' value={topic} onChange={handleChangeTopic}></input>
      </div>
      <div>
        <button className='submit-button' type='submit' onClick={onSubmit}>
          {submitTitle}
        </button>
      </div>
    </form>
  );
}
