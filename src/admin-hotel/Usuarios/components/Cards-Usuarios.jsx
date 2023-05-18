import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiHotelesPorAdmin } from "../../../cliente/Principal/api/apiHoteles";

export const CardsUsuarios = ({usuario}) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          {Array.isArray(usuario) && usuario.length > 0 ? (
            usuario.map((u) => (
              <div className="card mb-3 mt-4" key={u._id}>
                <div className="row">
                  <div className="col-12 col-md-3 col-sm-12 col-xs-12">
                    <img src={u.img} alt="Sin imagen" />
                  </div>
                  <div className="col-12 col-md-8 col-sm-12 col-xs-12 ms-auto">
                    <div className="card-body">
                      <h5 className="card-title">Nombre: {u.nombre}</h5>
                      <p className="card-text">Id: {u._id}</p>
                      <p className="card-text">Correo: {u.correo}</p>
                      <p className="card-text">
                        Identificacion: {u.identificacion}
                      </p>
                      <p className="card-text">Rol: {u.rol}</p>
                      <p className="card-text">Reservacion: {u.reservacion}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="mt-2">No se encontró ningún usuario</h2>
          )}
        </div>
      </div>
    </div>
  );
};
