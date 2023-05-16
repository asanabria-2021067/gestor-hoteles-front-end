import React from "react";
import { useEffect, useState } from "react";
import { apiHabitaciones } from "../api/apiHabitaciones";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HabitacionPorId } from "./HabitacionPorId";
import { NavBar } from "../../Navbar-Usuario";

export const Habitaciones = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const viewHabitacionesList = async () => {
    const getListaHabitacionesFromApi = await apiHabitaciones(id);
    setListaHabitaciones(getListaHabitacionesFromApi);
  };
  
  useEffect(() => {
    viewHabitacionesList();
  }, [showModal]);

  return (
    <>
    <NavBar/>
      <div className="container">
        <h1 className="h1">Lista de habitaciones:</h1>
        {listaHabitaciones.map((h) => {
          return (
            <div key={h._id} className="card mb-3 mt-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <a
                    href={`/habitacionId?id=${h._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/habitacionId/${h._id}`);
                    }}
                  >
                    <img
                      src={h.img}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Numero de habitacion: {h.numero}
                    </h5>
                    <p className="text-danger">
                      15% de descuento en tu primera reservacion.
                    </p>
                    <p>{h.descripcion}</p>
                    <p>Capacidad: {h.capacidad}</p>
                    <span type="button" className="btn btn-success">
                      Precio: Q.{h.costo}
                    </span>
                    <a className="btn btn-warning ms-1" href={`/habitacionId?id=${h._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/habitacionId/${h._id}`);
                    }}> Reservar </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </>
  );
};
