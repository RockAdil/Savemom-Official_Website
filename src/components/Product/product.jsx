import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './product.scss';
import { Navbar, MobilePics } from '../../containers';

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
    </>
  );
};

export default Product;
