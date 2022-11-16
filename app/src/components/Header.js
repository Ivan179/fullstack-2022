import { HeaderLink } from './HeaderLink';
import { isLogin } from '../utils/isLogin';

export function Header() {
  function onLogout() {
    window.localStorage.setItem('ACCESS', '');
    window.localStorage.setItem('REFRESH', '');
    window.location.href = '/login';
  }

  return (
    <header className='main-header'>
      <HeaderLink to=''>Главная</HeaderLink>
      <HeaderLink to='/about'>О сайте</HeaderLink>
      {isLogin() && <HeaderLink to='/blog-create'>Создать блог</HeaderLink>}
      {isLogin() && <HeaderLink to='/my-blogs'>Мои блоги</HeaderLink>}
      <HeaderLink to='/info'>информация</HeaderLink>
      {isLogin() ? (
        <HeaderLink onClick={onLogout}>Выйти</HeaderLink>
      ) : (
        <HeaderLink to='/login'>Войти</HeaderLink>
      )}
    </header>
  );
}
