import React from 'react'
import { Footer } from '../../../Principal/components/Footer'
import { NavBar } from '../../Navbar-Usuario'
import { useState } from 'react';
import { useEffect } from 'react';
import { apiUsuarioById } from '../api/apiUsuarios';
import { apiReservacion } from '../../Reservacion/api/apiReservacion';
import { useNavigate } from 'react-router-dom';
var tokenId = localStorage.getItem("token");

export const HistorialReservacion = () => {
  const [usuario, setUsuario] = useState([]);
  const [reservacion, setReservacion] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const viewReservacion = async () => {
    const getListaHabitacionesFromApi = await apiReservacion();
    setReservacion(getListaHabitacionesFromApi);
    setHabitaciones(getListaHabitacionesFromApi.habitaciones);
    setServicios(getListaHabitacionesFromApi.servicios);
    setEventos(getListaHabitacionesFromApi.eventos);
  };

  useEffect(() => {
    viewReservacion();
  }, []);

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
              Aqui encontraras la información de las reservaciones que hayas hecho.
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
                <strong>Correo:</strong> {usuario.correo}
              </div>
              <div className="mg-top-10">
                <hr />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="details">
              <h3>
                Información de las reservaciones:<i className="fa fa-sheild"></i>
              </h3>
              <div>
                <h6>No. de reservacion: {reservacion._id}</h6> 
              </div>

              <div>
                <h6>Cantidad de personas: {reservacion.cantidadPersonas}</h6>
              </div>

              <div>
                <h6>Fecha de Inicio: {reservacion.fechaInicio}</h6> 
              </div>

              <div>
                <h6>Fecha de finalización: {reservacion.fechaFinal}</h6> 
              </div>

              <div>
                <h6>Fecha de finalización: {reservacion.fechaFinal}</h6> 
              </div>

              <br />
              <div>
                <h5>Habitaciones reservadas:</h5>
              </div>

              {habitaciones.length > 0 ? (
                <ul>
                  {habitaciones.map((h) => (
                    <div key={h._id} className="card mb-3 mt-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img
                            src={h.img}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {h.tipo}
                          </h5>
                          <strong className="text-primary">Numero de habitación: {h.numero}</strong>
                          <br />
                          <br />
                          <strong class="text-success">Precio: {h.costo}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </ul>
              ) : (
                <p>No se han agregado habitaciones a la reserva.</p>
              )}
              <h5>Servicios reservados:</h5>
              {servicios.length > 0 ? (
                <ul>
                  {servicios.map((s) => (
                    <div key={s._id} className="card mb-3 mt-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img
                            src={s.img}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Nombre: {s.nombre}
                          </h5>
                          <strong className="text-primary">Descripcion: {s.descripcion}</strong>
                          <br />
                          <br />
                          <strong className='text-success'> Precio: {s.precio} </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </ul>
              ) : (
                <p>No se han agregado servicios a la reserva.</p>
              )}


              <div>
                <h5>Eventos reservados:</h5>
              </div>
              {eventos.length > 0 ? (
                <ul>
                  {eventos.map((e) => (
                    <div key={e._id} className="card mb-3 mt-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                          <img
                            src={e.img}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {e.nombre}
                          </h5>
                          <strong className='text-primary'>Descripcion: {e.descripcion}</strong>
                          <br />
                          <br />
                          <strong className='text-success'>Precio: {e.precio}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </ul>
              ) : (
                <p>No se han agregado eventos a la reserva.</p>
              )}

              <div>
                <strong>Total:</strong> {reservacion.total}
              </div>

              <div className="mg-top-10">

                <hr />
              </div>
            </div>
          </div>

        </div>

        <button id="btnOpciones" type="button"

          href="/miPerfil"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/miPerfil`);
          }}
        >
          Regresar a mi perfil
        </button>

      </div>
      <br />
      <br />
      <Footer></Footer>
    </>
  )
}