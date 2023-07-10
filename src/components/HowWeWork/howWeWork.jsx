import React from 'react';

import { Navbar, Map, Contact } from '../../containers';
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
      <div className='howwework__content-1'>
        <div className='howwework__content-1_img'>
          <img src={images.savemomproducts} alt='product_kit' />
          <img src={images.savemomproducts_mbl} alt='product_kit' />
        </div>
      </div>

      {/* CONTENT - 2 */}
      <div className='howwework__content-2'>
        <img src={images.contributors} alt='contributers' />
      </div>

      {/* CONTENT - 3 */}
      <div className='howwework__content-3'>
        <h3 className='sub__head-text'>
          Single Product for Making Healthy Pregnancy
        </h3>
        <small className='head-line' />

        <div className='howwework__content-3_img'>
          <img src={images.workflow} alt='workflow' />
          <img src={images.workflow_mbl} alt='workflow' />
        </div>
      </div>

      {/* CONTENT - 4 */}
      <div className='howwework__content-4 section__padding'>
        <h3 className='sub__head-text'>Our Presence</h3>
        <small className='head-line' />

        <div className='app__wrapper'>
          <div className='howwework__content-4_img'>
            <img src={images.map} alt='map' />
          </div>
          <div className='howwework__content-4_video'>
            <iframe
              width='560'
              height='340'
              src='https://www.youtube-nocookie.com/embed/lIEm7xuGels'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* MAP */}
      <Map />

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default HowWeWork;
