import { BlogItem } from '../BlogItem';
import { useMyBlogs } from './useMyBlogs';

export function MyBlogs(props) {
  useMyBlogs();

  return (
    <aside className='main-aside'>
      <div>МОИ БЛОГИ</div>
    </aside>
  );
}
