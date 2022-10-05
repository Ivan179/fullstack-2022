import { HeaderLink } from './HeaderLink';

export function Header() {
  return (
    <header className='main-header'>
      <HeaderLink to=''>Главная</HeaderLink>
      <HeaderLink to='/about'>О сайте</HeaderLink>
      <HeaderLink to='/blog-create'>Создать блог</HeaderLink>
      <HeaderLink to='/my-blogs'>Мои блоги</HeaderLink>
      <HeaderLink to='/info'>информация</HeaderLink>
      <HeaderLink to='/login'>Войти</HeaderLink>
    </header>
  );
}
