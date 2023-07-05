import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

import Navbar from '../../containers/Navbar/Navbar';
import './home.scss';

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
              src='https://www.savemom.in/images/banner/small/savemom.jpg'
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
                className='watch-now-button'
              >
                Watch Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.savemom.in/images/banner/preventable1.jpeg'
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
                className='watch-now-button'
              >
                Watch Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.savemom.in/images/banner/savemomdeployment.jpg'
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
                className='watch-now-button'
              >
                Watch Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.savemom.in/images/banner/millenniumalliance.jpg'
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
              src=' https://www.savemom.in/images/banner/small/uberexchangeprogram.jpg'
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
              src='https://www.savemom.in/images/banner/codeforbillion2.jpg'
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
              src='https://www.savemom.in/images/banner/Anjani Mashelkar.jpeg'
              alt='Seventh slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* CONTENT - 1  */}
      <div className='home__content-1' style={{ backgroundColor: '#00877c' }}>
        <div className='section__padding'>
          <h3 className='head-text'>AS A GROUP WE CAN CHANGE THIS</h3>
          <p className='p-text'>
            If women can get access to the quality and personalized maternal
            care during pregnancy means most of the deaths are preventable.
          </p>
        </div>
      </div>

      {/* CONTENT - 2 */}
      <div className='home__content-2'>
        <div className='section__padding'>
          <h3 className='head-text'>
            THE WAVELET IS EXTENSIVE IF A MOTHER DIES
          </h3>
          <p className='p-text'>
            That Child has 15 times more chance to die before age two, her
            family also suffers because of this and her other children also have
            a more possibility to die prematurely.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
