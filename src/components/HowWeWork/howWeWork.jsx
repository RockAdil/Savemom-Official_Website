import React from 'react';

import Navbar from '../../containers/Navbar/Navbar';
import { images } from '../../constants';
import './howWeWork.scss';

const HowWeWork = () => {
  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='howwework__padding'>
        <div className='howwework__work'>
          <div className='howwework__work-content section__padding'>
            <h3 className='head-text'>How We Work</h3>
            <p className='p-text'>
              Personalized and doorstep maternal care is very important to
              reduce the maternal mortality. We are in the journey to achieve
              this.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT - 1 */}
      <div className='howwework__content-1 section__padding'>
        <div className='howwework__content-1_img'>
          <img src={images.savemomproducts} alt='product_kit' />
          <img src={images.savemomproducts_mbl} alt='product_kit' />
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
