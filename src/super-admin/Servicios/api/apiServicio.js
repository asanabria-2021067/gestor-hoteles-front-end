import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/servicios/";

export const apiServicio = async () => {
  try {
    const listaServicios = await axios.get(`${URL}mostrar`);
    console.log(listaServicios.data);
    return listaServicios.data.servicioId;
  } catch (error) {}
};

export const updateServicio = async (id,
  nombre, precio, descripcion, 
) => {
  console.log(id);
  try {
    const servicioEditado = await axios.put(
      `${URL}editar/${id.id}`,
      {
        nombre: id.nombre,
        precio: id.precio,
        descripcion: id.descripcion,
        img: id.img,
        administrador: id.administrador,
      },
      { headers: { "x-token": token } }
    );
    return servicioEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el servicio!",
    });
  }
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

export const createServicio = async (nombre, precio, descripcion, img, hotel) => {
  console.log(nombre);
  try {
    const { servicioGuardado } = await axios.post(
      `${URL}agregarSuperAdmin`,
      {
        nombre: nombre.nombre, descripcion: nombre.descripcion, precio: nombre.precio, img: nombre.img, hotel: nombre.hotel
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