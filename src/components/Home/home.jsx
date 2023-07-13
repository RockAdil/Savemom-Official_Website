import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Navbar, Map, Contact } from '../../containers';
import './home.scss';
import { images } from '../../constants';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* ---NAVBAR--- */}
      <Navbar />

      {/* ---CAROUSEL--- */}
      <motion.div
        whileInView={{ y: [70, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='home__caro'>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className='home__caro-content'
            controls={false}
          >
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.savemom}
                alt='First slide'
              />
              <Carousel.Caption className='caro-caption'>
                <h3 className='head-text'>
                  EVERY 2 MINUTES A WOMEN DIES GIVING BIRTH
                </h3>
                <Button
                  href='https://www.youtube.com/embed/lIEm7xuGels'
                  variant='outline-light'
                  target='_blank'
                  size='lg'
                  className='btn'
                >
                  Watch Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.preventable1}
                alt='Second slide'
                target='_blank'
              />

              <Carousel.Caption className='caro-caption'>
                <h3 className='head-text'>
                  MOST OF THE MATERNAL DEATHS ARE PREVENTABLE
                </h3>
                <Button
                  href='https://www.youtube.com/embed/lIEm7xuGels'
                  variant='outline-light'
                  target='_blank'
                  size='lg'
                  className='btn'
                >
                  Watch Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.savemomdeployment}
                alt='Third slide'
              />

              <Carousel.Caption className='caro-caption'>
                <h3 className='head-text'>
                  OUR DEPLOYMENT IN VELLARAMKUNNU VILLAGE
                </h3>
                <Button
                  href='https://www.youtube.com/embed/lIEm7xuGels'
                  variant='outline-light'
                  target='_blank'
                  size='lg'
                  className='btn'
                >
                  Watch Now
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.millenniumalliance}
                alt='Fourth slide'
              />

              <Carousel.Caption className='caro-caption'>
                <h3 className='head-text'>
                  WINNER OF MILLENNIUM ALLIANCE GRANT AWARD - SAVEMOM
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.uberexchangeprogram}
                alt='Fifth slide'
              />

              <Carousel.Caption className='caro-caption'>
                <h3 className='head-text'>
                  WINNER OF UBEREXCHANGE PROGRAM - SAVEMOM
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.codeforbillion2}
                alt='Sixth slide'
              />

              <Carousel.Caption className='caro-caption'>
                <h3 className='head-text'>
                  WINNER OF CODEFORTHENEXTBILLION - SAVEMOM
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='d-block w-100'
                src={images.Anjani_Mashelkar}
                alt='Seventh slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </motion.div>

      {/* CONTENT - 1  */}
      <div className='home__content-1' style={{ backgroundColor: '#00877c' }}>
        <motion.div
          whileInView={{ scale: [0.7, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='section__padding'>
            <h3 className='head-text'>AS A GROUP WE CAN CHANGE THIS</h3>
            <p className='p-text'>
              If women can get access to the quality and personalized maternal
              care during pregnancy means most of the deaths are preventable.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CONTENT - 2 */}
      <div className='home__content-2'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className='section__padding home__content-2_info'>
            <h3 className='head-text'>
              THE WAVELET IS EXTENSIVE IF A MOTHER DIES
            </h3>
            <p className='p-text'>
              That Child has 15 times more chance to die before age two, her
              family also suffers because of this and her other children also
              have a more possibility to die prematurely.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CONTENT - 3 */}
      <div className='home__content-3' style={{ backgroundColor: '#00877c' }}>
        <motion.div
          whileInView={{ scale: [0.7, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='section__padding'>
            <h3 className='head-text'>ABOUT US</h3>
            <p className='p-text'>
              Savemom provides connected maternal care at home using local
              communities, smart devices and telemedicine software.
            </p>
            <Link to='/whoweare'>
              <Button variant='outline-light' size='lg' className='btn'>
                Read More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* CONTENT - 4 */}
      <div className='home__content-4'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className='section__padding'>
            <h3 className='head-text'>HELP US TO END MATERNAL DEATHS</h3>
            <p className='p-text'>
              We can end preventable maternal deaths, but we can't do it alone.
              Together, we can make maternal mortality a thing of the past.
            </p>
            <Link to='/getinvolved'>
              <Button variant='outline-light' size='lg' className='btn'>
                GET INVOLVED
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* MAP */}
      <Map />

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default Home;
