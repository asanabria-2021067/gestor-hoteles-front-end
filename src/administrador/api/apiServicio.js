import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/servicios/";

export const apiServicio = async () => {
  try {
    const listaServicios = await axios.get(`${URL}mostrar`);
    console.log(listaServicios.data);
    return listaServicios.data.servicioId;
  } catch (error) {}
};

export const DeleteServicio = async (id) => {
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

export const createServicio = async (nombre, precio, descripcion) => {
  console.log(nombre);
  try {
    const { servicioGuardado } = await axios.post(
      `${URL}agregar`,
      {
        nombre: nombre, descripcion: descripcion, precio: precio
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch (error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo agregar el servicio.",
    });
  }
};