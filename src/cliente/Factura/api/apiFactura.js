import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem('token');
const URL = 'https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/facturas/';



export const addFactura = async() => {
    try {
        console.log(token)
        const factura = await axios.post(`${URL}agregar` ,null, { headers: { "x-token": token } });
        console.log("AAA", factura.data)
        return factura.data;
    } catch (error) {
        console.log(error)
    }
}

export const addFacturaById = async(id) => {
    try {
        console.log(token)
        const factura = await axios.post(`${URL}agregar/${id}`);
        console.log("AAA", factura.data)
        return factura.data;
    } catch (error) {
        console.log(error)
    }
}
