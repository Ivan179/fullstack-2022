import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderLink } from './HeaderLink';
import { ajaxService } from '../services/ajaxService';
import { setUser } from '../slices/user';
import { isLogin } from '../utils/isLogin';

export function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (isLogin()) {
      ajaxService('/user/current').then((data) => {
        dispatch(setUser(data));
      });
    }
  }, []);

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
        <HeaderLink onClick={onLogout}>
          Выйти, {user && user.username}
        </HeaderLink>
      ) : (
        <HeaderLink to='/login'>Войти</HeaderLink>
      )}
    </header>
  );
}
