import React, { useState } from 'react';

const IniciarSesion = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    correo: '',
    contraseña: ''
  });

  const manejarCambio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las validaciones necesarias o la llamada a una API
    console.log('Datos del formulario:', datosFormulario);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarEnvio}>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Ingresa tu correo"
            value={datosFormulario.correo}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="Ingresa tu contraseña"
            value={datosFormulario.contraseña}
            onChange={manejarCambio}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default IniciarSesion;
