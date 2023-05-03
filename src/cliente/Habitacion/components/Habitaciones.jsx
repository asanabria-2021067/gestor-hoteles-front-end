import React from "react";
import { useEffect, useState } from "react";
import { apiHabitaciones } from "../api/apiHabitaciones";
import { useLocation, useParams } from "react-router-dom";

export const Habitaciones = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewHabitacionesList = async () => {
    const getListaHabitacionesFromApi = await apiHabitaciones(id);
    setListaHabitaciones(getListaHabitacionesFromApi);
  };

  useEffect(() => {
    viewHabitacionesList();
  }, [showModal]);

  return (
    <>
      <div className="container">
        <h1 className="h1">Lista de habitaciones:</h1>
        {listaHabitaciones.map((h) => {
          return (
            <div className="card mb-3 mt-4" key={h._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://images.mirai.com/INFOROOMS/10388447/9eSqxHU6zegpYzEmtKP3/9eSqxHU6zegpYzEmtKP3_large.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Numero de habitacion: {h.numero}
                    </h5>
                    <p class="text-danger">
                      15% de descuento en tu primera reservacion.
                    </p>
                    <p>{h.descripcion}</p>
                    <p>Capacidad: {h.capacidad}</p>
                    <button type="button" className="btn btn-success">
                      Precio: Q.{h.costo}
                    </button>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-warning"> Reservar </a>
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
