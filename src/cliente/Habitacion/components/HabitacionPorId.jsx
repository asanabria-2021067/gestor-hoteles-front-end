import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarHabitacion, apiHabitacionesId } from "../api/apiHabitaciones";

export const HabitacionPorId = () => {
  const [habitacion, setHabitacion] = useState([]);
  console.log(habitacion)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewHabitacionesId = async () => {
    console.log("Entre");
    const getListaHabitacionesFromApi = await apiHabitacionesId(id);
    setHabitacion(getListaHabitacionesFromApi);
  };

  useEffect(() => {
    viewHabitacionesId();
  }, [showModal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const addHabitacion = await agregarHabitacion(id);
    navigate(`/servicios`);
  };

  return (
    <>
      <div className="search-container">
        <form className="formBusca" onSubmit={handleSearch}>
          <div className="date-box">
            <input type="date" placeholder="Entrada" />
            <input type="date" placeholder="Salida" />
          </div>
          <div className="guest-box">
            <input type="number" placeholder="Personas" />
          </div>
          <div className="submit-box">
            <button
              type="submit"
              className="btnReserva"
            >
              Reservar
            </button>
          </div>
        </form>
      </div>
      <div className="container">
            <div className="card col-6 mb-3">
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
                    <p>Hotel:  {habitacion.hotel ? habitacion.hotel.nombre : 'Sin nombre'}</p>
                    <span type="button" className="btn btn-success">
                      Precio: Q.{habitacion.costo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};
