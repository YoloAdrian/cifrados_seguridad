import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styloscesar.css'; 

const CifradoEscitala = () => {
  const navigate = useNavigate();


  const [texto, setTexto] = useState('');
  const [numColumnas, setNumColumnas] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [numColumnasDescifrado, setNumColumnasDescifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');
  const [columnasUsadas, setColumnasUsadas] = useState(null);


  const [isModalAbierto, setIsModalAbierto] = useState(false);
  const [isModalDescifradoAbierto, setIsModalDescifradoAbierto] = useState(false);


  const abrirModal = () => {
    const regexTexto = /^[A-Za-z\s]{1,30}$/;
    if (!regexTexto.test(texto)) {
      alert('El texto debe tener máximo 30 caracteres y no debe contener números.');
      return;
    }

    const numCol = parseInt(numColumnas);
    if (isNaN(numCol) || numCol < 1 || numCol > 27) {
      alert('El número de columnas debe ser un número entre 1 y 27.');
      return;
    }

    const textoCifradoResultado = aplicarCifradoEscitala(texto, numCol);
    setTextoCifrado(textoCifradoResultado);
    setColumnasUsadas(numCol);

    if (isModalDescifradoAbierto) {
      cerrarModalDescifrado();
    }

    setIsModalAbierto(true);
    setTexto('');
    setNumColumnas('');
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
    const numCol = parseInt(numColumnasDescifrado);
    if (isNaN(numCol) || numCol < 1 || numCol > 27) {
      alert('El número de columnas debe ser un número entre 1 y 27.');
      return;
    }

    if (numCol !== columnasUsadas) {
      alert('El número de columnas ingresado no coincide con el que se usó para cifrar.');
      return;
    }

    const textoDescifradoResultado = aplicarCifradoEscitala(textoCifrado, numCol, true);
    setTextoDescifrado(textoDescifradoResultado);
    setNumColumnasDescifrado('');
  };

  const aplicarCifradoEscitala = (textoEntrada, valorColumnas, esDescifrado = false) => {
    const filas = Math.ceil(textoEntrada.length / valorColumnas);
    const textoRellenado = textoEntrada.padEnd(filas * valorColumnas, ' ');
    let resultado = '';

    if (esDescifrado) {
      for (let i = 0; i < filas; i++) {
        for (let j = i; j < textoRellenado.length; j += filas) {
          resultado += textoRellenado[j];
        }
      }
    } else {
      for (let i = 0; i < valorColumnas; i++) {
        for (let j = i; j < textoRellenado.length; j += valorColumnas) {
          resultado += textoRellenado[j];
        }
      }
    }

    return resultado.trim();
  };

  return (
    <div className="form-container">
      <h1>Sigue las instrucciones para cifrar un mensaje con el método Escítala</h1>

      <p>Introduce el texto que deseas cifrar</p>
      <input
        placeholder="Agrega el texto que desees cifrar"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <p>Elige el número de columnas para el cifrado</p>
      <input
        placeholder="Número de columnas"
        type="numeric"
        value={numColumnas}
        onChange={(e) => setNumColumnas(e.target.value)}
      />
      <p>Nota: No olvides el número de columnas de desplazamiento. Lo necesitarás para descifrar el mensaje.</p>
      <button onClick={abrirModal}>Cifrar</button>

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
            <p>Introduce el número de columnas con el que se cifró el mensaje:</p>
            <input
              placeholder="Número de columnas"
              type="numeric"
              value={numColumnasDescifrado}
              onChange={(e) => setNumColumnasDescifrado(e.target.value)}
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

export default CifradoEscitala;
