import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarEventos, apiEventosId } from "../api/apiEventos";

export const EventoId = () => {
  const [evento, setEvento] = useState([]);
  console.log(evento);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewEventos = async () => {
    console.log("Entre");
    const getListaServicio = await apiEventosId(id);
    setEvento(getListaServicio);
  };

  useEffect(() => {
    viewEventos();
  }, [showModal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const addEventos = await agregarEventos(id);
    navigate(`/reservacion`);
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
            <button type="submit" className="btnReserva">
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
                src={evento.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-title">Nombre Evento: {evento.nombre}</p>
                <p>
                  Fecha Inicio:{" "}
                  {evento.fechaInicio
                    ? evento.fechaInicio.substring(0, 10)
                    : ""}
                </p>
                <p>
                  Fecha Final:{" "}
                  {evento.fechaFinal ? evento.fechaFinal.substring(0, 10) : ""}
                </p>
                <p>Precio: Q{evento.precio} c/u</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
