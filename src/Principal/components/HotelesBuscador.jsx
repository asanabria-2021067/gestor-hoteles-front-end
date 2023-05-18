import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiHoteles } from "../../cliente/Principal/api/apiHoteles";
import { Mapa } from "../../cliente/Principal/components/Mapa";
import { NavBar } from "./NavBar";

export const HotelesBuscador = () => {
  const [resultado, setResultado] = useState([]);
  const { hotel } = useParams();
  console.log(hotel);

  const viewHotelesBuscados = async () => {
    const results = await apiHoteles(hotel);
    setResultado(results);
  };

  useEffect(() => {
    viewHotelesBuscados();
  }, []);

  return (
    <>
    <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            {resultado != null ? (
              resultado.map((h) => {
                return (
                  <a
                    key={h._id}
                    href={`/habitacion?id=${h._id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(`/habitacion/${h._id}`);
                    }}
                  >
                    <div className="card mb-3 mt-4">
                      <div className="row">
                        <div className="col-12 col-md-3 col-sm-12 col-xs-12">
                          <img src={h.img} />
                        </div>
                        <div className="col-12 col-md-8 col-sm-12 col-xs-12 ms-auto">
                          <div className="card-body">
                            <h5 className="card-title">Hotel: {h.nombre}</h5>
                            <p className="card-text">Pais: {h.pais}</p>
                            <p className="card-text">
                              Direccion: {h.direccion}
                            </p>
                            <p className="card-text">
                              Calificacion: {h.calificacion}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })
            ) : (
              <h2 className="mt-2">
                Escriba el pais o nombre del hotel que desee
              </h2>
            )}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};
