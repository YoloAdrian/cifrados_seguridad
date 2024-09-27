import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styloscesar.css'; 

const CifradoCesar = () => {
  const navigate = useNavigate();
  
  const [texto, setTexto] = useState('');
  const [desplazamiento, setDesplazamiento] = useState(''); 
  const [textoCifrado, setTextoCifrado] = useState('');
  const [desplazamientoDescifrado, setDesplazamientoDescifrado] = useState(''); 
  const [textoDescifrado, setTextoDescifrado] = useState(''); 
  const [desplazamientoUsado, setDesplazamientoUsado] = useState(null); 

  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [isModalDescifradoAbierto, setIsModalDescifradoAbierto] = useState(false);

  const abrirModal = () => {
    const regexTexto = /^[A-Za-z\s]{1,30}$/;
    if (!regexTexto.test(texto)) {
      alert('El texto debe tener máximo 30 caracteres y no debe contener números.');
      return;
    }

    const numDesplazamiento = parseInt(desplazamiento);
    if (isNaN(numDesplazamiento) || numDesplazamiento < 1 || numDesplazamiento > 26) {
      alert('El desplazamiento debe ser un número entre 1 y 26.');
      return;
    }

    const textoCifradoResultado = aplicarCifradoCesar(texto, numDesplazamiento);
    setTextoCifrado(textoCifradoResultado);
    setDesplazamientoUsado(numDesplazamiento);

    if (isModalDescifradoAbierto) {
      cerrarModalDescifrado();
    }
    
    setIsModalAbierto(true);
    setTexto('');
    setDesplazamiento('');
  };

  const cerrarModal = () => {
    setIsModalAbierto(false);
  };

  const abrirModalDescifrado = () => {
    setIsModalAbierto(false); 
    setIsModalDescifradoAbierto(true);  
  };

  const cerrarModalDescifrado = () => {
    setIsModalDescifradoAbierto(false);
    setTextoDescifrado(''); 
  };

  const descifrarMensaje = () => {
    const numDesplazamiento = parseInt(desplazamientoDescifrado);
    
    if (isNaN(numDesplazamiento) || numDesplazamiento < 1 || numDesplazamiento > 26) {
      alert('El desplazamiento debe ser un número entre 1 y 26.');
      return;
    }

    if (numDesplazamiento !== desplazamientoUsado) {
      alert('El desplazamiento ingresado no coincide con el que se usó para cifrar.');
      return;
    }

    const textoDescifradoResultado = aplicarCifradoCesar(textoCifrado, 26 - numDesplazamiento); 
    setTextoDescifrado(textoDescifradoResultado);
    setDesplazamientoDescifrado('');
  };

  const aplicarCifradoCesar = (textoEntrada, valorDesplazamiento) => {
    return textoEntrada.split('').map(caracter => {
      if (caracter.match(/[a-z]/i)) {
        const codigoCaracter = caracter.charCodeAt(0);
        let codigoBase = codigoCaracter >= 65 && codigoCaracter <= 90 ? 65 : 97; 
        
        return String.fromCharCode(((codigoCaracter - codigoBase + valorDesplazamiento) % 26) + codigoBase);
      } else {
        return caracter; 
      }
    }).join('');
  };

  return (
    <div className="form-container">
      <h1>Sigue las instrucciones para cifrar un mensaje con el método César</h1>
      
      <form>
        <p>Introduce el texto que deseas cifrar:</p>
        <input 
          placeholder="Agrega el texto" 
          value={texto}
          onChange={(e) => setTexto(e.target.value)} 
        />
        
        <p>Ingresa el tamaño desplazamiento para el cifrado:</p>
        <input 
          placeholder="Tamaño de desplazamiento" 
          type='number' 
          value={desplazamiento}
          onChange={(e) => setDesplazamiento(e.target.value)} 
        />
        
        <p>Nota: No olvides el tamaño del desplazamiento. Lo necesitarás para descifrar el mensaje.</p>

        <button type="button" onClick={abrirModal}>Cifrar</button>
      </form>

      {isModalAbierto && (
        <div className="modal">
          <div className="modal-content">
            <h2>Mensaje cifrado</h2>
            <p>{textoCifrado}</p>
            <button className="btn-descifrar" onClick={abrirModalDescifrado}>Descifrar mensaje</button>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}

      {isModalDescifradoAbierto && (
        <div className="modal">
          <div className="modal-content">
            <h2>Descifrar mensaje</h2>
            <p>Mensaje cifrado: {textoCifrado}</p>
            <p>Introduce el tamaño desplazamiento con el que se cifró el mensaje:</p>
            <input 
              placeholder="Tamaño de desplazamiento" 
              type='number' 
              value={desplazamientoDescifrado}
              onChange={(e) => setDesplazamientoDescifrado(e.target.value)} 
            />
            <p>Mensaje descifrado: {textoDescifrado}</p>
            <button className="btn-descifrar" onClick={descifrarMensaje}>Descifrar</button>
            <button onClick={cerrarModalDescifrado}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CifradoCesar;
