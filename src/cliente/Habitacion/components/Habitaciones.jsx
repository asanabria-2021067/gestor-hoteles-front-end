import React from "react";
import { useEffect, useState } from "react";
import { FaLock, FaCar, FaWifi, FaUtensils, FaSwimmingPool } from 'react-icons/fa';
import { apiHabitaciones } from "../api/apiHabitaciones";
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../Navbar-Usuario";
import { MapaHotel } from "./MapaHotel.jsx";
import { apiHotelesId } from "../../Principal/api/apiHoteles";
import { CalificacionEstrellas } from "./CalificacionEstrellas.jsx";

export const Habitaciones = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  console.log(listaHabitaciones.length);
  const [hotel, setHotel] = useState({})
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(1);

  const { id } = useParams();
  const navigate = useNavigate();
  const viewHabitacionesList = async () => {
    const getListaHabitacionesFromApi = await apiHabitaciones(id);
    setListaHabitaciones(getListaHabitacionesFromApi);
  }

  const viewHotel = async () => {
    const getHoteles = await apiHotelesId(id);
    setHotel(getHoteles);
  };

  const handleSelect = (selectedIndex, e) => {
    setSelectedImageIndex(selectedIndex);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    viewHabitacionesList();
  }, []);

  useEffect(() => {
    viewHotel();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="mb-2" style={{ color: 'black', fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>
          <a target="_blank" href={`https://www.google.com/maps?q=${hotel?.latitud},${hotel?.longitud}`}>
            <i style={{ color: "blue" }} className="fa fa-thumbtack" title={"Ubicación de " + hotel.nombre}></i>
          </a> {hotel?.nombre} - 
          <a style={{ color: "blue" }} target="_blank" title="Ubicación via Google Maps" href={`https://www.google.com/maps?q=${hotel?.latitud},${hotel?.longitud}`}>
          {hotel?.direccion}</a></h2>
        <MDBRow className="mb-4 mt-3" style={{ minHeight: "78vh"}}>
          {hotel?.imgsHotel?.map((item, index) => (
            <MDBCol key={index} lg={3} md={12} sm={12} className='mb-2 mb-lg-1'>
              <div className="image-container" onClick={() => {
                setShowModal(true)
              }}>
                <img
                  src={item}
                  className={`w-100 shadow-1-strong rounded ${index % 2 === 0 ? 'custom-width' : 'custom-width-2'
                    } mb-3`}
                  alt={`Image ${index}`}
                  style={{ objectFit: '' }}
                />
                <div className="overlay" />
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
      <section style={{ backgroundColor: "#2c525e" }}>
        <div className="container pb-4">
          <div className="d-flex align-items-center justify-content-center" >
            <h1 className="mt-5" style={{ color: 'white', fontSize: "45px", fontWeight: "bold", textAlign: "center" }}> Informacion de {hotel?.nombre}</h1>
          </div>
          <div className="row mt-3"id="rowInfoHotel">
            {hotel?.latitud && hotel?.longitud ? (
              <div className="col-md-12">
              <MDBRow className="d-flex">
                <MDBCol className="mt-2 col-md-8 " size={12}>
                  <p style={{ color: '#daf1e3' }}>{hotel?.info}</p>
                  <h3 className="mt-5" style={{ color: 'white', fontSize: "30px", fontWeight: "bold", textAlign: "center", textTransform: "uppercase" }}>Servicios</h3>
                  <div id="containerServicios" className="d-flex flex-wrap justify-content-around mt-3 mb-2">
                    <div className="text-center align-items-center justify-content-center mb-2 servicio-item col-4 col-md-2">
                      <p style={{ color: 'white', fontWeight: "bold" }}>Seguridad</p>
                      <div className="mt-3 mx-auto servicio-icon" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#3792a3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FaLock size={30} color="white" />
                      </div>
                    </div>
                    <div className="text-center align-items-center justify-content-center mb-2 servicio-item col-4 col-md-2">
                      <p style={{ color: 'white', fontWeight: "bold" }}>Parking</p>
                      <div className="mt-3 mx-auto servicio-icon" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#3792a3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FaCar size={30} color="white" />
                      </div>
                    </div>
                    <div className="text-center align-items-center justify-content-center mb-2 servicio-item col-4 col-md-2">
                      <p style={{ color: 'white', fontWeight: "bold" }}>WiFi</p>
                      <div className="mt-3 mx-auto servicio-icon" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#3792a3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FaWifi size={30} color="white" />
                      </div>
                    </div>
                    <div className="text-center align-items-center justify-content-center mb-2 servicio-item col-4 col-md-2">
                      <p style={{ color: 'white', fontWeight: "bold" }}>Restaurante</p>
                      <div className="mt-3 mx-auto servicio-icon" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#3792a3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FaUtensils size={30} color="white" />
                      </div>
                    </div>
                    <div className="text-center align-items-center justify-content-center mb-2 servicio-item col-4 col-md-2">
                      <p style={{ color: 'white', fontWeight: "bold" }}>Piscina</p>
                      <div className="mt-3 mx-auto servicio-icon" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#3792a3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FaSwimmingPool size={30} color="white" />
                      </div>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol size={12} className="col-md-4 mt-2">
                    <MapaHotel latitud={hotel?.latitud} longitud={hotel?.longitud}></MapaHotel>
                  </MDBCol>
              </MDBRow>
            </div>
            ) : (
              <h2>Loading..</h2>
            )}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="container mt-4">
          <h1 style={{ color: 'black', fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>
            Habitaciones:</h1>
            {listaHabitaciones ?  (
              listaHabitaciones?.map((h) => {
                return (
              <div key={h._id} className="card mb-3 mt-4" id="cardHabitacionInfo">
                <div className="row g-0">
                  <div className="col-md-4">
                      <img
                        src={h.img}
                        className="img-fluid img-responsive"
                        alt="..."
                        style={{padding: "10px", borderRadius: "30px"}}
                      />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" id="cardBodyHabitaciones">
                    <div className="mt-1 d-flex align-items-center">
                      <div className="align-items-center justify-content-start">
                      <h5 className="card-title text-start mt-2" style={{ color: 'black', fontSize: "30px", fontWeight: "bold", textAlign: "center" }} >
                        No: {h.numero}
                      </h5>
                      <CalificacionEstrellas calificacion={hotel.calificacion} reservacion={hotel.reservaciones} />
                      <p className="text-start mt-2" style={{width:"15ch"}}><strong>Tipo: </strong>{h.tipo}</p>
                      <p className="text-start mt-2"><strong>Descripcion: </strong>{h.descripcion}</p>
                      <div className="row">
                      </div>
                      <p className="mt-2 text-start"><strong>Capacidad: </strong>{h.capacidad} <i className="fa fa-user mx-1"></i></p>
                      </div>
                      <div className="align-items-center justify-content-start" id="divPrecios" style={{marginLeft: "auto"}}>
                        <div className="d-flex gap-2">
                      <p className="text-start" style={{fontSize: "35px", fontWeight: "bold"}}>Q.{h.costo}</p>
                      <p className="mt-2" style={{color: "red", textDecoration:"line-through"}}> Q.{h.costo + 200}</p>
                      </div>
                      <p className="text-start mb-2" style={{fontSize: "13px", color: "green", fontWeight: "bold", marginTop: "-2px"}}>Disponible</p>
                        <a className="btn btn-primary" href={`/habitacionId?id=${h._id}`} style={{width: "100%"}}
                          onClick={(event) => {
                            event.preventDefault();
                            navigate(`/habitacionId/${h._id}`);
                          }}> <i className="fa fa-history mx-2"></i>Reservar </a>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
            ) : (
              <p style={{ textAlign: "left", fontSize: "25px", fontWeight: "bolder", marginTop: "20px", color: "darkred" }}>
                No hay habitaciones disponibles
              </p>
            )}
        </div>
        <br />
      </div>
    </>
  );
};
