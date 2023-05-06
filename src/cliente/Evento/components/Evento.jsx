import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEventos } from "../api/apiEventos";

export const Evento = () => {
  const [listaEventos, setListaEventos] = useState([]);
  console.log(listaEventos)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const viewEventos = async () => {
    const getEventosFromApi = await apiEventos();
    setListaEventos(getEventosFromApi);
  };

  useEffect(() => {
    viewEventos();
  }, [showModal]);

  return (
    <>
      <div className="container">
        <h1 className="h1">Lista de Eventos:</h1>
        {listaEventos.map((s) => {
          return (
            <div key={s._id} className="card mb-3 mt-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <a
                    href="/eventoPorId"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <img
                      src={s.img}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-title">
                      Nombre Evento: {s.nombre}
                    </p>
                    <p>Fecha Inicio: {s.fechaInicio.substring(0,10)}</p>
                    <p>Fecha Final: {s.fechaFinal.substring(0,10)}</p>
                    <p>Precio: Q{s.precio} c/u</p>
                    <a className="btn btn-warning ms-1"> Reservar </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <a className="btnReservar" href="/reservacion" onClick={(event) => {
                      event.preventDefault();
                      navigate(`/reservacion`);
                    }}>Cuenta</a>
      </div>
      <br />
    </>
  );
};
