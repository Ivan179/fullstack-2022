import { Link, useLocation } from 'react-router-dom';

export const HeaderLink = (props) => {
  const { to, children } = props;
  const currentLocation = useLocation();

  function getClassName() {
    if (currentLocation.pathname === to) {
      return 'roundable colored';
    }

    return 'roundable';
  }

  return (
    <Link to={to}>
      <button className={getClassName()}>{children}</button>
    </Link>
  );
};
