import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/whoweare' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
