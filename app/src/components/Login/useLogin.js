import { ajaxAuthService } from '../../services/ajaxService';

export function useLogin({ login, password, setError }) {
  const handleLogin = () => {
    if (!login) {
      setError('Введите логин');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    ajaxAuthService('/token/', {
      method: 'POST',
      body: JSON.stringify({ username: login, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        window.localStorage.setItem('ACCESS', data.access);
        window.localStorage.setItem('REFRESH', data.refresh);
        window.location.href = '/';
      })
      .catch(() => {
        setError('Неверный логин или пароль');
      });
  };

  return { handleLogin };
}
