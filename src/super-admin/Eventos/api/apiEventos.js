import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/eventos/";

export const apiEventos = async () => {
  try {
    const token = localStorage.getItem("token");
    const listaEventos = await axios.get(`${URL}mostrar`, {
      headers: {
        "x-token": token
      }
    });
    console.log(listaEventos.data);
    return listaEventos.data;
  } catch (error) {}
};

export const DeleteEvento = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.delete(`${URL}eliminarEvento/${id}`, {
      headers: {
        "x-token": token
      }
    });
    
    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Adiós papu") {
      window.location.href = "/listaEventosAdmin";
    }
    if (message) {
      return message;
    }
  }
};

export const updateEvento = async (id, nombre, fechaInicio, fechaFinal, descripcion, precio, tipo) => {
  console.log(id);
  try {
    const token = localStorage.getItem("token");
    const { data: { eventoEditado } } = await axios.put(
      `${URL}editarEvento/${id.id}`,
      {
        nombre: id.nombre,
        descripcion: id.descripcion,
        fechaInicio: id.fechaInicio,
        fechaFinal: id.fechaFinal,
        precio: id.precio,
        tipo: id.tipo
      },
      {
        headers: {
          "x-token": token
        }
      }
    );
    return eventoEditado;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el evento!"
    });
  }
};

export const createEvento = async (nombre, fechaInicio, fechaFinal, descripcion, precio, tipo) => {
  console.log(nombre);
  try {
    const token = localStorage.getItem("token");
    const eventoGuardado = await axios.post(
      `${URL}registrarEvento`,
      {
        nombre: nombre.nombre,
        fechaInicio: nombre.fechaInicio,
        fechaFinal: nombre.fechaFinal,
        descripcion: nombre.descripcion,
        precio: nombre.precio,
        tipo: nombre.tipo,
        img: nombre.img,
        hotel: nombre.hotel,
      },
      {
        headers: {
          "x-token": token
        }
      }
    );
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo agregar el evento."
    });
    return false;
  }
};