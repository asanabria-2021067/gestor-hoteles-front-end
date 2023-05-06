import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/eventos/";

export const apiEventos = async () => {
  try {
    const listaEventos = await axios.get(`${URL}mostrar`);
    console.log(listaEventos.data)
    return listaEventos.data;
  } catch (error) {}
};