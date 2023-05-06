import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/servicios/";

export const apiServicios = async () => {
  try {
    const servicioId = await axios.get(`${URL}mostrar`);
    console.log(servicioId.data.servicioId)
    return servicioId.data.servicioId;
  } catch (error) {}
};