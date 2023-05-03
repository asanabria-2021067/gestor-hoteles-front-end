import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'http://localhost:8080/api/hoteles/';
const URL_BUSCAR = 'http://localhost:8080/api/buscar/hoteles/';



export const apiHoteles = async(hotel) => {
    console.log(hotel)
    try {
        const hoteles = await axios.get(`${URL_BUSCAR}${hotel}`);
        console.log("AAA", hoteles.data.results)
        return hoteles.data.results;
    } catch (error) {
        console.log(error)
    }
}
