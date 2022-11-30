import { ajaxAuthService } from '../../services/ajaxService';

export function useRegistration({
  login,
  password,
  firstName,
  lastName,
  setError,
  email,
  handleLogin,
}) {
  const handleRegister = () => {
    if (!login) {
      setError('Введите логин');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    ajaxAuthService('/user/', {
      method: 'POST',
      body: JSON.stringify({
        username: login,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => handleLogin());
    setTimeout(() => {
      handleLogin();
    }, 1000);
  };

  return { handleRegister };
}
