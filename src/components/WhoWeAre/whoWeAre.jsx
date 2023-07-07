import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';

import './whoWeAre.scss';

const WhoWeAre = () => {
  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />

      <div className='whoweare__about'>
        <div className='whoweare__about-content section__padding'>
          <h3 className='head-text'>About Us</h3>
          <p className='p-text'>
            In Savemom, we partner with the hospitals, NGOs and government
            institutions to bring in a digital healthcare ecosystem to make
            pregnancy a joyful experience."Healthy Mom, Healthy Baby"
          </p>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
