import React from 'react';

import './ourJourney.scss';
import Navbar from '../../containers/Navbar/Navbar';

const OurJourney = () => {
  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='ourjourney__padding'>
        <div className='ourjourney__journey'>
          <div className='ourjourney__journey-content section__padding'>
            <h3 className='head-text'>Journey</h3>
            <p className='p-text'>
              Our Vision is To provide high quality maternal care to every
              pregnant women. So that, we can reduce the passing rate of
              pregnant women completely. We step forward to achieve this.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurJourney;
