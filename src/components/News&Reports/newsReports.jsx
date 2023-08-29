import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './newsReports.scss';
import { Navbar, News, All, Map, Contact } from '../../containers';
import { Link } from 'react-router-dom';
// import { images } from '../../constants';

const NewsReports = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = item => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All' || item === 'INDIA') {
        setFilterWork(All);
      } else {
        // setFilterWork(works.filter((work) => work.tags.includes(item)));
        return setFilterWork([]);
      }
    }, 500);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setFilterWork(All);
  }, []);

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

      {/* CONTENT - 2 */}
      <div className='app__content-2'>
        <h3 className='sub__head-text'>Reports</h3>
        <small className='head-line' />
        <div className='app__work-filter'>
          {[
            'All',
            'INDIA',
            'SINGAPORE',
            'REGIONAL FACTSHEETS',
            'DIGITAL INNOVATION FACTSHEETS',
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex work-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
        >
          {filterWork.map((work, index) => (
            <div className='app__content-2_work' key={index}>
              <div className='app__content-2_img'>
                <a
                  href='https://www.savemom.in/documents/pilotreport.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={work.src} alt={work.title} />
                </a>
              </div>
              <h5>{work.title}</h5>
            </div>
          ))}
        </motion.div>
      </div>

      {/* MAP */}
      <Map />

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default NewsReports;
