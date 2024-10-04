import React from 'react';
import './tareaDos.css';
import { Link } from 'react-router-dom';

function TareaDos() {
  return (
    <div className="tareaDos-wrapper">
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
      <div className="tareaDos-container">
        <h3>Por qué se eligieron los frameworks</h3>
        <br></br>
        <h4>Angular</h4>
        <a href="https://cifradojuanfernando.vercel.app/cifradouno" target="_blank" title="Ir al framework">Dirigirse al framework Angular</a>
        <p>
          Angular es un framework muy útil para crear aplicaciones web interactivas y seguras. Permite organizar el código de manera clara y actualiza los datos cifrados sin recargar la página. También verifica que los formularios estén bien llenados, protege contra ataques de seguridad y facilita probar que todo funcione correctamente. Por eso, es una buena opción para implementar cifrado, ya que combina facilidad de uso, seguridad y capacidad de crecimiento.
        </p>
        <br></br>
        <h4>React</h4>
        <p>
          Se eligió React para realizar estos cifrados porque ofrece varias ventajas al manejar formularios y datos de forma interactiva y fluida. React permite gestionar fácilmente el estado de los campos y aplicar los diferentes métodos de cifrado sin recargar la página, lo que hace que la experiencia del usuario sea más rápida y amigable. Además, su estructura ayuda a organizar el código de forma clara, permitiendo separar la lógica de cifrado de la presentación.
        </p>
      </div>
    </div>
  );
}

export default TareaDos;
