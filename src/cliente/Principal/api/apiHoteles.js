import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'http://localhost:8080/api/hoteles/';
const URL_ADMIN = 'http://localhost:8080/api/hoteles/porAdmin/';

const URL_BUSCAR = 'http://localhost:8080/api/buscar/hoteles/';



export const apiHoteles = async(hotel) => {
    console.log(hotel)
    if(hotel != ""){
    try {
        const hoteles = await axios.get(`${URL_BUSCAR}${hotel}`);
        console.log("AAA", hoteles.data.results)
        return hoteles.data.results;
    } catch (error) {
        console.log(error)
    }
    }
}
export const apiHotelesGrupal = async() => {
    try {
        const listaHoteles = await axios.get(`${URL}buscar`);
        return listaHoteles.data.listaHoteles;
    } catch (error) {
        console.log(error)
    }
}

export const apiHotelesPorAdmin = async() => {
    try {
        const hoteles = await axios.get(`${URL_ADMIN}${token}`);
        console.log("AAA", hoteles.data)
        return hoteles.data.listaHoteles;
    } catch (error) {
        console.log(error)
    }
}
export const apiHotelesId = async(id) => {
    try {
        const hoteles = await axios.get(`${URL}buscar/${id}`);
        console.log("AAA", hoteles.data.listaHoteles)
        return hoteles.data.listaHoteles;
    } catch (error) {
        console.log(error)
    }
}