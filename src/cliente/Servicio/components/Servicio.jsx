import React from "react";
import { useEffect, useState } from "react";
import { apiServicios } from "../api/apiServicios";
import { useNavigate, useParams } from "react-router-dom";

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
      <div className="container">
        <h1 className="h1">Lista de servicios:</h1>
        {listaServicios.map((s) => {
          return (
            <div key={s._id} className="card mb-3 mt-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <a
                    href={`/servicioId?id=${s._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/servicioId/${s._id}`);
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
                    <h5 className="card-title">
                      Numero de habitacion: {s.nombre}
                    </h5>
                    <p>{s.descripcion}</p>
                    <span type="button" className="btn btn-success">
                      Precio: Q.{s.precio}
                    </span>
                    <a className="btn btn-warning ms-1"  href={`/servicioId?id=${s._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/servicioId/${s._id}`);
                    }}> Reservar </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <a
          className="btnReservar"
          href="/eventos"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/eventos`);
          }}
        >
          Eventos
        </a>
      </div>
      <br />
    </>
  );
};
