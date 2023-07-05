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
      <Navbar />
      <div className='home'>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className='home__caro'
          controls={false}
        >
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.savemom.in/images/banner/small/savemom.jpg'
              alt='First slide'
            />
            <Carousel.Caption className='caro-caption'>
              <h3>EVERY 2 MINUTES A WOMEN DIES GIVING BIRTH</h3>
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
              <h3>MOST OF THE MATERNAL DEATHS ARE PREVENTABLE</h3>
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
              <h3>OUR DEPLOYMENT IN VELLARAMKUNNU VILLAGE</h3>
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
              <h3>WINNER OF MILLENNIUM ALLIANCE GRANT AWARD - SAVEMOM</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src=' https://www.savemom.in/images/banner/small/uberexchangeprogram.jpg'
              alt='Fifth slide'
            />

            <Carousel.Caption className='caro-caption'>
              <h3>WINNER OF UBEREXCHANGE PROGRAM - SAVEMOM</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.savemom.in/images/banner/codeforbillion2.jpg'
              alt='Sixth slide'
            />

            <Carousel.Caption className='caro-caption'>
              <h3>WINNER OF CODEFORTHENEXTBILLION - SAVEMOM</h3>
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
    </>
  );
};

export default Home;
