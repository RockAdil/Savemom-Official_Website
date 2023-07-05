import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <nav className='container p-2'>
        <a className='navbar-brand' href='/'>
          <img
            src='https://www.savemom.in/img/logo.png'
            width='40'
            height='40'
            style={{ marginRight: '1rem' }}
            className='d-inline-block align-center'
            alt=''
          />
          Savemom
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
          style={{ backgroundColor: '#00877c' }}
        >
          <span className='navbar-toggler-icon d-none'></span>
          <RxHamburgerMenu style={{ color: '#fff', fontSize: '1.5rem' }} />
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav active  '>
            <li className='nav-item'>
              <Link to={'/woweare'}>
                <a className='nav-link' href='#whoweare'>
                  Who We Are
                </a>
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Our Work
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <a className='dropdown-item' href='#'>
                  Our Journey
                </a>
                <a className='dropdown-item' href='#'>
                  How We Work
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#whoweare'>
                Product
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#whoweare'>
                News & Reports
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#whoweare'>
                Get Involved
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
