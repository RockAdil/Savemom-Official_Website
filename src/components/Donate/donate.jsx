import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import { Row, Col, Form } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import { FaArrowCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

import './donate.scss';
import { Navbar } from '../../containers';

const Donate = () => {
  const [name, setName] = useState('');
  const [mobile_no, setMobile_no] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  const [message, setMessage] = useState('');

  const [visible, setVisible] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !mobile_no ||
      !organization ||
      !email ||
      !jobtitle ||
      !message
    ) {
      setFormError('Please fill in all fields.');
      return;
    }

    try {
      await axios.post(
        'https://savemom-userform-7ddb4-default-rtdb.firebaseio.com/Donate.json',
        {
          name: name,
          mobile_number: mobile_no,
          organization: organization,
          email: email,
          jobtitle: jobtitle,
          message: message,
        }
      );

      // Reset form fields
      setName('');
      setMobile_no('');
      setOrganization('');
      setEmail('');
      setJobtitle('');
      setMessage('');
      setFormError('');
    } catch (error) {
      console.log(error);
      setFormError('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='getInvolved__padding'>
        <div className='getInvolved__savemom'>
          <div className='getInvolved__savemom-content section__padding'>
            <h3 className='head-text'>Donate Us</h3>
            <p className='p-text'>
              If you want to contribute in our journey of avoiding preventable
              maternal deaths, then here is the path for you. By giving the
              donations you can save atleast one mother's life.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT - PROPOSAL */}
      <div className='getInvolved__contact'>
        <div className='getInvolved__head'>
          <h3 className='sub__head-text'>Proposal Form</h3>
          <small className='head-line' />
        </div>

        <div className='getInvolved__content'>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6}>
                  <Form.Group className='mb-4 mb-sm-5' controlId='nameInput'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className='mb-4 mb-sm-5'
                    controlId='mobileNoInput'
                  >
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter number'
                      value={mobile_no}
                      onChange={(e) => setMobile_no(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Form.Group
                    className='mb-4 mb-sm-5'
                    controlId='organizationInput'
                  >
                    <Form.Label>Organization</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter organization'
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Form.Group className='mb-4 mb-sm-5' controlId='emailInput'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='name@example.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Form.Group
                    className='mb-4 mb-sm-5'
                    controlId='jobTitleInput'
                  >
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter job title'
                      value={jobtitle}
                      onChange={(e) => setJobtitle(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className='mb-4 mb-sm-5' controlId='messageInput'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              {formError && <p className='text-danger'>{formError}</p>}

              <Button className='btn btn_custom' type='submit'>
                Send Message
              </Button>
            </Form>
          </Container>
        </div>
      </div>

      {/* Contact */}
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
                  <span>
                    <a href='tel: +91 9361513147'>+91 9361513147</a>
                  </span>
                </div>
                <div className='link'>
                  <BiLogoGmail />
                  <span>
                    <a href='mailto:info@savemom.in'>info@savemom.in</a>
                  </span>
                </div>
                <div className='link'>
                  <GiRotaryPhone />
                  <span>Landline Numbers</span>
                </div>
                <ul>
                  <li>
                    <a href='tel: 04523500629'>04523500629</a>
                  </li>
                  <li>
                    <a href='tel: 04523500630'>04523500630</a>
                  </li>
                </ul>
              </div>

              <Link to='/donate'>
                <Button className='btn btn_custom'>Donate Us</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__header-info'
          >
            <div className='contact_map'>
              <iframe
                title='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.819207870865!2d78.06820124387737!3d9.896026316036675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfca208dba03%3A0x9dabcbc095ce0612!2sSavemom%20Private%20Limited!5e0!3m2!1sen!2sin!4v1688656172334!5m2!1sen!2sin'
                width='500'
                height='390'
                style={{ border: '0' }}
                loading='lazy'
              ></iframe>
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

export default Donate;
