import { useState } from 'react';
import { useLogin } from './useLogin';
import { useRegistration } from './useRegistration';
import './Login.css';

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { handleLogin } = useLogin({ login, password, setError });
  const { handleRegister } = useRegistration({
    login,
    password,
    firstName,
    lastName,
    email,
    setError,
    handleLogin,
  });

  const handleChangePassword = (event) => {
    setError('');
    setPassword(event.target.value);
  };

  const handleChangeLogin = (event) => {
    setError('');
    setLogin(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setError('');
    setEmail(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setError('');
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setError('');
    setLastName(event.target.value);
  };

  const handleChangeLoginType = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <aside className='main-aside'>
      <div className='roundable login'>
        <h2>{isLoginForm ? 'Войти' : 'Зарегистрироваться'}</h2>
        <div className='field'>
          <label>Логин</label>
          <input value={login} onChange={handleChangeLogin} />
        </div>
        <div className='field'>
          <label>Пароль</label>
          <input
            value={password}
            type='password'
            onChange={handleChangePassword}
          />
        </div>
        {!isLoginForm && (
          <>
            <div className='field'>
              <label>Email</label>
              <input value={email} onChange={handleChangeEmail} />
            </div>
            <div className='field'>
              <label>Имя</label>
              <input value={firstName} onChange={handleChangeFirstName} />
            </div>
            <div className='field'>
              <label>Фамилия</label>
              <input value={lastName} onChange={handleChangeLastName} />
            </div>
          </>
        )}
        <div className='login-error'>{error}</div>
        <button
          className='submit-button'
          onClick={isLoginForm ? handleLogin : handleRegister}
        >
          {isLoginForm ? 'Войти' : 'Зарегистрироваться'}
        </button>
        <button className='submit-button' onClick={handleChangeLoginType}>
          {isLoginForm ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    </aside>
  );
}
