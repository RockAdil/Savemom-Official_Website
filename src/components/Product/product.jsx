import React from 'react';

import './product.scss';
import { Navbar } from '../../containers';

const Product = () => {
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
    </>
  );
};

export default Product;
