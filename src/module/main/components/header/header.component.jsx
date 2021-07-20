import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <NavLink className='navbar-brand' to='/'>
            Navbar
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <NavLink
                    exact={true}
                  activeClassName='nav-link-active'
                  className='nav-link'
                  to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='nav-link-active'
                  className='nav-link'
                  to='/movie-detail'>
                  movie detail
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='nav-link-active'
                  className='nav-link'
                  to='/sign-in'>
                  sign in
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='nav-link-active'
                  className='nav-link'
                  to='/sign-up'>
                  sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
