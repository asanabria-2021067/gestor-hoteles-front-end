import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/hoteles/';
const URL_ADMIN = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/hoteles/porAdmin/';

const URL_BUSCAR = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/buscar/hoteles/';
const URL_BUSCAR_PAIS = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/hoteles/buscar/hoteles/pais/';


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

export const apiHotelFromCountry = async(country) => {
    console.log(country);
    if(country != ""){
    try {
        const hoteles = await axios.get(`${URL_BUSCAR_PAIS}${country}`);
        console.log(hoteles.data.listaHoteles[1]);
        return hoteles.data.listaHoteles[1];
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
        console.log("AAA", hoteles.data)
        return hoteles.data.listaHoteles;
    } catch (error) {
        console.log(error)
    }
}