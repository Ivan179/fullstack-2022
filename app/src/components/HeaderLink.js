import { Link, useLocation } from 'react-router-dom';

export const HeaderLink = (props) => {
  const { to, children, onClick } = props;
  const currentLocation = useLocation();

  function getClassName() {
    if (currentLocation.pathname === to) {
      return 'roundable colored';
    }

    return 'roundable';
  }

  if (!to) {
    <button onClick={onClick} className={getClassName()}>
      {children}
    </button>;
  }

  return (
    <Link to={to}>
      <button onClick={onClick} className={getClassName()}>
        {children}
      </button>
    </Link>
  );
};
