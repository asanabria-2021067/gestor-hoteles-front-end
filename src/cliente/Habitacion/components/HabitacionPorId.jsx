import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarHabitacion, apiHabitacionesId, editReservacion } from "../api/apiHabitaciones";
import { NavBar } from "../../Navbar-Usuario";
import * as yup from "yup";
import Swal from "sweetalert2";
import { CalificacionEstrellas } from "./CalificacionEstrellas";

export const HabitacionPorId = () => {
  const [habitacion, setHabitacion] = useState([]);
  const [reserva, setReserva] = useState({
    fechaInicio: '',
    fechaFinal: '',
    cantidadPersonas: 1,
  });

  const fechaHoy = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();
  const { id } = useParams();

  const viewHabitacionesId = async () => {
    try {
      const getListaHabitacionesFromApi = await apiHabitacionesId(id);
      setHabitacion(getListaHabitacionesFromApi);
    } catch (error) {
      console.error("Error al obtener los datos de la habitación:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReserva((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    viewHabitacionesId();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      await reservaSchema.validate(reserva, { abortEarly: false });
      await agregarHabitacion(id);
      await editReservacion({
        fechaInicio: reserva.fechaInicio,
        fechaFinal: reserva.fechaFinal,
        cantidadPersonas: reserva.cantidadPersonas
      });
      navigate(`/servicios`);
    } catch (error) {
      let mensaje = "Por favor, complete todos los campos.";

      if (error.name === "ValidationError") {
        mensaje = error.errors[0];
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
      });
    }
  };

  const reservaSchema = yup.object().shape({
    fechaInicio: yup.string().required("Ingrese la fecha de inicio."),
    fechaFinal: yup.string().required("Ingrese la fecha final."),
    cantidadPersonas: yup.number().required("Ingrese la cantidad de personas."),
  });

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="card col-12 col-md-6 mb-3 mt-1" style={{width: "45%"}}>
            <div className="row g-0">
              <div className="col-md-12" style={{marginBottom:"-05%"}}>
                <img
                  src={habitacion.img}
                  className="img-fluid"
                  alt="..."
                  style={{ marginTop: "15px",height: "90%", width: "100%"}}
                />
              </div>
              <div className="col-md-12">
                <div className="card-body">
                <div className="align-items-center justify-content-center">
                      <h5 className="card-title text-center" style={{ color: 'black', fontSize: "30px", fontWeight: "bold", textAlign: "center" }} >
                        No: {habitacion.numero}
                      </h5>
                      <p className="text-center mt-2"><strong>Tipo: </strong>{habitacion.tipo}</p>
                      <p className="text-center mt-2"><strong>Descripcion: </strong>{habitacion.descripcion}</p>
                      <div className="row">
                      </div>
                      <p className="mt-2 text-center"><strong>Capacidad: </strong>{habitacion.capacidad} <i className="fa fa-user mx-1"></i></p>
                  <p className="mt-2 text-center mb-2"><strong>Hotel:</strong> {habitacion.hotel ? habitacion.hotel.nombre : 'Sin nombre'}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                  <button className="btn btn-success" style={{width:"90%"}}>
                    Precio: Q.{habitacion.costo}
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-container col-12 col-md-6" style={{marginTop: "12%"}}>
            <form className="formReserva mt-5" onSubmit={handleSearch}>
              <div>
                <label htmlFor="fechaInicio">Entrada</label>
                <input
                  type="date"
                  value={reserva.fechaInicio}
                  name="fechaInicio"
                  id="fechaInicio"
                  min={fechaHoy}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="fechaFinal">Salida</label>
                <input
                  type="date"
                  value={reserva.fechaFinal}
                  name="fechaFinal"
                  id="fechaFinal"
                  min={fechaHoy && reserva.fechaInicio}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="cantidadPersonas">Huéspedes</label>
                <input
                  type="number"
                  name="cantidadPersonas"
                  id="cantidadPersonas"
                  value={reserva.cantidadPersonas}
                  min="1"
                  max={habitacion.capacidad}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Reservar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};