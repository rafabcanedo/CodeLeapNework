import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Network from './pages/Network';

export default function AppRouter() {
 return(
     <Router>
      <Routes>
   
       <Route path="/" element={<Home />} />
   
       <Route path="/network" element={<Network />} />
   
      </Routes>
     </Router>
 )
}