import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './ventanas/index';
import CifradoCesar from './ventanas/cifradoCesar';
import CifradoEscitala from './ventanas/cifradoEscitala';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cesar" element={<CifradoCesar />} />
        <Route path="/escitala" element={<CifradoEscitala />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
