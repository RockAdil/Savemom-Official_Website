import React from 'react';

import './ourJourney.scss';
import { images } from '../../constants';
import { Navbar, Map, Contact } from '../../containers';

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

      {/* CONTENT - 1 */}
      <div className='ourjourney__content-1'>
        <div className='timeline'>
          <div className='container left'>
            <div className='content'>
              <h3>July 2016 - Idea</h3>
              <p>Brainstorming, Idea Validation, Prototype planning.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>September 2016 - Validate</h3>
              <p>
                Customer interviews, Idea validation, Paper prototypes,
                Stakeholder understanding.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>January 2017 - Prototype</h3>
              <p>
                Process Development, Product Development, Prototype
                manufacturing 10 kits.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>March 2017 - Field Test 1</h3>
              <p>
                Field testing pilot in Madurai 13 Pregnant women tested
                successfully.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>July 2017 - Field Test 2</h3>
              <p>
                Field testing pilot in Wayanad 7 pregnant women under regular
                antenatal visits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT - 2 */}
      <div className='ourjourney__content-2'>
        <div className='app__wrapper'>
          <div className='app__wrapper_img'>
            <img src={images.process} alt='process' />
          </div>
          <div className='app__wrapper_info'>
            <h3 className='sub__head-text'>Our Progress</h3>
            <small className='head-line' />

            <ul>
              <li>
                Incorporated WHO's recommendations for Antenatal care in the
                Savemom intervention process.
              </li>
              <li>
                Created a calendar in the regional languages that would act as
                both Health Awareness material and Fetus Growth Tracker for the
                pregnant women.
              </li>
              <li>
                Built a system for seamless delivery of Savemom solution with
                our partner NGOs in India through a continuous testing of our
                product and app.
              </li>
              <li>
                Working on developing a Savemom into a full-fledged care
                programme for the pregnant women up to First 1000 days (prenatal
                and postnatal) based on WHO and UNICEF standards and
                recommendations.
              </li>
            </ul>
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

export default OurJourney;
