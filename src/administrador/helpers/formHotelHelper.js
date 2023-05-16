import Swal from "sweetalert2";
import { createHotel, updateHotel } from "../api/apiHoteles";

export const sendData = async (state, option) => {
  let resultado;
  console.log(state.hotel);
  switch (option) {
    case 1:
      resultado = await createHotel({
        nombre: state.hotel.nombre,
        pais: state.hotel.pais,
        direccion: state.hotel.direccion,
        reservaciones: state.hotel.reservaciones,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Hotel agregado correctamente!",
          showConfirmButton: true,
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
    case 2:
      resultado = await updateHotel({
        id: state.hotel._id,
        nombre: state.hotel.nombre,
        pais: state.hotel.pais,
        direccion: state.hotel.direccion,
        reservaciones: state.hotel.reservaciones,
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
