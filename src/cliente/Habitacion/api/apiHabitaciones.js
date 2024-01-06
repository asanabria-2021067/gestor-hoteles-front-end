import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/habitaciones/";
const URLRESERVA = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/reservaciones/";


export const apiHabitaciones = async (id) => {
  try {
    const habitacionId = await axios.get(`${URL}mostrar/${id}`);
    console.log(habitacionId.data);
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

export const apiHabitacionesIdHotel = async (id) => {
  try {
    const habitacionId = await axios.get(`${URL}mostrar/${id}`);
    console.log( "HABITACION ID", habitacionId.data)
    return habitacionId.data;
  } catch (error) {}
};

export const agregarHabitacion = async (id) => {
  try{
    console.log( "AGREGAR")
    console.log("TOKEN", token)
    const agregarHabitacionId = await axios.post(`${URLRESERVA}agregarHabitacion/${id}`, null, { headers: { "x-token": token } });
    console.log( "AGREGAR HIBITACION ID")
  }catch (error) {
    console.log(error)
  }
}

export const editReservacion = async (fechaInicio, fechaFinal, cantidadPersonas) => {
  try{
    console.log( "AGREGAR", fechaInicio)
    console.log("TOKEN", token)
    const editarReserva = await axios.post(`${URLRESERVA}editarReserva`, 
    {
      fechaInicio: fechaInicio.fechaInicio,
      fechaFinal: fechaInicio.fechaFinal,
      cantidadPersonas: fechaInicio.cantidadPersonas
    }, { headers: { "x-token": token } });
    console.log( "editarReserva ", editarReserva)
  }catch (error) {
    console.log(error)
  }
}