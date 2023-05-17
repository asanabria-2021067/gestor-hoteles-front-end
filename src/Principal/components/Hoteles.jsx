import React, { useEffect, useState } from 'react'
import { apiHotelesGrupal } from '../../cliente/Principal/api/apiHoteles';
import { useParams } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export const Hoteles = () => {
  const [listaHoteles, setListaHoteles] = useState([]);
  console.log(listaHoteles);
  const [showModal, setShowModal] = useState(false);

  const viewHotelesList = async () => {
    const getListaHotelesList = await apiHotelesGrupal();
    setListaHoteles(getListaHotelesList);
  };

  useEffect(() => {
    viewHotelesList();
  }, [showModal]);

  return (
    <>
    <NavBar></NavBar>
      <div className='container'>
        <h1>Encuentra el mejor hotel para ti.</h1>
        <br />
        <div className="row">
          {listaHoteles.map((h) => {
            return (
                <div className="card" key={h._id} >
                <img src={h.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{h.nombre}</h5>
                  <p className="card-text">{h.pais}</p>
                  <p className="card-text">{h.direccion}</p>
                </div>
              </div>       
            )
          })}
        </div>
        
      </div>
      <Footer></Footer>
    </>
  )
}