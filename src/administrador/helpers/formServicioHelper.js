import Swal from "sweetalert2";
import { createServicio } from "../api/apiServicio";

export const sendData = async (state, option, id) => {
    let resultado;
    console.log(state.servicio);
    switch (option) {
      case 1:
        resultado = await createServicio({
          nombre: state.servicio.nombre,
          descripcion: state.servicio.descripcion,
          precio: state.servicio.precio,
        }
        );
        if (resultado) {
          Swal.fire({
            icon: "success",
            title: "Genial!",
            text: "Servicio creado correctamente!",
            showConfirmButton: true,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            } else {
              window.location.href = "/";
            }
          });
        }
        break;
      case 2:
        console.log('hola');
    }
  };