import { BlogItem } from './BlogItem';

export function MyBlogs(props) {
  return (
    <aside className='main-aside'>
      <BlogItem
        id={1}
        title={'Как я посетил Голландию'}
        description={'Будет очень интересно!'}
      />
      <BlogItem
        id={2}
        title={'Как я посетил Мадагаскар'}
        description={'Будет супер интересно!'}
      />
    </aside>
  );
}
