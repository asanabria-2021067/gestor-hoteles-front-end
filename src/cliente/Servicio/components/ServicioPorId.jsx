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
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="card col-12 col-md-6 mb-3 mt-1">
            <div className="row g-0">
              <div className="col-md-12">
                <img
                  src={servicio.img}
                  className="img-fluid"
                  alt="..."
                  style={{ paddingTop: "10px" }}
                />
              </div>
              <div className="col-md-12">
                <div className="card-body">
                  <div className="align-items-center justify-content-center">
                    <h5 className="card-title text-center mt-2" style={{ color: 'black', fontSize: "30px", fontWeight: "bold", textAlign: "center" }} >
                      Nombre: {servicio.nombre}
                    </h5>
                    <p className="text-center mt-2 mb-2">{servicio.descripcion}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <btn className="btn btn-success" style={{width:"100%"}}>
                      Precio: Q.{servicio.precio}
                    </btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-container col-6 mt-5">
            <form className="formReserva2" onSubmit={handleSearch}>
              <div className="submit-box2" style={{marginTop:"30%"}}>
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
