import axios from "axios";
import Swal from "sweetalert2";
const URL = 'http://localhost:8080/api/reservaciones/';

export const apiReserva = async(id) => {
    try {
        const reservaciones = await axios.get(`${URL}hotel/${id}`);
        console.log(reservaciones.data)
        return reservaciones.data;
    } catch (error) {
        console.log(error)
    }
}