import { HeaderLink } from './HeaderLink';
import { useLocation } from 'react-router-dom';

export function Header() {
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);
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
