import React from 'react';
import { motion } from 'framer-motion';

import './newsReports.scss';
import { Navbar, News } from '../../containers';
import { Link } from 'react-router-dom';
// import { images } from '../../constants';

const NewsReports = () => {
  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='news__padding'>
        <div className='news__savemom'>
          <div className='news__savemom-content section__padding'>
            <h3 className='head-text'>News & Reports</h3>
            <p className='p-text'>
              Recognition in articles always give us great enthusiasm. If we are
              getting recognition for some good initiative that trigger us to do
              more. Below are things which driven us to move further..
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT - 1 */}
      <div className='news__content-1'>
        <h3 className='sub__head-text'>News</h3>
        <small className='head-line' />

        <motion.div
          // animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__news-portfolio'
        >
          {News.map((news, index) => (
            <div className='app__news-item app__flex' key={index}>
              <div className='app__news-img app__flex'>
                <img src={news.src} alt='news' />
              </div>

              <div className='app__news-content'>
                <h6>{news.tag}</h6>
                <h4>{news.title}</h4>
                <p style={{ marginTop: 20 }}>{news.description}</p>
                <small>
                  <a href={`${news.link}`} target='_blank' rel='noreferrer'>
                    Read more...
                  </a>
                </small>
              </div>
            </div>
          ))}
        </motion.div>
        <Link to='/morenews'>
          <button className='more-btn'>More News</button>
        </Link>
      </div>
    </>
  );
};

export default NewsReports;
