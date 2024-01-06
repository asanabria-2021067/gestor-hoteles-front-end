import axios from "axios";
import Swal from "sweetalert2";
const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/reservaciones/';

export const apiReserva = async(id) => {
    try {
        const reservaciones = await axios.get(`${URL}hotel/${id}`);
        console.log(reservaciones.data)
        return reservaciones.data;
    } catch (error) {
        console.log(error)
    }
}

export const eliminarReservaById = async(id) => {
    try {
        const reservaciones = await axios.delete(`${URL}eliminar/${id}`);
        console.log(reservaciones)
        return reservaciones;
    } catch (error) {
        console.log(error)
    }
}