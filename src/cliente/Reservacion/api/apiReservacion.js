import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/reservaciones/';



export const apiReservacion = async() => {
    try {
        console.log(token)
        const reservacion = await axios.get(`${URL}miReservacion` , { headers: { "x-token": token } });
        console.log("AAA", reservacion.data)
        if(reservacion){
        return reservacion.data;
    }else{
        return "Sin historial"
    }
    } catch (error) {
        console.log(error)
    }
}
export const deleteHabitaciones = async(id) => {
    try {
        console.log(token)
        const reservacion = await axios.delete(`${URL}eliminarHabitacion/${id}` , { headers: { "x-token": token } });
        console.log("AAA", reservacion.data)
        return reservacion.data;
    } catch (error) {
        console.log(error)
    }
}
export const deleteServicios = async(id) => {
    try {
        console.log(token)
        const reservacion = await axios.delete(`${URL}eliminarServicio/${id}` , { headers: { "x-token": token } });
        console.log("AAA", reservacion.data)
        return reservacion.data;
    } catch (error) {
        console.log(error)
    }
}
export const deleteEventos = async(id) => {
    try {
        console.log(token)
        const reservacion = await axios.delete(`${URL}eliminarEvento/${id}` , { headers: { "x-token": token } });
        console.log("AAA", reservacion.data)
        return reservacion.data;
    } catch (error) {
        console.log(error)
    }
}
