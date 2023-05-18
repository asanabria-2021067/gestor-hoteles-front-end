import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/habitaciones/";

export const apiHabitaciones = async () => {
  try {
    const listaHabitaciones = await axios.get(`${URL}mostrar`);
    console.log(listaHabitaciones.data);
    return listaHabitaciones.data;
  } catch (error) {}
};

export const DeleteHabitacion = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar/${id}`,
      { headers: { "x-token": token } });

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Habitacion Eliminado Correctamente") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};


export const updateHabitacion = async (
  id,
  numero,
  descripcion,
  costo,
  cantidad_personas,
  tipo_habitacion,
  img
) => {
  console.log(id);
  console.log(numero);
  try {
    const habitacionEditada = await axios.put(
      `${URL}editar/${id}`,
      {
        numero: numero,
        descripcion: descripcion,
        costo: costo,
        capacidad: cantidad_personas,
        tipo: tipo_habitacion,
        img: img,
      },
      { headers: { "x-token": token } }
    );
    return habitacionEditada.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar la habitación",
    });
  }
};

export const createHabitacion = async (
  numero,
  descripcion,
  costo,
  cantidad_personas,
  tipo_habitacion,
  img,
  hotel
) => {
  try {
    const response = await axios.post(
      `${URL}agregarSuperAdmin`,
      {
        numero: numero.numero,
        descripcion: numero.descripcion,
        costo: numero.costo,
        cantidad_personas: numero.cantidad_personas,
        tipo_habitacion: numero.tipo_habitacion,
        img: numero.img,
        hotel: numero.hotel
      }
    );
    console.log(response);
    return true;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "No se pudo agregar la habitación",
    });
  }
};
