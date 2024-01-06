import React, { useState } from "react";
import { Mapa } from "./Mapa";
import { useNavigate } from "react-router-dom";
import { SoloCalificacionEstrellas } from "../../Habitacion/components/CalificacionEstrellas";

export const Cards = ({hotel, location}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
      <div className="col-12 col-md-7">
      {hotel != null ? (
        hotel.map((h) => {
          return (
            <a key={h._id} href={`/habitacion?id=${h._id}`}  
            onClick={(event) => {
              event.preventDefault();
              navigate(`/habitacion/${h._id}`);
            }}>
           <div className="card mb-3 mt-4" id="cardHotelBuscador" >
                  <div className="row g-0">
                    <div className="col-6 col-md-4 col-sm-12 col-xs-12 ms-auto">
                      <img src={h.img} alt={h.nombre} style={{height: '24.3vh' }} id="imgCard" />
                    </div>
                    <div className="col-6 col-md-8 col-sm-12 col-xs-12 ms-auto">
                      <div className="card-body" style={{marginLeft: "-9vh"}}>
                        <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "30px", textAlign: "left" }}>
                          {h.nombre}
                        </h5>
                        <div className="">
                        <SoloCalificacionEstrellas calificacion={h.calificacion}></SoloCalificacionEstrellas>
                        </div>
                        <p className="card-text mt-2" style={{textAlign: "left"}}>
                          <strong>Pais:</strong> {h.pais}
                        </p>
                        <p className="card-text mt-1" style={{textAlign: "left"}}>
                          <strong>Direccion:</strong> {h.direccion}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </a>   
          );
        })):(
            <h2 className="mt-2" style={{color: 'red', fontSize: "25px", fontWeight: "bold", textAlign: "center", textTransform: "uppercase"}}>Escriba el pais o nombre del hotel que desee</h2>
          )}
          </div>
          <div className="mapa col-md-5 mt-4">
          <Mapa hotel={hotel} location={location} />
          </div>
          </div>
     </div>
      <br />
    </>
  );
};
