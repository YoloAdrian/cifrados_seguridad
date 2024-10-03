import React from 'react';
import { Link } from 'react-router-dom';
import './stylosNav.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Registro">Registro de Usuarios</Link>
        </li>
        <li>
          <Link to="/Login">Login </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
