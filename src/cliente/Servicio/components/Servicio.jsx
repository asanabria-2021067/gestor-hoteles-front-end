import React from "react";
import { useEffect, useState } from "react";
import { apiServicios } from "../api/apiServicios";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../Navbar-Usuario";

export const Servicio = () => {
  const [listaServicios, setListaServicios] = useState([]);
  console.log(listaServicios);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const viewServicios = async () => {
    const getlistaServiciosFromApi = await apiServicios();
    setListaServicios(getlistaServiciosFromApi);
  };

  useEffect(() => {
    viewServicios();
  }, [showModal]);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1
          className="mt-2 mb-1"
          style={{
            color: "black",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Lista de servicios:
        </h1>
        <div className="row">
        {listaServicios.map((s) => (
  <div key={s._id} className="card mb-3 mt-4" id="cardHabitacionInfo">
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={s.img}
          className="img-fluid img-responsive"
          alt="..."
          style={{ padding: "10px", borderRadius: "30px" }}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body" id="cardBodyHabitaciones">
          <div className="mt-1 d-flex align-items-center">
            <div className="align-items-start justify-content-start mt-5">
              <h5
                className="card-title text-start"
                style={{
                  color: "black",
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
              {s.nombre}
              </h5>
              <p>{s.descripcion}</p>
            </div>
            <div
              className="align-items-end justify-content-center"
              id="divPrecios"
              style={{ marginLeft: "auto" }}
            >
              <div className="d-flex flex-column align-items-end mt-5 mx-5">
                <p
                  className="text-end"
                  style={{ fontSize: "35px", fontWeight: "bold" }}
                >
                  Q.{s.precio}
                </p>
                <p
                  className="text-end mb-2"
                  style={{
                    fontSize: "13px",
                    color: "green",
                    fontWeight: "bold",
                    marginTop: "-2px",
                  }}
                >
                  Disponible
                </p>
                <a
                  className="btn btn-primary"
                  href={`/servicioId?id=${s._id}`}
                  style={{ width: "100%" }}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/servicioId/${s._id}`);
                  }}
                >
                  <i className="fa fa-history mx-2"></i>Reservar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
        </div>
        <div className="d-flex align-items-center justify-content-center">
      <a
        id="btnOpciones"
        href="/eventos"
        onClick={(event) => {
          event.preventDefault();
          navigate(`/eventos`);
        }}
      >
        <i className="fa fa-calendar-check mx-2"></i>Eventos
      </a>
      </div>
      </div>
      
      <br />
    </>
  );
};