import axios from "axios";
import Swal from "sweetalert2";
const URL_BUSCAR = 'http://localhost:8080/api/buscar/hotelUsuario/';

export const apiUsuarioHotel = async(usuarios, id) => {
    console.log(usuarios)
    if(usuarios != ""){
    try {
        const hoteles = await axios.get(`${URL_BUSCAR}${usuarios}/${id}`);
        console.log("AAA", hoteles.data.results)
        return hoteles.data.results;
    } catch (error) {
        console.log(error)
    }
    }
}