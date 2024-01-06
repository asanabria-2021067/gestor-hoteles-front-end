import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/usuarios/";

export const apiUsuarios = async () => {
  try {
    const listaUsuarios = await axios.get(`${URL}mostrar`, {headers: {'x-token': token}});
    console.log(listaUsuarios.data);
    return listaUsuarios.data;
  } catch (error) {}
};

export const createUsuario = async (nombre, correo, password, edad, img, identificacion, rol ) => {
  console.log(nombre);
  try {
    const { servicioGuardado } = await axios.post(
      `${URL}agregarSuperAdmin`,
      {
        nombre: nombre.nombre, edad: nombre.edad, correo: nombre.correo, password: nombre.password, identificacion: nombre.identificacion, 
        img: nombre.img, rol:nombre.rol
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

export const updateUsuario = async (id,
  nombre, precio, descripcion, 
) => {
  console.log(id);
  try {
    const usuarioEditado = await axios.put(
      `${URL}editarSuperAdmin/${id.id}`,
      {
        nombre: id.nombre,
        id: id.id,
        edad: id.edad, 
        correo: id.descripcion, 
        password: id.password, 
        identificacion: id.identificacion, 
        img: id.img, 
        rol: id.rol
      },
      { headers: { "x-token": token } }
    );
    return usuarioEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el servicio!",
    });
  }
};
