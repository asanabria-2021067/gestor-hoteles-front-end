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
