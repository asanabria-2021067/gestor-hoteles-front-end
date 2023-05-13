import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/hoteles/";

export const apiHoteles = async () => {
  try {
    const listaHoteles = await axios.get(`${URL}buscar`);
    console.log(listaHoteles.data);
    return listaHoteles.data.listaHoteles;
  } catch (error) {}
};

export const updateHotel = async (
  nombre, pais, direccion, reservaciones
) => {
  console.log(nombre)
  console.log(direccion)
  try {
    const hotelEditado = await axios.put(
      `${URL}editar`,
      {
        nombre: nombre,
        direccion: direccion,
        pais: pais,
        reservaciones: reservaciones
      },
      { headers: { "x-token": token } }
    );
    return hotelEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el hotel!",
    });
  }
};

export const DeleteHoteles = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar/${id}`, { headers: { "x-token": token}});
    
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Adiós papu") {
      window.location.href = "/login";
    }
    if (message) {
      return message;
    }
  }
};

export const createHotel = async (nombre, pais, direccion, reservaciones) => {
  console.log(nombre);
  try {
    const { hotelGuardado } = await axios.post(
      `${URL}agregar`,
      {
        nombre: nombre, pais:  pais, direccion: direccion, reservaciones: reservaciones
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch (error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo agregar el evento.",
    });
  }
};
