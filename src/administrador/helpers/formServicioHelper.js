import Swal from "sweetalert2";
import { createServicio, updateServicio } from "../api/apiServicio";

export const sendData = async (state, option, id) => {
    let resultado;
    console.log(state);
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
              window.location.href = "/listaServiciosAdmin";
            } else {
              window.location.href = "/listaServiciosAdmin";
            }
          });
        }
        break;
      case 2:
        resultado = await updateServicio({
          id: state.servicio._id,
          nombre: state.servicio.nombre,
          descripcion: state.servicio.descripcion,
          precio: state.servicio.precio,
        });
        if (resultado) {
          Swal.fire({
            icon: "success",
            title: "Genial!",
            text: `Hotel actualizado correctamente!`,
            confirmButtonText: true,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/listaHotelesAdmin";
            } else {
              window.location.href = "/listaHotelesAdmin";
            }
          });
        }
        break;
    }
  };