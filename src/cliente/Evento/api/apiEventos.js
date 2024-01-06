import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/eventos/";
const URLRESERVA = "https://proyecto-gestor-hoteles-back-end-gilt.vercel.app/api/reservaciones/";
export const apiEventos = async () => {
  try {
    const listaEventos = await axios.get(`${URL}mostrar`);
    console.log(listaEventos.data)
    return listaEventos.data;
  } catch (error) {}
};
export const apiEventosId = async (id) => {
  try {
    const eventoId = await axios.get(`${URL}mostrar/${id}`);
    console.log(eventoId.data)
    return eventoId.data;
  } catch (error) {}
};
export const agregarEventos = async (id) => {
  try {
    console.log( "AGREGAR")
    console.log("TOKEN", token)
    const eventoId = await axios.post(`${URLRESERVA}agregarEventos/${id}` , null, { headers: { "x-token": token } });
    console.log(eventoId.data)
    return eventoId.data;
  } catch (error) {}
};
export const actualizoPrecio = async (id) => {
  try {
    console.log( "AGREGAR")
    console.log("TOKEN", token)
    const eventoId = await axios.post(`${URLRESERVA}precioEvento`, { headers: { "x-token": token } });
    console.log(eventoId.data)
    return eventoId.data;
  } catch (error) {}
};