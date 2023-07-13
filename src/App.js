import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  WhoWeAre,
  OurJourney,
  HowWeWork,
  Product,
  NewsReports,
  GetInvolved,
  Donate,
} from './components';

import { MoreNews } from './containers';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/ourjourney' element={<OurJourney />} />
        <Route path='/howwework' element={<HowWeWork />} />
        <Route path='/product' element={<Product />} />
        <Route path='/newsreports' element={<NewsReports />} />
        <Route path='/morenews' element={<MoreNews />} />
        <Route path='/getInvolved' element={<GetInvolved />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
    </Router>
  );
};

export default App;
