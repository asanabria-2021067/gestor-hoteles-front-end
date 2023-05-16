import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/habitaciones/";

export const apiHabitaciones = async () => {
  try {
    const listaHabitaciones = await axios.get(`${URL}mostrar`);
    console.log(listaHabitaciones.data);
    return listaHabitaciones.data;
  } catch (error) {}
};