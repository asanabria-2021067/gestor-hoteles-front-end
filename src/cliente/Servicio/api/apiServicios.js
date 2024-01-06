import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/servicios/";
const URLRESERVA = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/reservaciones/";
export const apiServicios = async () => {
  try {
    const servicioId = await axios.get(`${URL}mostrar`);
    console.log(servicioId.data.servicioId)
    return servicioId.data.servicioId;
  } catch (error) {}
};
export const apiServiciosId = async (id) => {
  try {
    const servicioId = await axios.get(`${URL}mostrar/${id}`);
    console.log(servicioId.data)
    return servicioId.data;
  } catch (error) {}
};
export const agregarServicios = async (id) => {
  try {
    console.log( "AGREGAR")
    console.log("TOKEN", token)
    const servicioId = await axios.post(`${URLRESERVA}agregarServicios/${id}` ,null,  { headers: { "x-token": token } });
    console.log(servicioId.data)
    return servicioId.data;
  } catch (error) {}
};