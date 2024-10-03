import React from 'react';
import './tareaDos.css';
import { Link } from 'react-router-dom';

function TareaDos() {
  return (
    <div className="tareaDos-container">
      <h3 className="tareaDos-title">La tarea 3 se implementó en el registro de usuarios</h3>
      <p className="tareaDos-text">
        Para ir a la tarea solo seleccione el registro de usuario, en el cual se implementó un formulario de registro que almacena
        los datos cifrados en una base de datos que se encuentra en el hosting, mientras que los cifrados se aplicaron en diferentes campos, dentro de ese 
        formulario se pueden ver cifrados y descifrados a excepción del SHA-1 que solo se aplicó en la contraseña y ese no se descifra.
      </p>
      <br></br>
      <h4>Ver la base de datos en el hosting</h4>
      <a href="https://auth-db1267.hstgr.io/" target="_blank" title="Ir a la base de datos">Ingresar a la base de datos</a>
      <p className="tareaDos-text2">Usuario: u944938399_yoloxochitl</p>
      <p className="tareaDos-text2">Contraseña: ~8fJ/Pr:sO</p>
    </div>
  );
}

export default TareaDos;
