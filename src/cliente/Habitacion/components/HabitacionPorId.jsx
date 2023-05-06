import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { agregarHabitacion, apiHabitacionesId } from "../api/apiHabitaciones";

export const HabitacionPorId = () => {
  const [habitacion, setHabitacion] = useState([]);
  console.log(habitacion)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const viewHabitacionesId = async () => {
    console.log("Entre");
    const getListaHabitacionesFromApi = await apiHabitacionesId(id);
    setHabitacion(getListaHabitacionesFromApi);
  };

  useEffect(() => {
    viewHabitacionesId();
  }, [showModal]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const addHabitacion = await agregarHabitacion(id);
    console.log(addHabitacion);
    if (addHabitacion) {
      navigate(`/servicios`);
    }

  };

  return (
    <>
      <div className="search-container">
      <form className="formBusca" onSubmit={handleSearch}>
          <div className="date-box">
            <input type="date" placeholder="Entrada" />
            <input type="date" placeholder="Salida" />
          </div>
          <div className="guest-box">
            <input type="number" placeholder="Personas" />
          </div>
          <div className="submit-box">
            <button type="submit" className="btnReserva">
              Reservar
            </button>
          </div>
        </form>
        <div class="card text-bg-lg">
        <img src={habitacion.img} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">{habitacion.numero}</h5>
          <p class="card-text">{habitacion.descripcion}</p>
          <p class="card-text"><small>Hotel:{" "}
            {habitacion.hotel ? habitacion.hotel.nombre : "Sin nombre"}</small></p>
        </div>
      </div>
      </div>
      
    </>
  );
};