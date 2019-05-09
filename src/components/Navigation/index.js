import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_IN}>Entrar</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>¡Bienvenido!</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Cuenta</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Administración</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
