import { Link } from 'react-router-dom';

export function Profile({ children }) {
  return (
    <div style={{ marginTop: 100 }}>
      переключение профилей
      <Link to='/profile1'>Профиль 1</Link>
      <Link to='/profile2'>Профиль 2</Link>
      {children}
    </div>
  );
}
