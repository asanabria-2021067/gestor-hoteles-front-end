import { createHabitacion, updateHabitacion } from "../api/apiHabitaciones";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  console.log(state);
  switch (option) {
    case 1:
      resultado = await createHabitacion({
        numero: state.habitacion.numero, // Modifica el acceso a los campos en el estado
        descripcion: state.habitacion.descripcion,
        costo: state.habitacion.costo,
        cantidad_personas: state.habitacion.cantidad_personas,
        tipo_habitacion: state.habitacion.tipo_habitacion,
        img: state.habitacion.img,
        hotel: state.habitacion.hotel,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Habitacion creada correctamente!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/listaHabitacionesAdmin";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      resultado = await updateHabitacion(
        state.habitacion._id, 
        state.habitacion.numero,
        state.habitacion.descripcion,
        state.habitacion.costo,
        state.habitacion.cantidad_personas,
        state.habitacion.tipo_habitacion,
        state.habitacion.img
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `Habitacion actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/habitaciones";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};
