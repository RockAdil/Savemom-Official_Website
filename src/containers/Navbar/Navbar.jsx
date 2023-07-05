import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <div className='container p-1'>
        <Link to='/' className='navbar-brand'>
          <img
            src='https://www.savemom.in/img/logo.png'
            width='40'
            height='40'
            style={{ marginRight: '1rem' }}
            className='d-inline-block align-center'
            alt=''
          />
          Savemom
        </Link>
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
          <ul className='navbar-nav active'>
            <li className='nav-item'>
              <Link to='/whoweare' className='nav-link'>
                Who We Are
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                to='/ourjourney'
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
              >
                Our Work
              </Link>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/ourjourney' className='dropdown-item'>
                  Our Journey
                </Link>
                <Link to='/howwework' className='dropdown-item'>
                  How We Work
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/product' className='nav-link'>
                Product
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/newsreports' className='nav-link'>
                News & Reports
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/getinvolved' className='nav-link'>
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
