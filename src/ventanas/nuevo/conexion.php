<?php
echo getcwd();
class conexion{
    const user='u944938399_yoloxochitl';
    const pass='~8fJ/Pr:sO';
    const bd='u944938399_yoloxochitl';
    const servidor='localhost';

    public function conectarbd(){
        $conectar=new mysqli(self::servidor, self::user, self::pass, self::bd);
        if($conectar->connect_errno){
            die("error de conexion".$conectar->connect_error);
        }
        return $conectar;
    }

}
?>