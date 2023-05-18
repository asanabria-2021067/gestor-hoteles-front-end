import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarHabitacion, apiHabitacionesId, editReservacion } from "../api/apiHabitaciones";
import { NavBar } from "../../Navbar-Usuario";
import * as yup from "yup";
import Swal from "sweetalert2";

export const HabitacionPorId = () => {
  const [habitacion, setHabitacion] = useState([]);
  const [reserva, setReserva] = useState({
    fechaInicio: '',
    fechaFinal: '',
    cantidadPersonas: 1,
  });

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
          <div className="card col-6 mb-3 mt-5">
            <div className="row g-0">
              <div className="col-md-12">
                <img
                  src={habitacion.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">
                    Numero de habitacion: {habitacion.numero}
                  </h5>
                  <p className="text-danger">
                    15% de descuento en tu primera reservacion.
                  </p>
                  <p>{habitacion.descripcion}</p>
                  <p>Capacidad: {habitacion.capacidad}</p>
                  <p>Hotel: {habitacion.hotel ? habitacion.hotel.nombre : 'Sin nombre'}</p>
                  <span type="button" className="btn btn-success">
                    Precio: Q.{habitacion.costo}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="search-container col-6">
            <form className="formReserva" onSubmit={handleSearch}>
              <div>
                <label htmlFor="fechaInicio">Entrada</label>
                <input
                  type="date"
                  value={reserva.fechaInicio}
                  name="fechaInicio"
                  id="fechaInicio"
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
                  min={reserva.fechaInicio}
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
                  max="5"
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