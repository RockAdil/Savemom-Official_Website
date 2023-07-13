import React, { useState, useEffect } from 'react';
import { Contact, Five, Four, Map, Navbar, One, Three, Two } from '../index';
import './MoreNews.scss';

const MoreNews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    });
  }, [currentPage]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const itemsPerPage = 5;

  const allItems = [...One, ...Two, ...Three, ...Four, ...Five];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='news__padding'>
        <div className='news__savemom'>
          <div className='news__savemom-content section__padding'>
            <h3 className='head-text'>News & Reports</h3>
            <p className='p-text'>
              Recognition in articles always gives us great enthusiasm. If we
              are getting recognition for some good initiative, that triggers us
              to do more. Below are things that have driven us to move further.
            </p>
          </div>
        </div>
      </div>

      {/* REPORTS */}
      <div className='reports'>
        {currentItems.map((report, index) => (
          <div className='reports__savemom' key={index}>
            <div className='reports__savemom-img'>
              <img src={report.src} alt={report.tag} />
            </div>
            <div className='reports__savemom-content'>
              <h6>{report.tag}</h6>
              <h4>{report.title}</h4>
              <p>{report.description}</p>
              <a href={report.link} target='_blank' rel='noreferrer'>
                <button className='read-btn'>Read more</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* PAGE Navigate */}
      <div className='page'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>

      {/* MAP */}
      <Map />

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default MoreNews;
