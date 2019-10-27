import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ROUTES } from '../constants';

function NavbarWithRouter({ location }) {
  const { pathname } = location;

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/gallery' className='brand-logo'>
          &nbsp; MPhA
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li className={pathname === ROUTES.IMAGE_UPLOAD ? 'active' : null}>
            <NavLink
              exact={true}
              activeClassName='active'
              to={ROUTES.IMAGE_UPLOAD}
            >
              Image Upload
            </NavLink>
          </li>
          <li className={pathname === ROUTES.GALLERY ? 'active' : null}>
            <NavLink exact={true} activeClassName='active' to={ROUTES.GALLERY}>
              Gallery
            </NavLink>
          </li>
          <li className={pathname === ROUTES.SIGN_IN ? 'active' : null}>
            <NavLink exact={true} activeClassName='active' to={ROUTES.SIGN_IN}>
              Sign in
            </NavLink>
          </li>
          <li className={pathname === ROUTES.SIGN_OUT ? 'active' : null}>
            <NavLink exact={true} activeClassName='active' to={ROUTES.SIGN_OUT}>
              Sign out
            </NavLink>
          </li>
          <li className={pathname === ROUTES.SIGN_UP ? 'active' : null}>
            <NavLink exact={true} activeClassName='active' to={ROUTES.SIGN_UP}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export const Navbar = withRouter(NavbarWithRouter);
