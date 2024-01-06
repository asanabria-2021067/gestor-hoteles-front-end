import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarEventos, apiEventosId } from "../api/apiEventos";
import { NavBar } from "../../Navbar-Usuario";

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
    <NavBar/>
      <div className="container">
        <div className="row">
        <div className="card col-6 mb-3 mt-2">
          <div className="row g-0">
            <div className="col-md-12">
              <img
                src={evento.img}
                className="img-fluid rounded-start"
                alt="..."
                style={{paddingLeft: "30px", paddingTop:"20px", height: "80vh"}}
              />
            </div>
            <div className="col-md-12">
              <div className="card-body w-100">
                <p className="card-title" style={{ color: 'black', fontSize: "28px", textAlign: "center"}}><strong>Nombre Evento: </strong>{evento.nombre}</p>
                <p className="text-center" style={{ color: 'black', textAlign: "center"}}>
                  <strong>Fecha Inicio: </strong>{" "}
                  {evento.fechaInicio
                    ? evento.fechaInicio.substring(0, 10)
                    : ""}
                </p>
                <p className="text-center mb-2" style={{ color: 'black', textAlign: "center"}}>
                  <strong>Fecha Final: </strong>{" "}
                  {evento.fechaFinal ? evento.fechaFinal.substring(0, 10) : ""}
                </p>
                <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-success" style={{width:"100%"}}>Precio: Q{evento.precio} c/u</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-container col-6" style={{marginTop:"20%"}}>
          <form className="formReserva2" onSubmit={handleSearch}>
            <div className="submit-box">
              <button
                type="submit"
              >
                Reservar
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};
