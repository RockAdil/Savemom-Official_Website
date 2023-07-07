import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.819207870865!2d78.06820124387737!3d9.896026316036675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfca208dba03%3A0x9dabcbc095ce0612!2sSavemom%20Private%20Limited!5e0!3m2!1sen!2sin!4v1688656172334!5m2!1sen!2sin'
        width='100%'
        height='390'
        style={{ border: '0' }}
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Map;
