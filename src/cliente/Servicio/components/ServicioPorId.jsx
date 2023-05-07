import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarServicios, apiServiciosId } from "../api/apiServicios";

export const ServicioId = () => {
  const [servicio, setServicio] = useState([]);
  console.log(servicio)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewServiciosId = async () => {
    console.log("Entre");
    const getListaServicio = await apiServiciosId(id);
    setServicio(getListaServicio);
  };

  useEffect(() => {
    viewServiciosId();
  }, [showModal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const addServicio = await agregarServicios(id);
    navigate(`/eventos`);
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
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-12 col-md-12">
                    <img
                      src={servicio.img}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                </div>
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="card-title">
                      Nombre Servicio: {servicio.nombre}
                    </h5>
                    <p>{servicio.descripcion}</p>
                    <span type="button" className="btn btn-success">
                      Precio: Q.{servicio.precio}
                    </span>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};
