import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import './navbar.scss';
import { images } from '../../constants';

const Navbar = ({ nav_bgcolor = 'bg-light', nav_color = 'navbar-light' }) => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${nav_color} ${nav_bgcolor} fixed-top`}
      style={{ backgroundColor: '#00877c', color: '#ffff' }}
    >
      <div className='container p-1'>
        <Link to='/' className='navbar-brand'>
          <img
            src={images.logo}
            width='40'
            height='40'
            style={{ marginRight: '1rem' }}
            className='d-inline-block align-center'
            alt='logo'
            onClick={scroll}
          />
          <span onClick={scroll}>Savemom</span>
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
              <Link to='/whoweare' className='nav-link' onClick={scroll}>
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
                <Link
                  to='/ourjourney'
                  className='dropdown-item'
                  onClick={scroll}
                >
                  Our Journey
                </Link>
                <Link
                  to='/howwework'
                  className='dropdown-item'
                  onClick={scroll}
                >
                  How We Work
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/product' className='nav-link' onClick={scroll}>
                Product
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/newsreports' className='nav-link' onClick={scroll}>
                News & Reports
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='https://blogs.savemom.in/'
                className='nav-link'
                onClick={scroll}
                target='_blank'
                rel='noreferrer'
              >
                Blog
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/getinvolved' className='nav-link' onClick={scroll}>
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
