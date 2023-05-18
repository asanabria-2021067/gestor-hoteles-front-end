import axios from "axios";
import Swal from "sweetalert2";
const URL = 'http://localhost:8080/api/reservaciones';

export const apiReserva = async() => {
    try {
        const reservaciones = await axios.get(`${URL}`);
        console.log(reservaciones.data)
        return reservaciones.data;
    } catch (error) {
        console.log(error)
    }
}