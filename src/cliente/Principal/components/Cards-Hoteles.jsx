import React from "react";
import { Mapa } from "./Mapa";
import { useNavigate } from "react-router-dom";

export const Cards = ({hotel}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
      <div className="col-12 col-md-8">
      {hotel != null ? (
        hotel.map((h) => {
          return (
            <a key={h._id} href={`/habitacion?id=${h._id}`}  
            onClick={(event) => {
              event.preventDefault();
              navigate(`/habitacion/${h._id}`);
            }}>
            <div className="card mb-3 mt-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://images.mirai.com/INFOROOMS/10388447/9eSqxHU6zegpYzEmtKP3/9eSqxHU6zegpYzEmtKP3_large.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Hotel: {h.nombre}</h5>
                    <p className="card-text">Pais: {h.pais}</p>
                    <p className="card-text">Direccion: {h.direccion}</p>
                    <p className="card-text">Calificacion: {h.calificacion}</p>
                  </div>
                </div>
              </div>
            </div>
            </a>   
          );
        })):(
            <p>Loading...</p>
          )}
          </div>
          <div className="mapa col-md-4 mt-2">
              <Mapa/>
          </div>
          </div>
     </div>
      <br />
    </>
  );
};
