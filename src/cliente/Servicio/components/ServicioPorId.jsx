import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarServicios, apiServiciosId } from "../api/apiServicios";
import { NavBar } from "../../Navbar-Usuario";

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
    <NavBar/>
      <div className="container">
        <div className="row">
        <div className="card col-6 mb-3 mt-5">
          <div className="row g-0">
            <div className="col-md-12">
              <img
                src={servicio.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
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
        <div className="search-container col-6">
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
