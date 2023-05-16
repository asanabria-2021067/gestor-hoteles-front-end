import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/eventos/";

export const apiEventos = async () => {
  try {
    const listaEventos = await axios.get(`${URL}mostrar`);
    console.log(listaEventos.data);
    return listaEventos.data;
  } catch (error) {}
};

export const DeleteEvento = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminarEvento/${id}`, { headers: { "x-token": token}});
    
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

export const updateEvento = async (id, nombre, fechaInicio, fechaFinal, descripcion, precio, tipo) => {
  console.log(id);
  try {
    const { data: { eventoEditado } } = await axios.put(
      `${URL}editarEvento/${id.id}`,
      {
        nombre : id.nombre, 
        descripcion: id.descripcion, 
        fechaInicio: id.fechaInicio, 
        fechaFinal: id.fechaFinal, 
        precio: id.precio, 
        tipo: id.tipo
      },
      { headers: { "x-token": token } }
    );
    return eventoEditado;
  } catch (error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el evento!",
    });
  }
};

export const createEvento = async (nombre, fechaInicio, fechaFinal, descripcion, precio, tipo) => {
  console.log(nombre);
  try {
    const { eventoGuardado } = await axios.post(
      `${URL}registrarEvento`,
      {
        nombre: nombre, fechaInicio:  fechaInicio, fechaFinal: fechaFinal, descripcion: descripcion, precio: precio, tipo: tipo
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
