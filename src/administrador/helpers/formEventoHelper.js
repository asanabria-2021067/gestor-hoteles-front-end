import Swal from "sweetalert2";
import { createEvento, updateEvento } from "../api/apiEventos";

export const sendData = async (state, option, id) => {
  let resultado;
  console.log(state.evento);
  switch (option) {
    case 1:
      resultado = await createEvento({
        nombre: state.evento.nombre,
        fechaInicio: state.evento.fechaInicio,
        fechaFinal: state.evento.fechaFinal,
        descripcion: state.evento.descripcion,
        precio: state.evento.precio,
        tipo: state.evento.tipo
      }
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "evento creado correctamente!",
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
      resultado = await updateEvento(state.evento._id, {
        nombre: state.evento.nombre,
        fechaInicio: state.evento.fechaInicio,
        fechaFinal: state.evento.fechaFinal,
        descripcion: state.evento.descripcion,
        precio: state.evento.precio,
        tipo: state.evento.tipo
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Evento actualizado correctamente!`,
          confirmButtonText: true,
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
  }
};