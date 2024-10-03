import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Index from './ventanas/index';
import CifradoCesar from './ventanas/cifradoCesar';
import CifradoEscitala from './ventanas/cifradoEscitala';
import TareaDos from './ventanas/nuevo/tareaDos';
import Navbar from './navbar';
import Registro from './ventanas/nuevo/registro_usuarios';
import Login from './ventanas/nuevo/login';

const AppRouter = () => {
  const location = useLocation(); 

  return (
    <div>
      {location.pathname === '/tareaDos' && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cesar" element={<CifradoCesar />} />
        <Route path="/escitala" element={<CifradoEscitala />} />
        <Route path="/tareaDos" element={<TareaDos />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
