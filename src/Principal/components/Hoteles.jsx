import React, { useEffect, useState } from 'react';
import { apiHotelesGrupal } from '../../cliente/Principal/api/apiHoteles';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export const Hoteles = () => {
  const [listaHoteles, setListaHoteles] = useState([]);

  const viewHotelesList = async () => {
    const getListaHotelesList = await apiHotelesGrupal();
    setListaHoteles(getListaHotelesList);
  };

  useEffect(() => {
    viewHotelesList();
  }, []);

  return (
    <>
      <NavBar />
      <div className='container'>
        <h1>Encuentra el mejor hotel para ti.</h1>
        <br />
        <div className="row">
        <div className="col-md-7" >
          {listaHoteles.map((h) => (
              <div key={h._id} className="card mb-3 mt-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={h.img} alt={h.nombre} className="img-fluid" />
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
            
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};