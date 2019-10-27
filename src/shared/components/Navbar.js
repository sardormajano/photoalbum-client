import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ROUTES } from '../constants';
import { authService } from '../services';

function NavbarWithRouter({ location }) {
  const { pathname } = location;
  const links = authService.isAuthorized()
    ? [
        {
          isActive: pathname === ROUTES.GALLERY,
          to: ROUTES.GALLERY,
          label: 'Gallery'
        },
        {
          isActive: pathname === ROUTES.IMAGE_UPLOAD,
          to: ROUTES.IMAGE_UPLOAD,
          label: 'Image Upload'
        },
        {
          isActive: pathname === ROUTES.SIGN_OUT,
          to: ROUTES.SIGN_OUT,
          label: 'Sign Out'
        }
      ]
    : [
        {
          isActive: pathname === ROUTES.SIGN_IN,
          to: ROUTES.SIGN_IN,
          label: 'Sign In'
        },
        {
          isActive: pathname === ROUTES.SIGN_UP,
          to: ROUTES.SIGN_UP,
          label: 'Sign Up'
        }
      ];

  const renderLinks = () =>
    links.map(link => (
      <li key={link.to} className={link.isActive ? 'active' : null}>
        <NavLink exact={true} activeClassName={'active'} to={link.to}>
          {link.label}
        </NavLink>
      </li>
    ));

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/gallery' className='brand-logo'>
          &nbsp; MPhA
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
}

export const Navbar = withRouter(NavbarWithRouter);
