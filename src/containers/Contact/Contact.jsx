import React, { useState } from 'react';
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsFillTelephoneFill,
} from 'react-icons/bs';
import { ImGooglePlus } from 'react-icons/im';
import { BiLogoGmail } from 'react-icons/bi';
import { GiRotaryPhone } from 'react-icons/gi';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

import './contact.scss';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <div className='section__padding'>
        <div className='app__wrapper-contact'>
          <motion.div
            whileInView={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
          >
            <div className='app__wrapper_info contact-info'>
              <h4>Contact Info</h4>
              <h5>Madurai Address</h5>
              <small>
                38, First Floor, Arunachala Arcade,
                <br /> Tpk Road, Pasumalai, Madurai, <br /> Tamil Nadu 625004.
              </small>

              <h5>Bengalur Address</h5>
              <small>
                Lower Ground Floor, DD3, Diamond, <br /> District ISRO Colony,
                Domlur, Bengaluru, <br /> Karnataka 560008.
              </small>

              <h5>Singapore Address</h5>
              <small>
                No: 8 Burn Road,
                <br /> #12-05 Trivex,
                <br /> Singapore 369977.
              </small>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
          >
            <div className='app__wrapper_info contact-info'>
              <h4 className='join'>Join Us</h4>
              <div className='links'>
                <div className='link'>
                  <Link
                    to='https://www.facebook.com/jioviohealthcare/'
                    target='_blank'
                  >
                    <BsFacebook />
                  </Link>
                  <Link
                    to='https://www.linkedin.com/company/jiovio/?originalSubdomain=in'
                    target='_blank'
                  >
                    <BsLinkedin />
                  </Link>
                  <Link
                    to='https://twitter.com/i/flow/login?redirect_after_login=%2Fjio_vio'
                    target='_blank'
                  >
                    <BsTwitter />
                  </Link>
                  <Link
                    to='https://plus.google.com/111390518971591933162'
                    target='_blank'
                  >
                    <ImGooglePlus />
                  </Link>
                  <Link
                    to='https://www.youtube.com/channel/UCQHoHxfqc62-pAv9a4XTcJA/featured'
                    target='_blank'
                  >
                    <BsYoutube />
                  </Link>
                </div>
              </div>
              <div className='contact'>
                <div className='link'>
                  <BsFillTelephoneFill />
                  <span>+91 9361513147</span>
                </div>
                <div className='link'>
                  <BiLogoGmail />
                  <span>info@savemom.in</span>
                </div>
                <div className='link'>
                  <GiRotaryPhone />
                  <span>Landline Numbers</span>
                </div>
                <ul>
                  <li>04523500629</li>
                  <li>04523500630</li>
                </ul>
              </div>

              <Button className='btn btn_custom'>Donate</Button>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
          >
            <div className='app__wrapper_contact'>
              <h4>Contact Form</h4>
              <Container>
                <Form>
                  <Row>
                    <Col sm={6}>
                      <Form.Group
                        className='mb-4 mb-sm-5'
                        controlId='exampleForm.ControlTextarea1'
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter name'
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        className='mb-4 mb-sm-5'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control
                          type='number'
                          placeholder='Enter number'
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={6}>
                      <Form.Group
                        className='mb-4 mb-sm-5'
                        controlId='exampleForm.ControlInput1'
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder='name@example.com'
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group
                        className='mb-4 mb-sm-5'
                        controlId='exampleForm.ControlTextarea1'
                      >
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' rows={3} required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button className='btn btn_custom'>Send Message</Button>
                </Form>
              </Container>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='scroll-btn'>
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}
        />
      </div>

      <div className='hr'>
        <div />
      </div>

      <div className='footer'>
        <small>
          Copyright © 2018 Jiovio Healthcare <br /> © Content Owned And
          Maintained By Jiovio Healthcare, Developed And Hosted By{' '}
          <a
            href='https://adilahamed.vercel.app'
            className='adil-link'
            target='_blank'
            rel='noreferrer'
          >
            Adil Ahamed.
          </a>
        </small>
      </div>
    </>
  );
};

export default Contact;
