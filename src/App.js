import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  WhoWeAre,
  OurJourney,
  HowWeWork,
  // GetInvolved,
  // NewsReports,
  // Product,
} from './components';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/ourjourney' element={<OurJourney />} />
        <Route path='/howwework' element={<HowWeWork />} />
        {/* <Route path='/product' element={<Product />} />
        <Route path='/newsreports' element={<NewsReports />} />
        <Route path='/getInvolved' element={<GetInvolved />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
