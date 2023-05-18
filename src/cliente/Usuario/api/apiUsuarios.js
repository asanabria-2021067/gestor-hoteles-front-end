import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/usuarios/";
export const apiUsuarioById = async (token) => {
    try {
        const listaUsuarios = await axios.get(`${URL}mostrar/${token}`);
        console.log(listaUsuarios.data);
        return listaUsuarios.data;
    } catch (error) { }
}

export const apiEliminarUsuarioById = async (token) => {
    try {
        const listaUsuarios = await axios.delete(`${URL}eliminarById/${token}`);
        console.log(response.data.msg);
        return response.data;
    } catch (error) { }
}

export const updateProfile = async(id, nombre, correo, identificacion, edad) => {
   console.log(id)
   console.log(nombre)
   console.log(correo);
    try {
      const listaUsuarios = await axios.put(`${URL}editarMiUsuario`,{
        nombre: nombre.nombre,
        correo: nombre.correo,
        identificacion: nombre.identificacion,
        edad: nombre.edad,
        img: nombre.img
      }, {headers: {'x-token': token}});
      console.log(listaUsuarios.data.msg);
      return listaUsuarios.data;
    } catch (error) {}
  }

