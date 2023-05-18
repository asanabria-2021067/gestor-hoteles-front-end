import Swal from "sweetalert2";
import { createUsuario, updateUsuario } from "../api/apiUsuarios";

export const sendData = async (state, option, id) => {
    let resultado;
    console.log(state.usuario);
    switch (option) {
      case 1:
        resultado = await createUsuario({
          nombre: state.usuario.nombre,
          correo: state.usuario.correo,
          password: state.usuario.password,
          edad: state.usuario.edad,
          img: state.usuario.img,
          identificacion: state.usuario.identificacion,
          rol: state.usuario.rol
        }
        );
        if (resultado) {
          Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "usuario creado correctamente!",
            showConfirmButton: true,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/listausuariosAdmin";
            } else {
              window.location.href = "/listausuariosAdmin";
            }
          });
        }
        break;
      case 2:
        resultado = await updateUsuario({
            nombre: state.usuario.nombre,
            id: state.usuario._id,
            correo: state.usuario.correo,
            password: state.usuario.password,
            edad: state.usuario.edad,
            img: state.usuario.img,
            identificacion: state.usuario.identificacion,
            rol: state.usuario.rol
        });
        if (resultado) {
          Swal.fire({
            icon: "success",
            title: "Genial!",
            text: `Usuario actualizado correctamente!`,
            confirmButtonText: true,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/listausuariosAdmin";
            } else {
              window.location.href = "/listausuariosAdmin";
            }
          });
        }
        break;
    }
  };