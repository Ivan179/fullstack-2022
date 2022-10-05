export function CreateBlog() {
  const onCreateBlog = (event) => {
    const inputs = document.querySelectorAll('input');

    event.preventDefault();
    const blog = {};
    inputs.forEach((input) => {
      blog[input.name] = input.value;
    });

    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <aside class='main-aside'>
      <div class='roundable post-form'>
        <form>
          <div>
            <label>Название</label>
            <input name='title'></input>
          </div>
          <div>
            <label>Описание</label>
            <input name='description'></input>
          </div>
          <button class='create-button' type='submit' onClick={onCreateBlog}>
            Создать блог
          </button>
        </form>
      </div>
    </aside>
  );
}
