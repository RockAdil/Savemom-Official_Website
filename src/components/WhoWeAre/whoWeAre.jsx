import React, { useEffect, useRef } from 'react';
import Navbar from '../../containers/Navbar/Navbar';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './whoWeAre.scss';
import { youtubeVideos } from '../../containers/Youtube/Youtube';
import { Supporters, Awards, Partners } from '../../containers/Brand/Brand';
import Map from '../../containers/Map/Map';
import Contact from '../../containers/Contact/Contact';

const WhoWeAre = () => {
  const scrollRef = useRef(null);
  const moveRef1 = useRef(null);
  const moveRef2 = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (current !== null) {
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const { current } = moveRef1;

      if (current !== null) {
        current.scrollLeft += 250;
      }
    }, 4000);

    const moveInterval = setInterval(() => {
      const { current } = moveRef2;

      if (current !== null) {
        current.scrollLeft += 250;
      }
    }, 7000);

    return () => {
      clearInterval(scrollInterval);
      clearInterval(moveInterval);
    };
  }, []);

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

      {/* CONTENT - 3 */}
      <div className='whoweare__content-3 section__padding'>
        <h3 className='sub_head-text' style={{ textAlign: 'center' }}>
          Impact of Savemom
        </h3>
        <div className='head-line' />

        <div className='content-3_youtube'>
          <div className='content-3_youtube_container' ref={scrollRef}>
            {youtubeVideos.map((video, index) => (
              <div className='content-3_youtube-video' key={`video - ${index}`}>
                <iframe
                  width='367'
                  height='250'
                  src={video.src}
                  title={video.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <div className='content-3_youtube-arrors'>
          <BsArrowLeftShort
            className='video__arror-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='video__arror-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>

      {/* CONTENT - 4 */}
      <div
        className='whoweare__content-4'
        style={{ backgroundColor: '#00877c' }}
      >
        <div className='section__padding'>
          <div className='whoweare__content-4_info'>
            <div className='whoweare__content-4_info-count'>
              <h1 className='count'>1000+</h1>
              <p className='count-text'>Women Reached</p>
            </div>
            <div className='whoweare__content-4_info-count'>
              <h1 className='count'>2+</h1>
              <p className='count-text'>Years</p>
            </div>
            <div className='whoweare__content-4_info-count'>
              <h1 className='count'>25+</h1>
              <p className='count-text'>Programs</p>
            </div>
            <div className='whoweare__content-4_info-count'>
              <h1 className='count'>20+</h1>
              <p className='count-text'>Partners</p>
            </div>
            <div className='whoweare__content-4_info-count'>
              <h1 className='count'>5+</h1>
              <p className='count-text'>Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT - 5 */}
      <div className='whoweare__content-5'>
        <h3 className='sub_head-text' style={{ textAlign: 'center' }}>
          Supporters
        </h3>
        <div className='head-line' />

        <div className='content-5_brand'>
          <div className='content-5_brand_container' ref={moveRef1}>
            {Supporters.map((brand, index) => (
              <div className='content-5_brand-img' key={index}>
                <img src={brand.src} alt={brand.title} />
                <p className='p-text' style={{ color: '#000' }}>
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT - 6  (content-5 Stylying is used for Content-6 so that className are same as the Content-5)  */}
      <div className='whoweare__content-5'>
        <h3 className='sub_head-text' style={{ textAlign: 'center' }}>
          Awards
        </h3>
        <div className='head-line' />

        <div className='content-5_brand'>
          <div className='content-5_brand_container' ref={moveRef2}>
            {Awards.map((brand, index) => (
              <div className='content-5_brand-img' key={index}>
                <img src={brand.src} alt={brand.title} />
                <p className='p-text' style={{ color: '#000' }}>
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT - 7 */}
      <div className='whoweare__content-7'>
        <h3 className='sub_head-text' style={{ textAlign: 'center' }}>
          Our Key Partner(s)
        </h3>
        <div className='head-line' />

        <div className='content-7_partner'>
          {Partners.map((brand, index) => (
            <div className='content-7_partner-img' key={index}>
              <img src={brand.src} alt={brand.title} />
              <p className='p-text' style={{ color: '#000' }}>
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MAP */}
      <Map />

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default WhoWeAre;
