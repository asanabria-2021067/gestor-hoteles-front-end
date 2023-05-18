import React, { useEffect, useState } from "react";
import { apiHabitacionesIdHotel } from "../cliente/Habitacion/api/apiHabitaciones";
import { useParams } from "react-router-dom";
import { apiHotelesId } from "../cliente/Principal/api/apiHoteles";
import { NavBar } from "./Navbar-Admin";

export const MiHotel = () => {
  const [hotel, setHotel] = useState([]);
  const [todasHabitaciones, setTodasHabitaciones] = useState([]);
  console.log(todasHabitaciones);
  const [habitacion, setHabitaciones] = useState([]);
  const [eventos, setEventos] = useState([]);
  console.log(eventos);
  const [servicios, setServicios] = useState([]);
  const [administrador, setAdministrador] = useState("");
  const { id } = useParams();
  const viewHabitacionesId = async () => {
    const getListaHabitacionesFromApi = await apiHabitacionesIdHotel(id);
    setHabitaciones(getListaHabitacionesFromApi);
  };
  const viewHoteles = async () => {
    const getHotelPorId = await apiHotelesId(id);
    setHotel(getHotelPorId);
    setEventos(getHotelPorId.eventos);
    setServicios(getHotelPorId.servicios);
    setAdministrador(getHotelPorId.administrador);
    setTodasHabitaciones(getHotelPorId.habitaciones);
  };
  useEffect(() => {
    viewHoteles();
    viewHabitacionesId();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="titleHotel"> Mi Hotel</h1>
        <hr />
        <div className="containerMiHotel">
          <div className="hotel-details">
            <div className="hotel-image">
              <img src={hotel.img} alt="Hotel" />
            </div>
            <div className="hotel-info">
              <h2 className="hotel-name">{hotel.nombre}</h2>
              <p className="hotel-location">
                {hotel.direccion}, {hotel.pais}
              </p>
              <p className="hotel-rating">Calificación: {hotel.calificacion}</p>
              <p className="hotel-description">{hotel.descripcion}</p>
            </div>
          </div>
          <div className="row">
            <div className="services-section">
              <h3>Servicios</h3>
              <div className="services-list">
                {servicios.map((s) => (
                  <div key={s._id} className="service">
                    <img src={s.img} alt={s.nombre} />
                    <h4>{s.nombre}</h4>
                    <p>{s.descripcion}</p>
                    <p className="service-price">Precio: Q.{s.precio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="events-section">
              <h3>Eventos</h3>
              <div className="events-list">
                {eventos.map((e) => (
                  <div key={e._id} className="event">
                    <img src={e.img} alt={e.nombre} />
                    <h4>{e.nombre}</h4>
                    <p>Fecha Inicio: {e.fechaInicio}</p>
                    <p>Fecha Final: {e.fechaFinal}</p>
                    <p className="event-price">Precio: Q{e.precio} c/u</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rooms-section">
              <h3>Habitaciones Disponibles</h3>
              {habitacion.length === 0 ? (
                <h5>No hay habitaciones disponibles</h5>
              ) : (
                <div className="rooms-list">
                  {habitacion.map((h) => (
                    <div key={h._id} className="room">
                      <img src={h.img} alt={h.numero} />
                      <h4>Número de habitación: {h.numero}</h4>
                      <p>{h.descripcion}</p>
                      <p>Capacidad: {h.capacidad}</p>
                      <p className="room-price">Precio: Q.{h.costo}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="rooms-section">
              <h3>Habitaciones del hotel</h3>
              <div className="rooms-list">
                {todasHabitaciones.map((h) => (
                  <div key={h._id} className="room">
                    <img src={h.img} alt={h.numero} />
                    <h4>Número de habitación: {h.numero}</h4>
                    <p>{h.descripcion}</p>
                    <p>Capacidad: {h.capacidad}</p>
                    <p>Disponibilidad: {h.disponibilidad.toString()}</p>
                    <p className="room-price">Precio: Q.{h.costo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
