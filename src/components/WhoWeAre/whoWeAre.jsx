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

      {/* CONTENT - 1 */}
      <div className='whoweare__content-1 section__padding'>
        <div className='app__wrapper'>
          <div className='app__wrapper_info'>
            <img
              src='https://www.savemom.in/images/staticpages/keyproblem.png'
              alt='bulb'
              width='80px'
              height='80px'
            />
            <h3 className='sub__head-text'>Key Problem</h3>
            <p className='p-text'>
              The day of birth can be a dangerous time for mothers and babies.
              Based on the Statistical data, Everyday around the world, 800
              women and 21000 children die due to preventable complications due
              to unavailability of doctors, nearby healthcare centers and poor
              knowledge among rural women. But we want to change this.
            </p>
          </div>

          <div className='app__wrapper_info'>
            <img
              src='https://www.savemom.in/images/staticpages/missionimg.png'
              alt='mission'
              width='90px'
              height='80px'
            />
            <h3 className='sub__head-text'>Mission</h3>
            <p className='p-text'>
              The key component of our MISSION is "Personal healthcare kit for
              pregnant ladies and healing facilities" to maintain a strategic
              distance from the passing rate of pregnant women. And furthermore
              to decrease the proportion of the maternal ladies death and making
              pregnancy the joyful experience.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT - 2 */}
      <div
        className='whoweare__content-2'
        style={{ backgroundColor: '#00877c' }}
      >
        <div className='section__padding'>
          <div className='app__wrapper'>
            <div className='app__wrapper_info'>
              <div className='content-2_icon'>
                <i
                  className='fa fa-smile-o icon'
                  style={{
                    color: '#00877c',
                    width: '10px',
                    height: '10px',
                    fontSize: '25px',
                  }}
                />
              </div>
              <h3 className='sub__head-text'>Best Pregnancy Experience</h3>
              <p className='p-text'>
                Savemom gives you a healthy and joyful pregnancy experience
                before, during and after pregnancy and childbirth.
              </p>
            </div>

            <div className='app__wrapper_info'>
              <div className='content-2_icon'>
                <i
                  className='fa  fa-heart'
                  style={{
                    color: '#00877c',
                    width: '10px',
                    height: '10px',
                    fontSize: '25px',
                  }}
                />
              </div>
              <h3 className='sub__head-text'>No more Malnutrition</h3>
              <p className='p-text'>
                Nutrition elements can be provided by Savemom team partnering
                with NGO's. So, no Malnutrition anymore
              </p>
            </div>

            <div className='app__wrapper_info'>
              <div className='content-2_icon'>
                <i
                  className='fa fa-angle-double-down'
                  style={{
                    color: '#00877c',
                    width: '10px',
                    height: '10px',
                    fontSize: '25px',
                  }}
                />
              </div>
              <h3 className='sub__head-text'>Reduce Maternal Mortality</h3>
              <p className='p-text'>
                By providing personalized healthcare for pregnant ladies
                maternal mortality rate will be decreased.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
