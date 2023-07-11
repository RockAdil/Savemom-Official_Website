import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './product.scss';
import { Navbar, MobilePics } from '../../containers';
import { images } from '../../constants';

const Product = () => {
  const scrollRef = useRef(null);

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

  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='product__padding'>
        <div className='product__savemom'>
          <div className='product__savemom-content section__padding'>
            <h3 className='head-text'>Savemom</h3>
            <p className='p-text'>
              Savemom is an IOT based maternal health care solution that
              promises to effectively address the malady of poor maternal
              healthcare in the remote regions of India.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT - 1 */}
      <div className='product__content-1'>
        <div className='product__content-1_head'>
          <h3 className='sub__head-text'>Savemom Mobile App</h3>
          <small className='head__line' />
          <p className='p-text'>
            This app is used by healthcare worker, to track pregnant women and
            enter health data.
          </p>
        </div>

        <div className='content-1_mobile'>
          <div className='content-1_mobile_container' ref={scrollRef}>
            {MobilePics.map((img, index) => (
              <div className='content-1_mobile-pics' key={`img - ${index}`}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className='content-1_mobile-arrors'>
          <BsArrowLeftShort
            className='img__arror-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='img__arror-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>

      {/* CONTENT - 2 */}
      <div className='product__content-2'>
        <h3 className='head-text'>Download the app here</h3>
        <a
          href='https://play.google.com/store/apps/details?id=jiovio.savemom.app&pli=1'
          target='_blank'
          rel='noreferrer'
        >
          <img src={images.google_play} alt='google-play' />
        </a>
      </div>

      {/* CONTENT - 3 */}
      <div className='product__content-3'>
        <h3 className='sub__head-text'>Savemom Kit</h3>
        <small className='head__line' />
        <div className='product__content-3_info'>
          {/* CARDs */}
          <div className='row'>
            <div className='col-sm-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={images.allowear}
                  alt='Card imagecap'
                  style={{
                    backgroundImage:
                      'url(https://www.savemom.in/img/productbg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '225px',
                  }}
                />
                <div className='card-body' style={{ paddingBottom: '3rem' }}>
                  <h5 className='card-title'>Allowear</h5>
                  <p className='card-text'>
                    A smart wearable device which continuously tracks activity,
                    sleep cycle reminds to take medicine, checkup and that
                    increases the interaction of patient.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={images.allotricorder}
                  alt='Card imagecap'
                  style={{
                    backgroundImage:
                      'url(https://www.savemom.in/img/productbg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '225px',
                  }}
                />
                <div className='card-body' style={{ paddingBottom: '21px' }}>
                  <h5 className='card-title'>Allotricorder</h5>
                  <p className='card-text'>
                    Multi-functional health monitoring device designed as a
                    modern world Tricoder which record basic vital signs such as
                    Blood pressure, heart rate, ECG, blood oxygen, body
                    temperature, Blood glucose.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={images.fatscalekit}
                  alt='Card imagecap'
                  style={{
                    backgroundImage:
                      'url(https://www.savemom.in/img/productbg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '225px',
                  }}
                />
                <div className='card-body' style={{ paddingBottom: '3rem' }}>
                  <h5 className='card-title'>AlloBMI</h5>
                  <p className='card-text'>
                    This system provides body weight, BMI, body fat ratio, body
                    moisture, muscle mass, basal metabolic rate, and stores the
                    data to the cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
