import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiHoteles } from "../../cliente/Principal/api/apiHoteles";
import { Mapa } from "../../cliente/Principal/components/Mapa";
import { NavBarSinSection } from "./NavbarSinSection";

export const HotelesBuscador = () => {
  const [resultado, setResultado] = useState([]);
  const { hotel } = useParams();

  const navigate = useNavigate();

  const viewHotelesBuscados = async () => {
    const results = await apiHoteles(hotel);
    setResultado(results);
  };

  useEffect(() => {
    viewHotelesBuscados();
  }, [hotel]);

  return (
    <>
      <NavBarSinSection />
      <div className="container">
        <h1 style={{ fontSize: "45px", color: "#25587a", fontWeight: "bold", textAlign: "center" }}>
          HOTELES EN {hotel.toUpperCase()}
        </h1>
        <div className="row">
          {resultado.length !== 0 ? (
            resultado.map((h) => (
              <div key={h._id} className="col-12 col-md-6">
                <div className="card mb-3 mt-4" >
                  <div className="row g-0">
                    <div className="col-6 col-md-4 col-sm-12 col-xs-12 ms-auto">
                      <img src={h.img} alt={h.nombre} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="col-6 col-md-8 col-sm-12 col-xs-12 ms-auto">
                      <div className="card-body">
                        <h5 className="card-title mb-1" style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}>
                          {h.nombre}
                        </h5>
                        <p className="card-text mt-2" style={{textAlign: "center"}}>
                          <strong>Pais:</strong> {h.pais}
                        </p>
                        <p className="card-text mt-1 mb-1" style={{textAlign: "center"}}>
                          <strong>Direccion:</strong> {h.direccion}
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                        <span className="card-text mt-1" style={{ border: "1px solid black", borderRadius: "10px", padding: "5px" }}>
                          {h.calificacion} ⭐
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="mt-2" style={{ color: "red" }}>
              No se encuentran hoteles disponibles en esa localidad
            </h4>
          )}
        </div>
      </div>
      <br />
    </>
  );
};
