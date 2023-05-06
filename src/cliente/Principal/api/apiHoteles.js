import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'http://localhost:8080/api/hoteles/';
const URL_BUSCAR = 'http://localhost:8080/api/buscar/hoteles/';


export const apiHoteles = async() => {
    try {
        console.log('Entrada');
        const hoteles = await axios.get(`${URL}buscar`);
        console.log("AAA", hoteles.data.results)
        return hoteles.data.results;
    } catch (error) {
        console.log(error)
    }
}
