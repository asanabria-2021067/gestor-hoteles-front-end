import axios from "axios";
import Swal from "sweetalert2";
const URL_BUSCAR = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/buscar/hotelUsuario/';

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