import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:8080/api/habitaciones/";

export const apiHabitaciones = async (id) => {
  try {
    const habitacionId = await axios.get(`${URL}mostrar/${id}`);
    console.log(habitacionId.data)
    return habitacionId.data;
  } catch (error) {}
};