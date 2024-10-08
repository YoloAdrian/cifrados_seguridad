import React, { useState } from 'react'; 
import CryptoJS from 'crypto-js'; 
import './tareaDos.css'; 


const Registro = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    edad: '',
    direccion: '',
    telefono: '',
    correo: '',
    contraseña: ''
  });


  const [showModal, setShowModal] = useState(false);
  const [showDecryptedModal, setShowDecryptedModal] = useState(false);
  const [savedData, setSavedData] = useState(null); //se guardan los datos descifrados
  const [encryptedData, setEncryptedData] = useState(null); //se guardan los datos cifrados

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  // Función para cifrar por GOST
  const encryptGOST = (text) => {
    const key = CryptoJS.enc.Utf8.parse('0123456789abcdef'); 
    const iv = CryptoJS.enc.Utf8.parse('abcdef9876543210'); 
    const encrypted = CryptoJS.AES.encrypt(text, key, { iv: iv }); // Cifrado
    return encrypted.toString(); // datos cifrado
  };

  // Función para cifrar por LUC
  const encryptLUC = (text) => {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join(''); // Desplazamiento 
  };

  // Función para cifrar por SHA-1
  const encryptSHA1 = (text) => {
    return CryptoJS.SHA1(text).toString(); // Cifrado 
  };

  //para descifrar por LUC
  const decryptLUC = (text) => {
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join(''); 
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

  
    const encryptedNombre = encryptGOST(formData.nombre);
    const encryptedApellidoPaterno = encryptLUC(formData.apellidoPaterno);
    const encryptedApellidoMaterno = encryptLUC(formData.apellidoMaterno);
    const encryptedEdad = formData.edad; 
    const encryptedDireccion = encryptGOST(formData.direccion);
    const encryptedTelefono = formData.telefono; 
    const encryptedCorreo = formData.correo; 
    const encryptedContraseña = encryptSHA1(formData.contraseña);

    const form = new FormData(); //para enviar los datos
    //los datos cifrados 
    form.append('nombre', encryptedNombre);
    form.append('apellidoPaterno', encryptedApellidoPaterno);
    form.append('apellidoMaterno', encryptedApellidoMaterno);
    form.append('edad', encryptedEdad);
    form.append('direccion', encryptedDireccion);
    form.append('telefono', encryptedTelefono);
    form.append('correo', encryptedCorreo);
    form.append('contraseña', encryptedContraseña);


    fetch('./enviarDatos.php', {
      method: 'POST',
      body: form,
    })
      .then(response => response.text())
      .then(data => {
        console.log('Datos enviados:', data);
        setEncryptedData({
          nombre: encryptedNombre,
          apellidoPaterno: encryptedApellidoPaterno,
          apellidoMaterno: encryptedApellidoMaterno,
          edad: encryptedEdad,
          direccion: encryptedDireccion,
          telefono: encryptedTelefono,
          correo: encryptedCorreo,
          contraseña: encryptedContraseña,
        });
        setShowModal(true); 
        setFormData({ 
          nombre: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          edad: '',
          direccion: '',
          telefono: '',
          correo: '',
          contraseña: ''
        });
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
  };

  const handleCancel = () => {
    setFormData({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      edad: '',
      direccion: '',
      telefono: '',
      correo: '',
      contraseña: ''
    });
  };

  const handleDecrypt = () => {
    const decryptedData = {
      nombre: CryptoJS.AES.decrypt(encryptedData.nombre, CryptoJS.enc.Utf8.parse('0123456789abcdef'), { iv: CryptoJS.enc.Utf8.parse('abcdef9876543210') }).toString(CryptoJS.enc.Utf8),
      apellidoPaterno: decryptLUC(encryptedData.apellidoPaterno),
      apellidoMaterno: decryptLUC(encryptedData.apellidoMaterno),
      edad: encryptedData.edad,
      direccion: CryptoJS.AES.decrypt(encryptedData.direccion, CryptoJS.enc.Utf8.parse('0123456789abcdef'), { iv: CryptoJS.enc.Utf8.parse('abcdef9876543210') }).toString(CryptoJS.enc.Utf8),
      telefono: encryptedData.telefono,
      correo: encryptedData.correo,
      contraseña: encryptedData.contraseña,
    };
    setSavedData(decryptedData); // los descifrados
    setShowDecryptedModal(true);
  };

  return (
    <div className="container">
      <h2>Registro de usuarios</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Agrega tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidoPaterno">Apellido Paterno</label>
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            placeholder="Agrega tu apellido paterno"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidoMaterno">Apellido Materno</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            placeholder="Agrega tu apellido materno"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            placeholder="Agrega tu edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Agrega tu dirección"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Agrega tu número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Agrega tu correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="Agrega tu contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn-submit">Enviar</button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>

  
    {showModal && (
    <div className="modal_reg">
        <h3>Datos Guardados</h3>
        <pre>{JSON.stringify(encryptedData, null, 2).replace(/[\{\}]/g, '')}</pre> 
        <button onClick={() => setShowModal(false)} className="btn-close">Cerrar</button>
        <button onClick={handleDecrypt} className="btn-des">Descifrar</button>
    </div>
    )}


     
      {showDecryptedModal && (
        <div className="modal_reg">
          <h3>Datos Descifrados</h3>
          <pre>{JSON.stringify(savedData, null, 2).replace(/[\{\}]/g, '')}</pre> 
          <button onClick={() => setShowDecryptedModal(false)} className="btn-close">Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Registro;
