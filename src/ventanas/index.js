import React from 'react';
import { useNavigate } from 'react-router-dom';
import './stylos.css'; // Asegúrate de que la ruta sea correcta

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="Index">
      <header className="Index-header">
        <h1>Cifrados por desplazamiento</h1>
        <h2>Seguridad de los métodos de cifrado</h2>
        <table>
          <thead>
            <tr>
              <th>Método de Cifrado</th>
              <th>Seguridad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cifrado César</td>
              <td>Muy vulnerable; solo hay 25 desplazamientos posibles, lo que permite romperlo fácilmente mediante ataques de fuerza bruta y análisis de frecuencia.</td>
            </tr>
            <tr>
              <td>Cifrado Escitala</td>
              <td>Ofrece mayor seguridad al depender de la forma física del cilindro. Vulnerable a ataques de fuerza bruta si se conocen los posibles diámetros.</td>
            </tr>
          </tbody>
        </table>
        <p>Elige qué tipo de cifrado deseas usar</p>
        
        <div className="botones">
          <button onClick={() => navigate('/cesar')}>Cesar</button>
          <button onClick={() => navigate('/escitala')}>Escitala</button>
        </div>
      </header>
    </div>
  );
}

export default Index;

