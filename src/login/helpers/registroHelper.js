import { apiRegistro } from "../api/apiRegistro";
import Swal from "sweetalert2";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre de la persona es requerido"),
    correo: Yup.string()
      .required("El correo del usuario es requerido"),
  });

export const formOptions = { resolver: yupResolver(formSchema) };


export const sendData = async (state, option, id) => {
    let resultado;
    console.log(state.usuario)
    switch (option) {
      case 1:
        resultado = await apiRegistro({ 
          nombre: state.usuario.nombre,
          edad: state.usuario.edad,
          identificacion: state.usuario.identificacion,
          correo: state.usuario.correo,
          password: state.usuario.password,
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
              window.location.href = "/login";
            } else {
              window.location.href = "/";
            }
          });
        }
        break;
      default: 
        console.log('no sirve');
        break;
    }
};