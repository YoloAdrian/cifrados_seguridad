<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once('./conexion.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $apellidoPaterno = $_POST['apellidoPaterno'];
    $apellidoMaterno = $_POST['apellidoMaterno'];
    $edad = $_POST['edad'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    $conn = new conexion();
    
    // Consulta para insertar los datos
    $query = "INSERT INTO registro_usuarios (nombre, apellido_paterno, apellido_materno, edad, direccion, telefono, correo, contraseña) 
              VALUES ('$nombre', '$apellidoPaterno', '$apellidoMaterno', $edad, '$direccion', '$telefono', '$correo', '$contraseña')";
    
    $insert = mysqli_query($conn->conectarbd(), $query);

    if ($insert) {
        echo "Datos registrados:<br>";
        echo "Nombre: $nombre, Apellido Paterno: $apellidoPaterno, Apellido Materno: $apellidoMaterno, Edad: $edad, Dirección: $direccion, Teléfono: $telefono, Correo: $correo";
    } else {
        echo "Error al registrar los datos: " . mysqli_error($conn->conectarbd());
    }
} else {
    echo "Acceso no permitido.";
}
?>
