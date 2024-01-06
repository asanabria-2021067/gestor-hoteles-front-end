import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEventos } from "../api/apiEventos";
import { NavBar } from "../../Navbar-Usuario";

export const Evento = () => {
  const [listaEventos, setListaEventos] = useState([]);
  console.log(listaEventos);
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
    <NavBar/>
      <div className="container">
        <h1 className="mt-2" style={{ color: 'black', fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>Lista de Eventos:</h1>
        {listaEventos.map((s) => {
          return (
            <div key={s._id} className="col-md-6 col-12 card mb-3 mt-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <a
                     href={`/eventoId?id=${s._id}`}
                     onClick={(event) => {
                       event.preventDefault();
                       navigate(`/eventoId/${s._id}`);
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
                    <h3 className="card-title text-center"  style={{ color: 'black', fontSize: "28px", fontWeight: "bold", textAlign: "center"}} >Nombre: {s.nombre}</h3>
                    <p className="text-center mt-1"><strong>Inicio: </strong>{s.fechaInicio.substring(0, 10)} </p>
                    <p className="text-center mt-1 mb-1"><strong>Fin: </strong>{s.fechaFinal.substring(0, 10)}</p>
                    <div className="mx-4 mt-3">
                    <btn className="btn btn-success">Precio: Q{s.precio} c/u</btn>
                    <a className="btn btn-warning ms-1"  href={`/eventoId?id=${s._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/eventoId/${s._id}`);
                    }}> <i className="fa fa-heart mx-2"></i> Reservar </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex align-items-center justify-content-center">
        <a
          id="btnOpciones"
          href="/reservacion"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/reservacion`);
          }}
        >
          <i className="fa fa-receipt mx-2"></i>Cuenta
        </a>
        </div>
      </div>
      <br />
    </>
  );
};
