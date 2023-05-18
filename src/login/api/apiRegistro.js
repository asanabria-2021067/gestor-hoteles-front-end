import axios from "axios";
import Swal from "sweetalert2";

const URL = 'http://localhost:8080/api/usuarios/';


export const apiRegistro = async (nombre, edad, identificacion, correo, password) => {
    console.log(nombre)
    try {
      const { usuarioGuardado } = await axios.post(
        `${URL}agregarUsuario`,
        {
          nombre: nombre, 
          edad: edad, 
          correo: correo, 
          password: password, 
          identificacion: identificacion,
        },
      );
      return true;
    } catch (error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo registrar el usuario.",
      });
    }
};
