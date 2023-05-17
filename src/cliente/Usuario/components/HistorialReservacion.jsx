import React from 'react'
import { Footer } from '../../../Principal/components/Footer'
import { NavBar } from '../../Navbar-Usuario'
import { apiUsuarios } from '../../../super-admin/Usuarios/api/apiUsuarios';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiUsuarioById } from '../api/apiUsuarios';
var tokenId = localStorage.getItem("token");

export const HistorialReservacion = () => {
    const [usuario, setUsuario] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const viewCliente = async () => {
        const getCliente = await apiUsuarioById(tokenId);
        setUsuario(getCliente);
      };
    
      useEffect(() => {
        viewCliente();
      }, [showModal]);

    return (
        <>
            <NavBar></NavBar>
            <br />
            <div className="section-wrapper">
            <div className="row"></div>
            <section id="promo" className="promo section offset-header">
              <div className="container text-center">
                <h2 className="title">Historial de reservaciones</h2>
                <p className="intro">
                  Aqui encontraras la información relacionada con las reservaciones de tu usuario.
                </p>
              </div>
            </section>
          </div>
            <div className="container">
            <div className="card">
                
              <div className="card-body">
                <div className="details">
                  <h3>
                    Cliente: {usuario.nombre} <i className="fa fa-sheild"></i>
                  </h3>
                  <div>
                    <strong>Correo:</strong> {usuario.correo}
                  </div>

                  <div>
                    <strong>Identifacion:</strong> {usuario.identificacion}
                  </div>

                  <div>
                    <strong>Reservaciones:</strong> {usuario.reservacion}
                  </div>
                  <div className="mg-top-10">
                    
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
            <Footer></Footer>
        </>
    )
}
