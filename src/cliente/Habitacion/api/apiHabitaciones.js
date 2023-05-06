import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/habitaciones/";
const URLRESERVA = "http://localhost:8080/api/reservaciones/";


export const apiHabitaciones = async (id) => {
  try {
    const habitacionId = await axios.get(`${URL}mostrar/${id}`);
    return habitacionId.data;
  } catch (error) {}
};
export const apiHabitacionesId = async (id) => {
  try {
    const habitacionId = await axios.get(`${URL}mostrarID/${id}`);
    console.log( "HABITACION ID", habitacionId.data)
    return habitacionId.data;
  } catch (error) {}
};

export const agregarHabitacion = async (id) => {
  try{
    console.log( "AGREGAR")
    const agregarHabitacionId = await axios.post(`${URLRESERVA}agregarHabitacion/${id}`,  { headers: { "x-token": token } });
    console.log( "AGREGAR HIBITACION ID")
  }catch (error) {
    console.log(error)
  }
}