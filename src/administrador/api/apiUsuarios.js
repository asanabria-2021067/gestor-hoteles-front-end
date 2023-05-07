import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/usuarios/";

export const apiUsuarios = async () => {
  try {
    const listaUsuarios = await axios.get(`${URL}mostrar`);
    console.log(listaUsuarios.data.listaUsuarios);
    return listaUsuarios.data.listaUsuarios;
  } catch (error) {}
};
